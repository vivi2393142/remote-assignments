function max(numbers){
	// your code here, for-loop method preferred
	let maxNo = '';
	for ( let i = 0 ; i < numbers.length ; i++ ) {
		if ( numbers[i] > maxNo) {
			maxNo = numbers[i];
		}
	}
	return maxNo
}



console.log (max([1, 2, 4, 5])); // result to 5 
console.log (max([5, 2, 7, 1, 6])); // result to 7

