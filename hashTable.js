class HashTable {
  constructor(size = 7) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // Set (with separate chaining)
  // 1. accepts a key and a value
  // 2. hashes the key
  // 3. stores the key-value pair in the hash table array via separate chaining
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  // Get (with separate chaining)
  // 1. accepts a key
  // 2. hashes the key
  // 3. retrieves the key-value pair in the hash table
  // 4. If the key isn't found, returns undefined
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  // 1. Loops through the hash table array and returns an array of keys in the table
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  // 1. Loops through the hash table array and returns an array of values in the table
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable();
ht.set("hello", "world");
ht.set("cats", "are cool");
ht.set("red", "is cool");
ht.set("yellow", "flowers");
ht.set("purple", "flowers");
console.log(ht);
console.log(ht.get("yellow"));
console.log(ht.values());
console.log(ht.keys());

ht.keys().forEach(function (key) {
  console.log(ht.get(key));
});
