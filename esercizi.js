/**
 * The code defines two functions in JavaScript to parse and filter a list of grocery items based on
 * their origin, specifically targeting items from a supermarket.
 * @param lista - The `lista` variable contains a string with a list of items, quantities, and their
 * origin. The data is structured in a specific format where each item is separated by a semicolon (;)
 * and each entry is on a new line. The format is as follows:
 * @returns The first function `createObjectsArray` returns an array of objects, where each object
 * represents an item from the input list. Each object has properties for the name of the item, the
 * quantity, and the origin.
 */
const lista = `
Mele;5;Supermercato
Banane;3;Supermercato
Arance;4;Supermercato
Pane;2;Panetteria
Latte;1;Supermercato
Uova;12;Supermercato
Carote;500;Supermercato
Patate;1;Supermercato
Pollo;500;Macelleria
Manzo;300;Macelleria
Pesce;400;Pescheria
Gamberetti;200;Pescheria
Calamari;300;Pescheria
Vino rosso;1;Enoteca`;




function createObjectsArray(lista) {
    let items = lista.trim().split('\n');
    let objectsArray = [];
  
    for (let i = 0; i < items.length; i++) {
      let parts = items[i].split(';');
      let object = {
        nome: parts[0],
        quantità: parseInt(parts[1]),
        provenienza: parts[2]
      };
      objectsArray.push(object);
    }
  
    return objectsArray;
  }
  
  console.log(createObjectsArray(lista))


  //2
  function filterBySupermercato(lista) {
    let items = lista.trim().split('\n');
    let supermarketItems = [];
  
    for (let i = 0; i < items.length; i++) {
      let parts = items[i].split(';');
      if (parts[2] === 'Supermercato') {
        let object = {
          nome: parts[0],
          quantità: parseInt(parts[1]),
          provenienza: parts[2]
        };
        supermarketItems.push(object);
      }
    }
  
    return supermarketItems;
  }
  
  console.log(filterBySupermercato(lista));
  