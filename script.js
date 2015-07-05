console.log("Hey this works!");

var hidden = mystery();
var result = hidden(3);
document.write(result);

function mystery(input) {
  var secret = 5;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery(4);
var result = hidden(2);
document.write(result);