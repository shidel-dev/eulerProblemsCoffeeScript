// Generated by CoffeeScript 1.7.1
if (!window.euler) {
  window.euler = {};
}

euler.smallestMultiple = function(lower, upper) {
  var gcd, lcm, x, _i;
  gcd = function(m, n) {
    var xN;
    while (n !== 0) {
      xN = n;
      n = m % n;
      m = xN;
    }
    return m;
  };
  lcm = 1;
  for (x = _i = lower; lower <= upper ? _i <= upper : _i >= upper; x = lower <= upper ? ++_i : --_i) {
    lcm = (x * lcm) / gcd(x, lcm);
  }
  return lcm;
};