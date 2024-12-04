window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    document.addEventListener("scroll", handleScroll);
    handleScroll()
  } else {
    document.removeEventListener("scroll", handleScroll);
    scrollToTopBtn.style.display = "none";
  }
})

let scrollToTopBtn = document.querySelector(".scroll-to-top-btn");

function handleScroll() {
  // let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // let GOLDEN_RATIO = 0.1;

  // if ((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO) {
  if (window.pageYOffset > 300) {
    //show button
    scrollToTopBtn.style.display = "flex";
  } else {
    //hide button
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0
  });
}

if (window.innerWidth < 768) {
  document.addEventListener("scroll", handleScroll);
  handleScroll()
}