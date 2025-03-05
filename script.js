class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.timerId = null;
    }
  
    start() {
      const timerElement = document.querySelector(this.selector);
  
      const updateTimer = () => {
        const now = new Date();
        const time = this.targetDate - now;
  
        if (time <= 0) {
          clearInterval(this.timerId);
          timerElement.querySelector('[data-value="days"]').textContent = '00';
          timerElement.querySelector('[data-value="hours"]').textContent = '00';
          timerElement.querySelector('[data-value="mins"]').textContent = '00';
          timerElement.querySelector('[data-value="secs"]').textContent = '00';
          return;
        }
  
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
  
        timerElement.querySelector('[data-value="days"]').textContent = days >= 10 ? days : '0' + days;
        timerElement.querySelector('[data-value="hours"]').textContent = hours < 10 ? '0' + hours : hours;
        timerElement.querySelector('[data-value="mins"]').textContent = mins < 10 ? '0' + mins : mins;
        timerElement.querySelector('[data-value="secs"]').textContent = secs < 10 ? '0' + secs : secs;
      };
  
      this.timerId = setInterval(updateTimer, 1000);
    }
  }
  
  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2025 00:00:00'),
  });
  
  timer.start();
  