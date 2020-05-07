var weapon_ids = ["cattleman", "lancaster"];

function init_listeners() {
  weapon_ids.forEach((w) =>
    document.getElementById(w).addEventListener("mouseover", mouseOver)
  );
}

function mouseOver() {
  var weapon_img = document.getElementById("weapon_img");
  weapon_img.setAttribute("src", "img/weapons/" + this.id + ".webp");
  weapon_img.removeAttribute("hidden");
}

init_listeners();
