if not window.euler then window.euler = {}

euler.sumSquareDiff = (limit)->
  range = [1..limit]
  sumOfSquares = 0
  squareOfSum = 0
  for i in range
    sumOfSquares += i * i 
    squareOfSum += i 
  squareOfSum * squareOfSum - sumOfSquares  
