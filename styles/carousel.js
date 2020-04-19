function Carousel(idParent, arrImages) {
  let nameParent = document.getElementById(idParent);

  let length = arrImages.length;
  let totalWidth = length * 320;
  //alert(nameParent);
  for (let i = 0; i < length; i++) {
    let image = document.createElement("img");
    image.setAttribute("src", arrImages[i]);
    nameParent.appendChild(image);
  }
  let currentImage = 0;

  let left = document.createElement("button");
  left.innerHTML = (">>");
  left.className = "leftButton";
  nameParent.appendChild(left);

  let right = document.createElement("button");
  right.innerHTML = ("<<");
  right.className = "rightButton";
  nameParent.appendChild(right);

  left.addEventListener("click", rotateRight);
  right.addEventListener("click", rotateLeft);

  function rotateRight() {
    shift(1);
    if (currentImage == 0) {
      left.style.display = "none";
    }
    if (currentImage < length - 1) {
      right.style.display = "block";
    }

  }

  function rotateLeft() {
    shift(-1);
    if (currentImage == length - 1) {
      right.style.display = "none";
    }
    if (currentImage > 0) {
      left.style.display = "block";
    }
  }

  function shift(k) {
    currentImage -= k;
    for (let i = 0; i < length; i++) {
      nameParent.childNodes[i].style.transform = 'translateX(' + currentImage * (-100)  + '%)';
    }
  }
}
