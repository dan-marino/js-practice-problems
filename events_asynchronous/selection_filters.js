document.addEventListener("DOMContentLoaded", function() {
  let animalsMenu = {
    Classifications: ["Animals", "Bear", "Turtle", "Whale", "Salmon", "Ostrich"],
    Vertebrate: ["Bear", "Turtle", "Whale", "Salmon", "Ostrich"],
    "Warm-blooded": ["Bear", "Whale", "Ostrich"],
    "Cold-blooded": ["Salmon", "Turtle"],
    Mammal: ["Bear", "Whale"],
    Bird: ["Ostrich"],
  };

  let animalClassificationsMenu = {
    Animals: ["Classifications", "Vertebrate", "Warm-blooded", "Cold-blooded", "Mammal", "Bird"],
    Bear: ["Vertebrate", "Warm-blooded", "Mammal"],
    Turtle: ["Vertebrate", "Cold-blooded"],
    Whale: ["Vertebrate", "Warm-blooded", "Mammal"],
    Salmon: ["Vertebrate", "Cold-blooded"],
    Ostrich: ["Vertebrate", "Warm-blooded", "Bird"],
  };
  let animalClassifications = document.getElementById("animal-classifications");
  let animals = document.getElementById("animals");
  let clearButton = document.getElementById("clear");

  function removeChildren(category) {
    [...category.children].forEach((item) => item.remove());
  };

  function populateMenu(category, menu, key) {
    menu[key].forEach(item => {
      let node = document.createElement("option");
      node.setAttribute("value", item);
      node.textContent = item;
      category.append(node);
    });
  };

  function reset() {
    removeChildren(animalClassifications);
    removeChildren(animals);
    populateMenu(animalClassifications, animalClassificationsMenu, "Animals");
    populateMenu(animals, animalsMenu, "Classifications");
  };

  animalClassifications.onchange = function(e) {
    let classification = e.target.value
    removeChildren(animals);
    populateMenu(animals, animalsMenu, classification);
  };

  animals.onchange = function(e) {
    let animal = e.target.value
    removeChildren(animalClassifications);
    populateMenu(animalClassifications, animalClassificationsMenu, animal);
  };

  clear.addEventListener("click", function(e) {
    e.preventDefault();
    reset();
  });
});
