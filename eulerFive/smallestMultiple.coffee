if not window.euler then window.euler = {}

euler.smallestMultiple = (lower, upper)->
  gcd = (m, n) ->
    while n != 0
      xN = n
      n = m % n
      m = xN
    m
    
  lcm = 1
  for x in [lower..upper]
      lcm = (x * lcm)/gcd(x, lcm)
  lcm
