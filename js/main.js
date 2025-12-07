window.onload = init;
function init() {
  let images = document.getElementsByTagName("img");
  for (i = 0; i < images.length; i++) {
    images[i].onclick = showAnswer;
  }
}

function showAnswer(eventObj) {
  let image = eventObj.target;
  let name = image.id;
  name = "/img/" + name + ".jpg";
  image.src = name;
}
