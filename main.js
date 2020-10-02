'use strict';

{


  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  const mintus = document.getElementById('mintus');
  const math = document.getElementById('sum');
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
  function calculateRemaining(timeTxt) {
    const timeresult = mintus.value;
    switch(timeresult) {
      case 'time_1':
        const result1 = String(3000000 - timeTxt);
        reguler(result1);
         break;
      case 'time_2':
        const result2 = String(6000000 - timeTxt);
        reguler(result2);
        break;
      case 'time_3':
        const result3 = String(9000000 - timeTxt);
        reguler(result3);
        break;
      }
  }
    //正規表現
    function reguler(regular) {
        const regulation = /(\d{2})(\d{2})(\d{3})/;
        const timemath = regular.replace(regulation,'$1分$2秒$3');
        sum_account.innerHTML = timemath;
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
    let timeTxt = timer.textContent.replace(":", "").replace(".", "");
    stop.click();
    calculateRemaining(timeTxt);
  });
}