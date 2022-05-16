// const days = document.getElementsByClassName("daysTXT")[0];
// const hours = document.getElementsByClassName("hoursTXT")[0];
// const minutes = document.getElementsByClassName("minutesTXT")[0];
// const seconds = document.getElementsByClassName("secondsTXT")[0];
// console.log(days, hours, minutes, seconds);
// const currentyear = new Date().getFullYear();
// const newYearTime = new Date(`June 26 2022 17:00:00`);

// function updateCountdowntime() {
//   const currentTime = new Date();
//   const diff = newYearTime - currentTime;
//   const d = Math.floor(diff / (1000 * 60 * 60 * 24));
//   const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
//   const m = Math.floor(diff / (1000 * 60)) % 60;
//   const s = Math.floor(diff / 1000) % 60;

//   if ( s < 0 ) {
//     days.innerText =  "00" ;
//     hours.innerText = "00" ;
//     minutes.innerText =  "00" ;
//     seconds.innerText =  "00" ;
//   } else {
//     days.innerText = d < 10 ? "0" + d : d;
//     hours.innerText = h < 10 ? "0" + h : h;
//     minutes.innerText = m < 10 ? "0" + m : m;
//     seconds.innerText = s < 10 ? "0" + s : s;
//   }
// }

// setInterval(updateCountdowntime, 1000);

jQuery(document).ready(function( $ ) {

  /*------------------
        CountDown
    --------------------*/
    var countDownDate = new Date("may 26, 2022 17:00:00").getTime();

  var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (distance < 0) {
    document.getElementsByClassName("daysTXT")[0].innerHTML = "00";
    document.getElementsByClassName("hoursTXT")[0].innerHTML = "00";
    document.getElementsByClassName("minutesTXT")[0].innerHTML = "00";
    document.getElementsByClassName("secondsTXT")[0].innerHTML = "00";
  } else {
    document.getElementsByClassName("daysTXT")[0].innerHTML = days;
    document.getElementsByClassName("hoursTXT")[0].innerHTML = hours;
    document.getElementsByClassName("minutesTXT")[0].innerHTML = minutes;
    document.getElementsByClassName("secondsTXT")[0].innerHTML = seconds;
  }

}, 1000);

});
