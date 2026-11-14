const hours = new Date().getHours();
const isMorning = hours >= 4 && hours < 12;
const isAfternoon = hours >= 12 && hours < 17;
const isEvening = hours >= 17 || hours < 4;
const welcome = document.getElementById("welcome");

if (isMorning) {
  welcome.textContent = "Good morning! Welcome! Stay a while!";
} else if (isAfternoon) {
  welcome.textContent = "Good afternoon! Welcome! Stay a while!";
} else if (isEvening) {
  welcome.textContent = "Good evening! Welcome! Stay a while!";
}

localStorage.setItem("It's a secret to everybody.", "Message Recieved!!!!")
