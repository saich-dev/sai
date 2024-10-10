//  javascript Scope //
//(In JavaScript, "scope" refers to the accessibility of variables, functions, and objects in different parts of your code during runtime.)
//Types of Scope//
// 1.Global Scope //
// 2.Local Scope  are 2 types
   //Function Scope //
   //Block Scope //
// 3.Lexical Scope //


// Global Scope //
// Variables declared outside of any function or block have global scope. These variables are accessible from anywhere in your code.//
// Examples //
    var b = 10;
    var func1 = function(){
    var func2 = function(){
    console.log ("b is accessable",b);
    }
    func2();
    return;
    }
    console.log(func1())
 

    var G = 20;
    var Fun = function(){
    var G = function(){
    console.log ("Game changer",G);
    } 
    G();
    return;
    }
    console.log(Fun());  


    var global = "I am a global variable";
    function test() {
      console.log(global); 
    }
    test();
    console.log(global); 


    var Message = "Hello, World!";
    function display() {
    console.log(Message);
    }
    display(); 
    console.log(Message); 
    
    
    
// // 2.Local Scope  are 2 types ()

   //Function Scope //(Variables declared within a function are local to that function.)
    var b = 10;
    var fun1 = function(){
    var c = 40;
    console.log("fun1 outer funnction", b,c);
    var fun2 = function(){
    console.log("fun1 inner funnction", b,c);
    console.log ("b is accessable",b);
    }
    fun2();
    return;
    }
    console.log(fun1());
    console.log("b",b);



    // function test() {
    // var Var = "I am a function-scoped variable";
    // console.log(Var); 
    // }
    // test();
    // console.log(Var); 

   
   //Block Scope // outside the block condition cannot be executed.
   //(With the introduction of let and const in ES6, variables can also be scoped to blocks (enclosed by {}), such as within if, for, and while statements.)
    if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); 
    }


    

// 3.Lexical Scope //
//(Lexical scope, also known as static scope, means that the scope of a variable is determined by its location within the source code, and nested functions have access to variables declared in their outer scope.)
    function outer() {
    var outer = "I am an outer variable";
    function inner() {
      console.log(outer); 
    }
    inner();
    }
    outer();

//4.module scope //
//(Module scope in JavaScript refers to the scope created by the import and export statements when using ES6 modules.)
     


  
      



  

