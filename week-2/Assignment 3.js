function avg(data){
	// your code here
	let totalPrice = 0;
	for ( let i = 0 ; i < data.size ; i++) {
		totalPrice += data.products[i].price
	}

	return (totalPrice / data.size);
} 

console.log(
	avg({
		size:3, 
		products:[
			{
				name:"Product 1",
				price:100 
			},
			{
				name:"Product 2",
				price:700 
			},
			{
				name:"Product 3",
				price:250 
			}
		]
	})
)
// show the average price of all products
