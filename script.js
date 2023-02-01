/* Nav Bar Active classs */
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
/***************************************************************************************************************************************************/

/*invdvidual product image slider */
let MainImage = document.getElementById("MainImg");
let SmallImage = [...document.getElementsByClassName("small-img")];
SmallImage.map((img, i) => {
  console.log(i);
  img.addEventListener("click", () => {
    MainImage.src = SmallImage[i].src;
  });
});

/***************************************************************************************************************************************************/
