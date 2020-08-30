let ItemManager = function() {
  const MIN_NAME_LENGTH = 5;
  let items = [];

  let invalidName = function(name) {
    return name.replace(' ', '').length >= MIN_NAME_LENGTH;
  };

  let invalidCategory = function(category) {
    return isOneWord(category) && invalidName(category)
  };

  let isOneWord = function(phrase) {
    return phrase.split(' ') === 1
  };

  let createSKU = function(name, category) {
    let code = (name[2] === ' ') ? name.slice(0, 2) + name[3] : name.slice(0, 3);
    return code + category.slice(0, 2);
  }

  return {
    items: items,
    create: function(name, category, quantity) {
      if (invalidName(name) || invalidCategory(category)) return false;
      let skuCode = createSKU(name, category);
      items.push({skuCode: skuCode, name: name, category: category, quantity: quantity});
      return 'valid item';
    },

    update: function(skuCode, object) {
      for(let i = 0, length = items.length; i < length; i++){
        if (items[i].skuCode === skuCode) {
          Object.keys(object).forEach(key => items[key] = object[key]);
          return 'updated';
        }
      }
    },

    delete: function(skucode) {
      for(let i = 0, length = items.length; i < length; i++){
        if (items[i].skuCode === skuCode) {
          item.splice(i, 1);
          return 'deleted';
        }
      }
    },

    inStock: function() {
      return items.filter(item => item.quantity > 0);
    },

    itemsInCategory: function(category) {
      return items.filter(item => item.category === category)
    },
  }
}();

let ReportManager = function() {
  let items;
  let findObject = function(skuCode) {
    for(let i = 0, length = items.items.length; i < length; i++){
      if (items.items[i].skuCode === skuCode) {
        return items.items[i];
      }
    }
  }
  return {
    init: function(itemManager) {
      items: itemManager;
      return this;
    },

    createReporter: function(skuCode) {
      const object = findObject(skuCode);
      Object.keys(object).forEach(key => console.log(`${key}:${object[key]}`))
    },

    reportInStock: function() {
      const itemsInStock() = items.items.inStock();
      return itemsInStock.map(item => item.name).join(', ');
    },
  }
}();

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

var kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
