class Storage {
  constructor(array) {
    this.items = array;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    console.log(`добавляем ${item} на склад`);
    this.items.push(item);
  }

  removeItem(item) {
    console.log(`ищем ${item} на складе`);
    if (this.items.includes(item)) {
      console.log(`Нашли ${item} удаляем ${item} со склада`);
      this.items.splice(this.items.indexOf(item), 1);
    } else {
      console.log(`Извините у нас нет такого товара `);
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Базука');
console.table(storage.items);
