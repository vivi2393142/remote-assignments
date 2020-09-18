function twoSum(nums, target){
	// your code here
	let answer = [];
	let sum = 0;
	let breaked = false;
	for ( let i = 0 ; i < nums.length ; i++ ) {
		if (breaked) {
			break;
		}
		for ( let k = 1 ; k < nums.length ; k++) {
			sum = nums[i] + nums [k];
			if ( sum === target ) {
				answer.push(i,k);
				breaked = true;
				break;
			}
		}
	}
	return answer;
}
/*
	For example:
			twoSum([2, 7, 11, 15], 9); 
		Should returns:
			[0, 1] 
		Because:
			nums[0]+nums[1] is 9
*/