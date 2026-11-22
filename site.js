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

const urls = [
  "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/267685/pexels-photo-267685.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800"
].map((url) => {
  const image = new Image();
  image.src = url;
  return url;
});

const images = document.querySelectorAll("#carousel img");
let currentImage = 0;

const showImages = () => {
  images.forEach((image, index) => {
    const imageIndex = (index + currentImage + urls.length) % urls.length;
    image.src = urls[imageIndex];
    image.alt = `Carousel photo ${imageIndex + 1}`;
  });
};

document.getElementById("prev").addEventListener("click", () => {
  currentImage = (currentImage - 1 + urls.length) % urls.length;
  showImages();
});

document.getElementById("next").addEventListener("click", () => {
  currentImage = (currentImage + 1) % urls.length;
  showImages();
});

showImages();
setInterval(() => {
  currentImage = (currentImage + 1) % urls.length;
  showImages();
}, 5000);

