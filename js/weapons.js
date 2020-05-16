const red_dead_red = "rgba(99, 0, 0, 0.5)";

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

//place divs in a circle
//from https://stackoverflow.com/questions/26599782/positioning-divs-in-a-circle-using-javascript

var theta = [];

function generate_thetas(n, rx, ry) {
  var frags = 360 / n;
  for (var i = 0; i <= n; i++) {
    theta.push((frags / 180) * i * Math.PI);
  }
}

function generate_weapon_elements(n, rx, ry) {
  var weapon_list = document.getElementById("weapon_list");
  var mainHeight = parseInt(
    window.getComputedStyle(weapon_list).height.slice(0, -2)
  );
  var circleArray = [];

  for (var i = 0; i < n; i++) {
    var w = weapon_data[i];
    var circle = document.createElement("div");
    circle.id = w.name;
    circleArray.push(circle);
    circleArray[i].posx = Math.round(rx * Math.cos(theta[i])) + "px";
    circleArray[i].posy = Math.round(ry * Math.sin(theta[i])) + "px";
    circleArray[i].style.position = "absolute";
    circleArray[i].style.top =
      mainHeight / 2 - parseInt(circleArray[i].posy.slice(0, -2)) + "px";
    circleArray[i].style.left =
      mainHeight / 2 - parseInt(circleArray[i].posx.slice(0, -2)) + "px";
    var thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", "img/weapons/no_bg/" + w.name + ".webp");
    thumbnail.setAttribute("width", "200");
    thumbnail.setAttribute("height", "100");
    circleArray[i].appendChild(thumbnail);
    weapon_list.appendChild(circleArray[i]);
  }

  /*
  weapon_data.forEach((w) => {
    var newDiv = document.createElement("div");
    newDiv.id = w.name;
    newDiv.style.display = "inline-block";
    newDiv.style.margin = "2px";
    var thumbnail = document.createElement("img");
    thumbnail.setAttribute("src", "img/weapons/" + w.name + ".webp");
    thumbnail.setAttribute("width", "100");
    thumbnail.setAttribute("height", "50");
    newDiv.appendChild(thumbnail);
    weapon_list.appendChild(newDiv);
  });
  */
}

function init_mouseover_listeners() {
  weapon_data.forEach((w) => {
    document.getElementById(w.name).addEventListener("mouseover", mouseOver);
    document.getElementById(w.name).addEventListener("mouseout", mouseOut);
  });
}

function mouseOver() {
  this.style.border = "2px solid " + red_dead_red;
  this.style.background = red_dead_red;
  var weapon_img = document.getElementById("weapon_img");
  weapon_img.setAttribute("src", "img/weapons/no_bg/" + this.id + ".webp");
  weapon_img.removeAttribute("hidden");
  const weapon_obj = weapon_data.find((element) => element.name == this.id);

  document.getElementById("weapon_name").innerText = weapon_obj.fullname;
  document.getElementById("weapon_type").innerText = "Type: " + weapon_obj.type;
  document.getElementById("weapon_desc").innerText =
    "Description: " + weapon_obj.description;
  document.getElementById("weapon_combat").innerText =
    "Combat: " + weapon_obj.combat;
  document.getElementById("weapon_hunt").innerText =
    "Hunting: " + weapon_obj.hunting;
}

function mouseOut() {
  this.style.border = "none";
  this.style.background = "none";
  console.log("mouse out " + this.id);
}

generate_thetas(weapon_data.length, 300, 300);
generate_weapon_elements(weapon_data.length, 300, 300);
init_mouseover_listeners();
