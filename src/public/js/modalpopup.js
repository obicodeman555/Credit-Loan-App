(function modalPopUp(){
  document.querySelector('#modal-trigger').onclick = event => {
    event.preventDefault();
    document.querySelector('.modal-popup-content-container').style.display = 'block'
  } 
})();

(function closeModal(){
  const closeBtn = document.getElementById('close-modal-btn');


closeBtn.onclick = event => {
  event.preventDefault();
  modalContainer = event.target.parentElement.parentElement;
  modalContainer.style.display = 'none'
}
})()




document.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  document.querySelectorAll('.modal-popup-content-container').forEach(mainContainer => {
    mainContainer.style.display = 'none'
  });
});