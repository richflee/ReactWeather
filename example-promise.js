// Challenge area

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a != "number" || typeof b != "number") {
      reject("Both of the parameters need to be numbers!");
    }

    resolve(a + b);
  });
}

addPromise(2, 6).then(function success(sum){
  console.log("The sum is: " + sum);
}, function error(error) {
  console.log("error");
  console.log(error);
});

// addPromise(2, "Blah").then(function success(sum){
//   console.log("The sum is: " + sum);
// }, function error(error) {
//   console.log("error");
//   console.log(error);
// });
