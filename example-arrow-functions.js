var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Rich'));

// var person = {
//   name: 'Rich',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' say hi to ' + name);
//     });
//   }
// }
//
// person.greet();

// Challenge

function add(a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b
};

var addMini = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));

console.log(addStatement(9, 0));
console.log(addStatement(9, 11));

console.log(addMini(7, 3));
console.log(addMini(3, 5));
