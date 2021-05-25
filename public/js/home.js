////////////////////////////MODAL////////////////////////////
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {modal.style.display = "block";}
span.onclick = function() {modal.style.display = "none";}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

////////////////////////////TIME////////////////////////////

let currentDay = $("#currentDay");
updateCurrentTime();
setInterval(updateCurrentTime, 1000);
function updateCurrentTime() {
    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

////////////////////////////LIVE TEXT////////////////////////////

const textEl = document.getElementById('text')
const text = "What's on your mind???"
let idx = 1
let speed = 200
function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
}
writeText()

////////////////////////////NAVIGATORS////////////////////////////

const homeNavigator = async () => {
    await fetch('/api/users/home').then(
        document.location.replace('/api/users/home')
    );
};
const dashboardNavigator = async () => {
    await fetch('/api/users/dashboard').then(
        document.location.replace('/api/users/dashboard')
    );
};
  
document.querySelector('#dashboard').addEventListener('click', dashboardNavigator);
document.querySelector('#home').addEventListener('click', homeNavigator);