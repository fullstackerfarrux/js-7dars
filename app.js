let svet = document.querySelector(".svet");

setInterval(() => {
  let src = svet.getAttribute("src");
  if (src === "images/svet.jpg") {
    svet.setAttribute("src", "images/svetyoniq.jpg");
  } else if (src === "images/svet.jpg") {
    svet.setAttribute("src", "images/svet.jpg");
  } else {
    svet.setAttribute("src", "images/svet.jpg");
  }
}, 1000);

let body = document.querySelector("body");

setInterval(() => {
  let a = Math.round(Math.random() * 255 + 1);
  let b = Math.round(Math.random() * 255 + 1);
  let c = Math.round(Math.random() * 255 + 1);
  body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}, 1000);
