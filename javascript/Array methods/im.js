

// Array Methods: //

1. //at//   //(Returns the array element at the specified index.)//
   
   let fruits = ['Apple', 'Banana', 'Orange'];
   console.log(fruits.at(1)); 

   var a =[22,33,44,55];
   console.log(a.at(1)); 

2.  //concat()//  //Merges two or more arrays and returns a new array.//
    let Apple = [25,65,97,36,55];
    let Bat = [25,68,26,87,56,77];
    let allnumbers = Apple.concat(Bat);
    console.log(allnumbers); 

    let fruits1 = ['Apple', 'Banana','Orange'];
    let fruits2 = ['Orange', 'Pineapple'];
    let allFruits = fruits1.concat(fruits2);
    console.log(allFruits);  

3. //copyWithin()// 
   //Shallow copies part of an array to another location in the same array and returns it, without modifying its length. 
    let number = [11, 22, 33, 44, 55];
    number.copyWithin(0, 3, 4);
    console.log(number); 

4.//entries()//  Returns a new array iterator object that contains the key/value pairs for each index in the array.

    let colors = ["red", "Blue", "green","yellow"];
    let iterator = colors .entries();
    for (let [index,colors ] of iterator) {
    console.log(index + ": " + colors);
    }

    let nub = [10, 20, 30, 40, 50];
    let it = nub.entries();
    console.log(it.next().value);
    console.log(it.next().value); 
    console.log(it.next().value); 
    console.log(it.next().value); 
    console.log(it.next().value);  



5.//every()//   Tests whether all elements in the array pass the test implemented by the provided function.
    let value = [1, 2, 3, 4];
    let Even = number.every(function(number) {
    });
    console.log(Even);

    let F = ["Apple", "Banana", "Mango"];
    let Strings = fruits.every(F => typeof F === "string");
    console.log(Strings); 


6.//fill// Fills all the elements of an array from a start index to an end index with a static value.   
    let val = [1, 2, 3, 4,5];
    val.fill(0, 3, 4);
    console.log(val); 



7 //filter()//  Creates a new array with all elements that pass the test implemented by the provided function.
    let nu = [5, 12, 8, 130, 44];
    let filteredNumbers = nu.filter(number => number > 10);
    console.log(filteredNumbers); 

    let students = [
        { name: "Alice", age: 20 },
        { name: "Bob", age: 22 },
        { name: "Charlie", age: 17 }
      ];
      let adults = students.filter(student => student.age >= 18); 
      console.log(adults);
      
8 //pop()    //Removes the last element from an array and returns that element.//
    let numbers = [5, 4, 3, 2, 1];
    numbers.pop()
    console.log(numbers);

    let k = ["raju", "kiran", "kishore", "ravi"];
    k.pop()
    console.log(k);

9.//push()//  Adds one or more elements to the end of an array and returns the new length of the array.
    let n = [5, 4, 3, 2, 1];
    numbers.push(10)
    console.log(numbers);

    let S = ['Apple', 'Banana'];
    S.push('Orange');
    console.log(fruits); 
10.//unshift()//   The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
    let R = [14,57,98,33,55];
    R.unshift(22);
    console.log(R);

    let Y= ["kiran", "kishore", "ravi"];
    Y.unshift("Praveen")
    console.log(Y);

11.//shift()//   Removes the first element from an array and returns that element.//
    let num = [52,66,88,55,66];
    num.shift()
    console.log(num);

    let M = ["sai","suresh","santosh", "srikanth"];
    M.shift()
    console.log(M);

12.//reverse()//  The reverse() method reverses the order of the elements in an array in place.
    let color = ["Red", "Green", "Blue"];
    color.reverse();
    console.log(color);

    let C = [54,65,33,75,88];
    C.reverse();
    console.log(C);

13.//find//  Returns the value of the first element that satisfies the provided testing function.
    let T = [1, 2, 3, 4, 5];
    let found = T.find(num => num > 3);
    console.log(found); 



