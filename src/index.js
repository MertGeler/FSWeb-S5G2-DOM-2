import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

const menuItems = document.querySelectorAll(".nav-link");

menuItems.forEach((item) => {
  item.addEventListener("focus", (event) => {
    event.target.style.background = "red";
    event.target.style.fontSize = "2rem";
  });
  item.addEventListener("blur", (event) => {
    event.target.style.background = "none";
    event.target.style.fontSize = "1.6rem";
  });
});

document.querySelectorAll("img").forEach((element) => {
  element.addEventListener("mouseover", function (e) {
    e.target.style.filter = "grayscale(1)";
  });
  element.addEventListener("mouseout", function (e) {
    e.target.style.filter = null;
  });
});
document.querySelectorAll("img").forEach((element) => {
  element.addEventListener("dblclick", (event) => {
    event.target.style.transform = "scale(0.5)";
  });
  element.addEventListener("click", (event) => {
    event.target.style.transform = null;
  });
});

window.addEventListener("load", (event) => {
  setTimeout(() => {
    document.querySelector("body").style.backgroundColor = "red";
  }, 2000);
});

const theInput = document.createElement("imput");
theInput.setAttribute("type", "text");
theInput.addEventListener("click", (event) => {
  event.target.value = "text";
  event.target.style.border = "5px solid black";
});
document.querySelector(".content-section").append(theInput);

document.querySelector("input").addEventListener("keyup", (event) => {
  if (event.key == 3) {
    document.querySelector("body").style.backgroundColor = "blue";
  }
  event.target.value = event.target.value.toUpperCase();
});
