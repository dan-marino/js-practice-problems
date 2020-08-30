const cars = [
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

document.addEventListener("DOMContentLoaded", function() {
  let make = document.getElementById("make");
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let price = document.getElementById("price");

  function filteredCars(cars, make = "All", model = "All", price = "Any", year = "Any") {
    return cars.filter(car => {
      return ((make === "All" || make === car.make) &&
              (model === "All" || model === car.model) &&
              (price === "Any" || price === String(car.price)) &&
              (year === "Any" || year === String(car.year))
            )
    });
  }

  let container = document.getElementById("container");
  const form = document.querySelector("form");

  const carsList = Handlebars.compile(document.getElementById("cars-list").innerHTML);
  const carTemplate = Handlebars.compile(document.getElementById("car-template").innerHTML);
  Handlebars.registerPartial("carTemplate", carTemplate)

  let htmlString = carsList({ cars: filteredCars(cars) });
  container.innerHTML = htmlString;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    htmlString = carsList({
      cars: filteredCars(cars, make.value, model.value, price.value, year.value)
    });
    container.innerHTML = htmlString;
  });

});
