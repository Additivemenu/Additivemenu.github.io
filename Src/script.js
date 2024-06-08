const productContainers = [
  ...document.querySelectorAll(".productCardList_container"),
];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

// bound scrolling handler 
productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect(); // get the dimensions of the container
  let containerWidth = containerDimensions.width;
  // console.log(containerDimensions.width);

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth; // scrolling width when clicking on button,; scrollLeft is an element property
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
