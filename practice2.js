let instance = null;

class Table{
    constructor(color){
        if(!instance){
        instance = this;

        }
        this.color = color;
      return instance;
        
        
    }
}

let table1 = new Table('red');
let table2 = new Table('red');
console.log(table1 === table2);

let instance2 = null;

function Chair(material){
    this.material = material;
    if(!instance2){
        instance2 = this;
    }
    return instance2;
}

let chair2 = new Chair('wood');
let chair1 = new Chair('wood');
console.log(chair1 === chair2);