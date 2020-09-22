'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  const math = document.getElementById('sum');
  const mintus = document.getElementById('mintus');
  // const time = document.form.mintus;
  // const timeselect = time.selectedIndex;
  // const str = time.option[timeselect].value;
  const timeselect = document.querySelector('.mintus')

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

  function math1() {
    console.log("動作しました");
   
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
    // mintus.addEventListener('change',function() {
    // });
    math1() ;
      // const timeresult = timeselect;
      // switch (timeresult) {
      //   case "time_1":
      //     const a =180000 - timeTxt;
      //     console.log(a)
      //     break;
      //     case "time_2":
      //       const b =360000 - timeTxt;
      //       console.log(b)
      //       break;
      //       case  "time_3":
      //         const c =540000 - timeTxt;
      //         console.log(c);
      //         break;
      //       } 

  
    // console.log(timeTxt - 180000);
    // const t1 = timer.textContent.replace(":","");
    // setTimeout (() => {
    //   const t2 = document.getElementById("mintus");
    //   const timeresult = timeTxt - t2;
    //   console.log(timeresult);
    // },1000);
  });
}