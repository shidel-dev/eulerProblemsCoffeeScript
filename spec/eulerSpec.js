describe("euler problem one", function(){
	it("finds the sum of all multiples of 3 and 5 below 1000", function(){
		expect(euler.threeFive()).toBe(233168);
	});
});

describe("euler problem two", function(){
  it("finds the sum of even fib numbers less then 4 million", function(){
  	expect(euler.evenFibSum(4000000)).toBe(4613732);
  });
});

describe("euler problem four",function(){
	it("finds largest palindrome for three digits factors",function(){
  	 var palindrome = new euler.palindrome(100,999);
  	 expect(palindrome.largest).toBe(906609);
	});
});





