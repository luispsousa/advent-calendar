Array.from(document.getElementsByClassName("column")).forEach((column) => {
  column.addEventListener("click", (e) => {
    console.log("click");
    console.log(e.target);
    e.target.childNodes[1].style.opacity = 0;
    e.target.childNodes[3].style.opacity = 1;
  });
});