
if not window.euler then window.euler = {}

euler.primeFactor = (n)->
	i = 2
	while i < n
	  if n % i == 0 
	    n /= i;    
	  i++
	i   
	    
