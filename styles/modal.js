let send=document.getElementsByClassName("modal-trigger");
function openModal() {
  let currentModal = document.getElementById(this.dataset.target);
  currentModal.style.display = "block";
  document.body.style. backgroundColor= "rgba(0,0,0,.5)";
  let cross=document.createElement("button");
  cross.innerHTML=("X");
  cross.className="x";
  currentModal.appendChild(cross);
  cross.addEventListener('click', closeModal);
  for (let j=0;j<send.length;j++) {
    let button=currentModal.getElementsByClassName("modal-close")[j];
    button.addEventListener('click', closeModal);
  }
}

function closeModal() {
  this.parentNode.style.display = "none";
  document.body.style. backgroundColor= "white";
}
for (let i=0;i<send.length;i++) {
  send[i].addEventListener('click', openModal);
}
