function divider(a, b) {

  if (Number.isInteger(a / b)) {
    return 'si'
  }
  return 'no'
}

console.log(divider(10, 5));

console.log(divider(5, 11));


function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  } else {
    return parseFloat(r) * 2.0 * Math.PI;
  }
}


console.log(parseFloat(10.599999));
console.log(circumference('4.567dsjfdskjhfgksad'));

console.log(circumference('dgdsfgdfsgdfsgfsd'));