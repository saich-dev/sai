console.log("first line Executed")
console.log("second line Executed")
console.log("third line Executed")


//magiee making process
//chop onians
//chop carrot
//boil water 5 mins
//add onians  2mins boil
//add carrot 2 mins boil
//add masala 4 mins boil
//add magiee 4 mins boil

console.log ("start making magiee");
boilwater(5000);
console.log ("add onians");
boilwater(2000);
console.log ("add carrot");
boilwater(2000);
console.log ("add masala");
boilwater(2000);
console.log ("add Magiee");
boilwater(4000);
boilwater(4000);


function boilwater(time){
    console.log ("boling water....")
    for (let count = 0;count<time;count++){
        console.log ("still boiling.....");
    }
    console.log ("boiling Done.....")
}