function Animal(){
    this.type = 'mammel';
    
}

Animal.prototype.sayType = function() {
    console.log('I am a mammel');
};

function Dog(name){
    // this.name = name;
    this.name = name;
}

Dog.prototype.bark = function() {
    console.log('bark bark');
};
function inherits(child, parent) {
    function Surrogate(){}
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype.constructor = child;
  
  }

//   Developer.prototype = Object.create(Human.prototype);

// Developer.prototype.constructor = Developer;

// Developer.prototype._super = Human;

  inherits(Dog, Animal);

let max = new Dog('max');
console.log(max.name);
// console.log('max name', max.name);
// console.log('max bark', max.bark);
max.bark();
// max.name = 'Kevin';
// console.log('name change', max.name);
// console.log('mammel type', max.type);
// console.log('say type', max.sayType());
let instance = null;

