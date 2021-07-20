const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
	console.log('MONGODB CONNECTION OPEN!!!');
})
.catch(err => {
	console.log('OH NO MONGO CONNECTION ERROR!!!');
	console.log(err);
})


app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
	res.send('Hii!!')
})

app.listen(8080, () => {
	console.log('LISTENING TO PORT 8080!!!')
})