window.euler = window.euler || {}

euler.palindrome = class Palindrome
  constructor:(@minFactor,@maxFactor)->
    @largest = @numberExplore()

  numberExplore:(minMax)->
    range = [@maxFactor..@minFactor]
    highest = 0
    for i in range
      if i * i < highest then break
      for j in range
        sum = i * j
        if @isPalindrome(sum) 
          highest = Math.max(sum,highest)
    highest      

  isPalindrome:(num)->
    s = num.toString().split("")
    if s.toString() == s.reverse().toString() then return true
    false