14.//indexof//  Returns the first index at which a given element can be found in the array, or -1 if it is not present.
    let E = ["Kiwi", "Banana", "Mango"];
    let index = fruits.indexOf("Banana");
    console.log(index); 

    let user = [11,44,99,66,55];
    let into = user.indexOf(66);
    console.log(into); 
    

15.//join// Joins all elements of an array into a string and returns this string.
    let f = ["Grapes", "Banana", "Mango"];
    let fruitString = f.join(", ");
    console.log(fruitString);
    
    let V = [44,79,64,32,77];
    let Str = V.join("; ");
    console.log(Str);

16.//lastIndexOf()// Returns the last index at which a given element can be found.
    let g = [1, 2, 3, 2, 5, 2, 6];
    let lastIndex = g.lastIndexOf(3);
    console.log(lastIndex); 

    let unic = ["uday", "uni", "vishal", "arjun", "kumar", "pater", "colin"];
    let last = unic.lastIndexOf("kumar");
    console.log(last);

17.//constructor//
    class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    display() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    }
    let person1 = new Person("Alice", 30);
    person1.display(); 

18.//findIndex//  Returns the index of the first element that passes the test implemented by the provided function.
    const element = [4, 9, 16, 25, 29];
    const ind = element.findIndex(num => num > 10);
    console.log(ind); 

    const ELE = [22,36,55,76,89];
    const indus = ELE.findIndex(num => num > 45);
    console.log(indus);

19.//findlast//    The findLast method in JavaScript is used to return the value of the last element in an array that satisfies a provided testing function.
    const sum = [5, 8, 12, 19, 21, 33, 37];
    const lastGreaterThan20 = sum.findLast(number => number > 20);
    console.log(lastGreaterThan20);

20.//findLastIndex//    The lastIndexOf method in JavaScript is used to find the index of the last occurrence of a specified value within an array.
    const H = [4, 9, 15, 19, 22, 33, 37];
    const lastGreaterThan20Index = H.findLastIndex(number => number > 20);
    console.log(lastGreaterThan20Index); 
 
21.//flat//  Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    const arr1 = [4, 5, [6, 7]];
    const flatArr1 = arr1.flat();
    console.log(flatArr1); 

22.//flatMap//   Maps each element using a mapping function, then flattens the result into a new array.
    const arr = [4, 5, 6, 7];
    const flatMappedArr = arr.flatMap(x => [x, x * 2]);
    console.log(flatMappedArr); 

23.//includes//   Determines whether an array contains a specified element.
    const fru = ["apple", "banana", "mango", "orange"];
    console.log(fru.includes("banana")); 
    console.log(fru.includes("grapes"));
    console.log(fru.includes("Kiwi"));
   
    const z = ["apple", "banana", "mango", "orange", "banana"];
    console.log(z.includes("banana", 2)); 
    console.log(z.includes("banana", 4)); 
    console.log(z.includes("banana", 5)); 
 
24.//join//    Determines whether an array contains a specified element. 
    let w = [1, 2, 3, 4, 5];
    let result = w.join(" * ");
    console.log(result); 

    let D = ["Akil", "Banu", "Manoj"];
    let results = fruits.join();
    console.log(results); 

    let I = ["Apple", "Banana", "Mango"];
    let resultS = fruits.join(" + ");
    console.log(resultS); 

25.//keys//   Returns a new Array Iterator object that contains the keys for each index in the array.
    const person = {
    name: "Sai",
    age: 28,
    occupation: "Software"
    };
    const K = Object.keys(person);
    console.log(K); 

26.//values//    Returns a new Array Iterator object that contains the values for each index in the array.
    const p = {
    name: "Harsha",
    age: 18,
    occupation: "Student"
    };
    const J = Object.values(p);
    console.log(J);  

