describe("euler problem one", function(){
	it("finds the sum of all multiples of 3 and 5 below 1000", function(){
		expect(euler.threeFive()).toBe(233168)
	})
})

describe("largest Palindrome solver",function(){
	it("finds answer for three digits",function(){
  	 var palindrome = new euler.palindrome(100,999);
  	 expect(palindrome.largest).toBe(906609);
	})
})





