 var num = 1;
 var boolean = true;
 var nul = null;
 var undef = undefined;


 var str_num = new String(num).valueOf();
 var str_bool = new String(boolean).valueOf();
 var str_nul = new String(nul).valueOf();
 var str_undef = new String(undef).valueOf();


console.log("num",str_num,'type of',typeof(str_num));
console.log("bool",str_bool,'type of',typeof(str_bool));
console.log("nul",str_nul,'type of',typeof(str_nul));
console.log("undef",str_undef,'type of',typeof(str_undef));

//Boolean Conversion//
var bool_num = new Boolean(num).valueOf();
var bool_nul = new Boolean(nul).valueOf();
var bool_undef = new Boolean(undef).valueOf();

console.log("num",bool_num,'type of',typeof(bool_num));
console.log("nul",bool_nul,'type of',typeof(bool_nul));
console.log("undef",bool_undef,'type of',typeof(bool_undef));

//Number Conversion//
var num_nul = new Number(nul).valueOf();
var num_undef = new Number(undef).valueOf();
var num_bool = new Number(boolean).valueOf();

console.log("bool",num_bool,'type of',typeof(num_bool));
console.log("nul",num_nul,'type of',typeof(num_nul));
console.log("undef",num_undef,'type of',typeof(num_undef));










