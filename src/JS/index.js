const buttonTrailer = document.querySelector(".button-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal")
const videoLink = video.src;
const closeModal = document.querySelector(".close-modal")

function changeModal(){
  modal.classList.toggle("show")
}

buttonTrailer.addEventListener("click",() => {
  changeModal();
  video.setAttribute("src",videoLink);
})

closeModal.addEventListener("click",() => {
  changeModal();
  video.setAttribute("src","")

});
