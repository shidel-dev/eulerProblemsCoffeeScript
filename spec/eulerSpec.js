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

describe("euler problem three", function(){
	it("finds the highest prime factor of a number", function(){
		expect(euler.primeFactor(600851475143)).toBe(6857);
	})
})

describe("euler problem four",function(){
	it("finds largest palindrome for three digits factors",function(){
		var palindrome = new euler.palindrome(100,999);
		expect(palindrome.largest).toBe(906609);
	});
});

describe("euler problem five", function(){
	it("find the smallest number that can be evenly divided by all numbers 1-20", function(){
		expect(euler.smallestMultiple(1,20)).toBe(232792560);
	})
})

describe("euler problem six", function(){
	it("finds the diffrence between the square of sums and sum of the squares", function(){
		expect(euler.sumSquareDiff(100)).toBe(25164150)
	})
})

describe("euler problem eight", function(){
	it("finds the sum of five consecutive digits in a 1000 digit number", function(){
		expect(euler.largestProduct()).toBe(40824)
	})
})
