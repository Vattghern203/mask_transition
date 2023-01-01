const resetBtn = document.querySelector(".reset-animation")
const maskedImage = document.querySelector(".color-image")

resetBtn.addEventListener("click", () => {
    maskedImage.classList.remove("mask-animation")
    setTimeout( () => maskedImage.classList.add("mask-animation"), 100)
})