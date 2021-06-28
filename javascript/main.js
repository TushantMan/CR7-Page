$(document).ready(function () {
  $(".btn").click(function () {
    $(".items").toggleClass("show");
    $("ul li").toggleClass("hide");
  });
});
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
