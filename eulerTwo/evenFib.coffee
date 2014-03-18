window.euler = window.euler || {}

euler.evenFibSum = (limit) ->
    sum = 0
    a = 1
    b = 2 
    while b < limit 
        if b % 2 == 0 
          sum += b
        x = a 
        a  = b
        b += x
    sum    

	  	



