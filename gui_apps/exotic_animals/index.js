const koalaBio = "The koala or, inaccurately, koala bear is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae and its closest living relatives are the wombats, which are members of the family Vombatidae.";
const dingoBio = "The dingo is a dog that is found in Australia. Its taxonomic classification is debated. It is a medium-sized canine that possesses a lean, hardy body adapted for speed, agility, and stamina. The dingo's three main coat colours are: light ginger or tan, black and tan, or creamy white.";
const platypusBio = "The platypus, sometimes referred to as the duck-billed platypus, is a semiaquatic egg-laying mammal endemic to eastern Australia, including Tasmania. The platypus is the sole living representative of its family and genus, though a number of related species appear in the fossil record.";
const tasmanianDevilBio = "The Tasmanian devil is a carnivorous marsupial of the family Dasyuridae. It was once native to mainland Australia and is now found in the wild only on the island state of Tasmania, including tiny east-coast Maria Island where there is a conservation project with disease-free animals.";
const wombatBio = "Wombats are short-legged, muscular quadrupedal marsupials that are native to Australia. They are about 1 m in length with small, stubby tails and weigh between 20 and 35 kg. There are three extant species and they are all members of the family Vombatidae.";

let animals = [
  { name: "Koala", img: "./images/koala.jpg", bio: koalaBio },
  { name: "Dingo", img: "./images/dingo.jpg", bio: dingoBio },
  { name: "Platypus", img: "./images/platypus.jpg", bio: platypusBio },
  { name: "Tasmanian Devil", img: "./images/tasmanian_devil.jpg", bio: tasmanianDevilBio },
  { name: "Wombat", img: "./images/wombat.jpg", bio: wombatBio }
]

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("container");

  let animalList = Handlebars.compile(document.getElementById("animal-list").innerHTML);
  let animalTemplate = Handlebars.compile(document.getElementById("animal-template").innerHTML);
  Handlebars.registerPartial("animalTemplate", animalTemplate);

  let htmlString = animalList({ animals });
  container.innerHTML = htmlString;

  let images = document.querySelectorAll("img");
  let timeoutId;
  images.forEach(img => img.addEventListener("mouseenter", displayBio));
  images.forEach(img => img.addEventListener("mouseleave", hideBio));


  function displayBio(e) {
    timeoutId = setTimeout(function() {
      e.target.parentNode.querySelector("figcaption").style.display = "inline";
    }, 2000);
  };

  function hideBio(e) {
    clearTimeout(timeoutId);
    e.target.nextElementSibling.style.display = "none";
  };
});
