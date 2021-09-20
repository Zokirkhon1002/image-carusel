let leftBtn = document.getElementById("left"),
  rightBtn = document.getElementById("right"),
  images = document.getElementById("imgs"),
  eachImages = document.querySelectorAll("#imgs img"),
  x = 0,
  interval = setInterval(boshla, 3000);
console.log(eachImages);

function boshla() {
  x++;
  rasmAlmashish();
}

function rasmAlmashish() {
  if (x > eachImages.length - 1) {
    x = 0;
  } else if (x < 0) {
    x = eachImages.length - 1;
  }

  images.style.transform = `translateX(${-x * 550}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(boshla, 3000);
}

rightBtn.addEventListener("click", ()=>{
    x++;
    rasmAlmashish();
    resetInterval();
})

leftBtn.addEventListener("click", ()=>{
    x--;
    rasmAlmashish();
    resetInterval();
})

