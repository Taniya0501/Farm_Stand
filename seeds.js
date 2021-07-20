const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
	console.log('MONGODB CONNECTION OPEN!!!');
})
.catch(err => {
	console.log('OH NO MONGO CONNECTION ERROR!!!');
	console.log(err);
})

// const p = new Product({
// 	name: 'Ruby Grapefruit',
// 	price: 1.99,
// 	category: 'fruit'
// })

// p.save()
// 	.then(p => {
// 		console.log(p);
// 	})
// 	.catch(e => {
// 		console.log(e);
// 	})

const seedProducts = [
	{
		name: 'Eggplant',
		price: 1.55,
		category: 'vegetable'
	},
	{
		name: 'organic melon',
		price: 2.34,
		category: 'fruit'
	},
	{
		name: 'seedless mini watermelon',
		price: 5.99,
		category: 'fruit'
	},
	{
		name: 'organic celery',
		price: 1.50,
		category: 'vegetable'
	},
	{
		name: 'chocolate whole milk',
		price: 2.30,
		category: 'dairy'
	}
]

Product.insertMany(seedProducts)
	.then(res => {
		console.log(res);
	})	
	.catch(e=> {
		console.log(e);
	})