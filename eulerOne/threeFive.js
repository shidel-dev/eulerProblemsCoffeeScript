// Generated by CoffeeScript 1.7.1
window.euler = window.euler || {};

euler.threeFive = function() {
  var f, i, list, maxedOut, sum, t;
  maxedOut = false;
  sum = 0;
  i = 1;
  list = [];
  while (!maxedOut) {
    t = 3 * i;
    f = 5 * i;
    if (t < 1000) {
      sum += t;
      list.push(t);
    } else {
      maxedOut = true;
    }
    if (f < 1000 && f % 3 !== 0) {
      sum += f;
    }
    i += 1;
  }
  console.log(list);
  return sum;
};
