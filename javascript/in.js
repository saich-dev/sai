

//boolean//
var basi = true;
var sai = new Boolean(0);
var sai2 = new Boolean(false);
console.log("basi",basi);
console.log("sai",sai);
console.log("typeof basi",typeof(basi));
console.log("typeof sai",typeof(sai));
console.log("typeof sai2",typeof(sai2));

//Number//
var num = 20;
var num1 = new Number(5654545646);
console.log("num",num);
console.log("num1",num1);
console.log("typeof num",typeof(num));
console.log("typeof num1",typeof(num1));

//null//
var sa = null;
console.log(null);
console.log(typeof(sa));

//undefined//
var sum;
console.log((sum));
console.log(typeof(sum));

//string//
var str = "sai"
var str1 = new String("sai")
console.log(typeof(str));
console.log((str1));
console.log(typeof(str1));

//in string there are three codes
// "" --> single quotes used to create string
// '' -->  double quotes used to create string
// `` --> backtick are used for  introduced in es6


// `` -->backtick//
var nameofstudent = "sai";
var data1 = `my name is ${nameofstudent}`
var data = `number ${10+5}`
var data2 = 'my name is ${nameofstudent}' //single quotes not working//
console.log ("data1",data1);
console.log ("data",data);
console.log ("data2",data2);


//symbol//
var sym = Symbol(5);
var sym1 = Symbol(5);
console.log ("sym",sym);
console.log ("sym1",sym1);
console.log(typeof(sym));
console.log(typeof(sym1));
console.log ("print",sym === sym1);