27.//reduce//    Executes a reducer function on each element of the array, resulting in a single output value.

   //reduce syntax// 
   //array.reduce(callbackFunction(accumulator, currentValue, index, array), initialValue)
    const initialValue = 0; 
    const nxt = [4,5,6,7];
    const Sum = nxt.reduce((accumulator, currentValue,) => accumulator + currentValue);
    console.log(Sum); 

    const N = [11,22,33,77];
    const u = N.reduce((accumulator, currentValue, currentindex) => accumulator + currentValue + currentindex, 0);
    console.log(u); 

28.//reduce right//   Executes a reducer function on each element of the array, from right to left, resulting in a single output value.

   //reduce right  syntax//  //
   //array.reduceRight(callback(accumulator, currentValue, index, array), initialValue)

    const r = [1, 2, 3, 4, 5];
    const total = r.reduceRight((accumulator, currentValue) => {
    return accumulator + currentValue;
    }, 0);
    console.log(total); 

    const words = ['sai','kumar','bhaskar','venkat','ch'];
    const sentence = words.reduceRight((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue;
    });
    console.log(sentence); 

    const et = [2, 3, 4, 5];
    const product = et.reduceRight((accumulator, currentValue) => {
    return accumulator * currentValue;
    }, 1);
    console.log(product); 

29.//slice//   Returns a shallow copy of a portion of an array into a new array.
    let veg = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    let citrus = veg.slice(1, 3);
    console.log(citrus); 
    console.log(veg); 

    let text = "Hello, world!";
    let greeting = text.slice(0, 5);
    console.log(greeting); 
    console.log(text);

    let non = [1, 2, 3, 4, 5];
    let lastTwo = non.slice(-2);
    console.log(lastTwo); 

30.//some//    Tests whether at least one element in the array passes the test implemented by the provided function.
    const array = [1, 2, 3, 4, 5];
    const hat = array.some(element => element > 3);
    console.log(hat);


    const word = ['apple', 'banana', 'cherry', 'date'];
    const Long = word.some(word => word.length > 6);
    console.log(Long); 

    const grades = [45, 67, 82, 38, 49];
    const Passing = grades.some(grade => grade >= 50);
    console.log(Passing); 

31.//splice//   Adds and/or removes elements from an array.

   //splice syntax//
   //array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

    const values = [1, 2, 3, 4, 5];
    values.splice(2, 2, 6, 7);
    console.log(values); 

    const vegs = ['apple', 'banana', 'cherry', 'date'];
    const removed = vegs.splice(1, 2);
    console.log(vegs); 
    console.log(removed); 

    const col = ['red', 'blue', 'green'];
    col.splice(2, 0, 'yellow', 'orange');
    console.log(col); 

32.//sort//     Sorts the elements of an array in place.
    let arr4 = [44,25,15,77,20];
    const sai = arr4.sort();
    console.log( arr4.sort()); 
    console.log("sai",sai); 

    const i = ['cherry','banana', 'apple','date'];
    i.sort();
    console.log(i); 



    let arr3 = [3,11,5,8,9,6,2,3,3,5,18,15,3,5,4];
    const comparefunction = function (n1,n2) {
        return n1-n2
    }
    const s = arr3.sort(comparefunction);
    console.log("s",s);

33.//toLocaleString//   Returns a localized string representing the array and its elements.  

   // toLocaleString  syntax//
   //number.toLocaleString(locales, options)//

   const L = 123456.789;
   const formattedNumber = L.toLocaleString();
   console.log(formattedNumber); 

   const Q = 98765.4321;
   const NumberEN = Q.toLocaleString('en-US');
   const NumberDE = Q.toLocaleString('de-DE');
   console.log(NumberEN); 
   console.log(NumberDE); 

