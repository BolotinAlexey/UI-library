let send=document.getElementsByClassName("modal-trigger");
let z=0;
function openModal() {
  let currentModal = document.getElementById(this.dataset.target);

  currentModal.style.display = "block";
  currentModal.style.zIndex=''+ ++z;
  let cross=document.createElement("button");
  cross.innerHTML=("X");
  cross.className="xModal";
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
