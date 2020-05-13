function toggle() {
  var handleScroll = document.querySelector("body").style;
  var sec = document.getElementById("sec");
  var nav = document.getElementById("navigation");
  sec.classList.toggle("active");
  nav.classList.toggle("active");

  // if (nav.classList.value.includes("active")) {
  //   handleScroll.overflowY = "hidden";
  // } else {
  //   handleScroll.overflowY = "scroll";
  // }
}
