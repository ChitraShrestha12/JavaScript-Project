const faqHeader = document.querySelectorAll(".faq-item-header");
faqHeader.forEach((faqHeaderAll) => {
    const showFaqAnswer = faqHeaderAll.querySelector("img");
  showFaqAnswer.addEventListener("click", () => {
    const faqAnswer = faqHeaderAll.nextElementSibling
    const isActive = faqAnswer.classList.toggle("active")
    isActive?showFaqAnswer.src = "./assets/images/icon-minus.svg":showFaqAnswer.src = "./assets/images/icon-plus.svg"
  });
});
