/* 
Often we have nested functions in which we would like to preserve the context of this from its lexical scope. An example is shown below:

function Person(name) {
 this.name = name;
}
Person.prototype.prefixName = function (arr) {
 return arr.map(function (character) {
 return this.name + character;
 }, this);
};

Using Arrow Functions, the lexical value of this isn't shadowed. So re-write the above code using arrow function.
*/ 


function Person(name) {
    this.name = name;
}

Person.prototype.prefixName = function (arr) {
    return arr.map(character => {
      return `${this.name}${character}`;
    }, this);
};

let betping = new Person('betping');
console.log(Sravan.prefixName([1, 2, 3]));