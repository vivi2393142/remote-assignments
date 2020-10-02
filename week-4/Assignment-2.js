function ajax(src, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			var data = JSON.parse(xhr.responseText);
			callback(data);
		}
	}
	xhr.open('GET', src);
	xhr.send();
};

function render(data) {
	for (let i = 0; i < data.length; i++) {
		var productProperty = ['name', 'price', 'description'];
		productProperty.forEach(currentValue => {
			let item = document.createElement('div');
			var newContent = document.createTextNode(data[i][currentValue])
			item.appendChild(newContent);
			item.className = (currentValue === 'description') ? 'item itemLast' : 'item';
			document.getElementById('demo').appendChild(item)
		});
	};
};

ajax("https://cwpeng.github.io/live-records-samples/data/products.json",
	function (response) {
		render(response);
	});
// you should get product information in JSON format and render data in the page