34.//toReversed//  Reverses the order of the elements in an array.

    Array.prototype.toReversed = function() {
    return this.slice().reverse();
    };
    const originalArray = [1, 2, 3, 4, 5];
    const reversedArray = originalArray.toReversed();
    console.log(reversedArray); 

    Array.prototype.toReversed = function() {
    return this.slice().reverse();
    };
    const rev = [5, 4, 3, 2, 1];
    const reversed = rev.toReversed();
    console.log(reversed); 

    
    Array.prototype.toReversed = function() {
    return this.slice().reverse();
    };
    const wow = ['apple', 'banana', 'cherry', 'date'];
    const reversedWords = wow.toReversed();
    console.log(reversedWords); 

35.//toSorted//    Sorts the elements of an array in place.

    const yet = [3, 1, 5, 2, 4];
    const sortedNumbers = yet.toSorted((a, b) => a - b);
    console.log(sortedNumbers); 
    console.log(yet); 
    
    
    const fry = ['Banana', 'Orange', 'Apple', 'Mango'];
    const sortedFruits = fry.toSorted();
    console.log(sortedFruits); 
    console.log(fry);   
    
36.//toSpliced//     Adds and/or removes elements from an array.   

    const nest = ['Apple', 'Banana', 'Cherry', 'Date'];
    const newFruits = nest.toSpliced(1, 2);
    console.log(newFruits); 
    console.log(nest);    

    const nut = [5,4,3,2,1];
    const newNumbers = nut.toSpliced(3, 3, 10, 20);
    console.log(newNumbers); 
    console.log(nut);  

37.//toString//    Returns a string representing the array and its elements.

    const arr6= [19, 25, 36, 49, 55];
    const arrString = arr6.toString();
    console.log(arrString);

    const room = 143;
    const numberString = room.toString();
    console.log(numberString); 
    console.log(typeof numberString); 

    const date = new Date();
    const dateString = date.toString();
    console.log(dateString); 
    console.log(typeof dateString);

38.//with//    The with statement in JavaScript was used to create a shortcut for accessing properties of an object. 

const per = {
    firstName: 'kiran',
    lastName: 'Dupana',
    age: 30,
    city: 'Hyderbad',
    state: 'TG'
    
  };
  with (per) {
    console.log(firstName);  
    console.log(lastName);   
    console.log(age);        
    console.log(city);  
  }



    const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    features: {
    color: 'Blue',
    transmission: 'Automatic',
    airbags: true
    }
  };
  with (car.features) {
    console.log(color);       
    console.log(transmission); 
    console.log(airbags);       
  }
  with (car) {
    console.log(brand);       
    console.log(model); 
    console.log(year);       
  }

39.//for each//   Executes a provided function once for each array element.
    const ele = [11, 22, 33, 44, 55];
    let main = 0;
    ele.forEach(number => {
    main += number;
    });
    console.log(main); 

    const given = ['apple', 'banana', 'cherry'];
    given.forEach(fruit => {
    console.log(fruit);
    });

    const scores = [89, 95, 72, 100, 83];
    let totalScore = 0;
    scores.forEach(score => {
    totalScore += score;
    });
    console.log(totalScore);


    const part = ['apple', 'banana', 'cherry'];
    const uppercase = [];
    part.forEach(fruit => {
    uppercase.push(fruit.toUpperCase());
    });
    console.log(uppercase); 

40.//map//   Creates a new array with the results of calling a provided function on every element.
    const Numbers = [25,41,35,65,77];
    const doubled= Numbers.map(number => number * 2);
    console.log(doubled); 


    const distances = [10, 20, 30, 40, 50];
    const kmToMiles = 0.621371;
    const distance = distances.map(distance => distance * kmToMiles);
    console.log(distance); 


    const users = [
    { id: 1, name: 'sai' },
    { id: 2, name: 'Bobby' },
    { id: 3, name: 'Charlie' }
    ];
    const userNames = users.map(user => user.name);
    console.log(userNames); 
    console.log(users); 
      


      
    
      





  



    


    

  
  

   











    
   


    
    




    






  




    
    



    


    


 
  




    

    
   
   






      
     

 







