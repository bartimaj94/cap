const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

var text = document.getElementById("text");
var word = text.getElementsByTagName("span");
var i = 0;
function rotator() {
  word[i].style.display = "none";
  i = (i + 1) % word.length;
  word[i].style.display = "initial";
}
setInterval(rotator, 3500);
