window.euler = window.euler || {}

euler.threeFive = ->
  maxedOut = false
  sum = 0
  i = 1
  list = []
  while not maxedOut
    t = 3 * i 
    f = 5 * i
    if t < 1000
      sum += t
      list.push t
    else 
      maxedOut = true
    if f < 1000 and f % 3 != 0 
      sum += f
    i += 1
  console.log list  
  sum    

  