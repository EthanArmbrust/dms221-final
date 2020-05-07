var weapon_data = [
  {
    name: "cattleman",
    fullname: "Cattleman Revolver",
    type: "Pistol",
    description: "Standard issue six-shot revolver",
    combat: "Quickly drawn from the hip",
    hunting: "Not recommended",
  },
  {
    name: "lancaster",
    fullname: "Lancaster Repeater",
    type: "Repeater",
    description: "A high capacity lever-action rifle.",
    combat:
      "High accuracy, high capacity, and fast reload time make this an excellent choice for medium to long range engagements",
    hunting:
      "Works best for medium-sized animals such as foxes, coyotes, pigs, and beavers",
  },
  {
    name: "varmint",
    fullname: "Varmint Rifle",
    type: "Rifle",
    description: "A low caliber pump-action rifle.",
    combat: "Not recommended due to poor stopping power of this rifle",
    hunting:
      "Works best on varmint animals like rabbits, skunks, and possoms without destroying the pelt",
  },
  {
    name: "bow",
    fullname: "Bow",
    type: "Bow",
    description: "A basic recurve bow and arrow",
    combat: "A silent weapon. Perfect for sneaking up on unsuspecting enemies",
    hunting:
      "Regular arrow is suited for medium to large sized animals. Small game arrow is best for rodents, birds, and bats",
  },
  {
    name: "pump_action_shotgun",
    fullname: "Lancaster Pump-action Shotgun",
    type: "Shotgun",
    description: "A pump-action shotgun that holds five shells",
    combat: "Very powerful up close, but very weak at range",
    hunting: "Will ruin the pelt of any animal shot with it. Not recommended",
  },
  {
    name: "carcano",
    fullname: "Carcano Rifle",
    type: "Sniper Rifle",
    description: "A bolt-action rifle with a built-in scope",
    combat:
      "Useful at long ranges. Slow rate of fire makes this ill-suited for close range engagements",
    hunting:
      "Great for picking off animals from a distance. Can leave a perfect pelt on any animal coyote-sized or larger",
  },
];

function generate_weapon_elements() {
  weapon_data.forEach((w) => {
    var newDiv = document.createElement("div");
    newDiv.id = w.name;
    var content = document.createTextNode(w.fullname);
    newDiv.appendChild(content);
    var weapon_list = document.getElementById("weapon_list");
    weapon_list.appendChild(newDiv);
  });
}

function init_mouseover_listeners() {
  weapon_data.forEach((w) =>
    document.getElementById(w.name).addEventListener("mouseover", mouseOver)
  );
}

function mouseOver() {
  var weapon_img = document.getElementById("weapon_img");
  weapon_img.setAttribute("src", "img/weapons/" + this.id + ".webp");
  weapon_img.removeAttribute("hidden");
}

generate_weapon_elements();
init_mouseover_listeners();
