let countDown = new Date("oct 31, 2024 00:00:00").getTime();

const x = setInterval(function () {
  let time = new Date().getTime();
  let distance = countDown - time;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = '00';
    document.getElementById("hours").innerHTML = '00';
    document.getElementById("mins").innerHTML = '00';
    document.getElementById("secs").innerHTML = '00';
  }
}, 1000);
