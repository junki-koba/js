'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  const math = document.getElementById('sum');
  const mintus = document.getElementById('mintus');
  const sum_account = document.getElementById('sum_account');

  let startTime;
  let timeoutId;
  let elapsedTime = 0;

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;

    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  function setButtonStateInitial() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
  }

  function setButtonStateRunning() {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
  }

  function setButtonStateStopped() {
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
  }

  // 残り時間の計算
  function calculateRemaining() {
    let timeTxt = timer.textContent.replace(":", "").replace(".", "");
    const timeresult = mintus.value;
    switch(timeresult) {
      case 'time_1':
         const result1 = 3000000 - timeTxt;
         sum_account.value = result1;
         break;
      case 'time_2':
        const result2 = 6000000 - timeTxt;
        sum_account.value = result2;
        break;
      case 'time_3':
        const result3 = 9000000 - timeTxt;
        sum_account.value = result3;
        break;
      }
  }


  setButtonStateInitial();

  start.addEventListener('click', () => {
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', () => {
    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
  });

  reset.addEventListener('click', () => {
    setButtonStateInitial();
    timer.textContent = '00:00.000';
    elapsedTime = 0;
  });

 
  math.addEventListener('click', () => {
    stop.click();
    let timeTxt = timer.textContent.replace(":", "").replace(".", "");
    calculateRemaining() ;
  });
}