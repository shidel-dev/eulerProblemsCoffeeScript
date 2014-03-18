// Generated by CoffeeScript 1.7.1
if (!window.euler) {
  window.euler = {};
}

euler.sumSquareDiff = function(limit) {
  var i, range, squareOfSum, sumOfSquares, _i, _j, _len, _results;
  range = (function() {
    _results = [];
    for (var _i = 1; 1 <= limit ? _i <= limit : _i >= limit; 1 <= limit ? _i++ : _i--){ _results.push(_i); }
    return _results;
  }).apply(this);
  sumOfSquares = 0;
  squareOfSum = 0;
  for (_j = 0, _len = range.length; _j < _len; _j++) {
    i = range[_j];
    sumOfSquares += i * i;
    squareOfSum += i;
  }
  return squareOfSum * squareOfSum - sumOfSquares;
};
