const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false})); // 解讀post送至body的資訊
app.use(cookieParser());                            // 使用cookie-parser
app.use(express.static('public'));                  // 使用public folder作為static files

app.set('view engine','pug');


//--Assignment 1: Your First Web Server--//
app.get('/',(req,res)=>{
	res.render('index');
});


//--Assignment 2: Build Backend API for Front-End--//
app.get('/getData',(req,res)=>{
	// 取query value
	const queryNumberString = req.query.number ;    // 判斷是否有參數
	const queryNumber = Number(queryNumberString);  // 判斷參數是否為正整數
	const sum = (1+queryNumber)*queryNumber/2 ; 	// 計算結果
	// 傳送參數至pug
	const paramsToPug = { queryNumberString, queryNumber, sum };
	res.render('getData', paramsToPug);
});


//--Assignment 4: HTTP Cookie--//
app.get('/myName', (req,res)=>{
	if (req.query.username) {
		const queryName = req.query.username;           // 自query string取得username
		res.cookie('username', queryName);              // 把存到cookie中
		res.redirect('/myName');                        // 重新導至主頁
	}
	res.render('myName', { name:req.cookies.username });
});


app.listen(3000);