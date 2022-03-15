var currentTime = new Date();

var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

const heures = document.querySelector('.hours');
const minutess = document.querySelector('.minutes');
const secondes = document.querySelector('.seconds');

//set minutes 
if (minutes <10 ){
    minutes = "0" + minutes; 
}

//set seconds 
if(seconds < 10){
    seconds = "0" + seconds;
}

//set hours 
if(hours < 10){
    hours = "0" + hours;
}

heures.textContent = hours;
minutess.textContent = minutes;
secondes.textContent = seconds;