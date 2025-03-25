/* Write a loop that makes seven calls to console.log to output the following triangle: 

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it. 

let abc = "abc"; 
console.log(abc.length); 
// -> 3

*/ 

/* for loop that iterates by 1 7 times and shows the string "#". 
variables - one to bind to the string value of hash NO empty
use .length method to have JS count to 7 and then stop the loop 
*/ 

let triangle = "";

for (let i = 1; i <= 7; i++) { 
    triangle += "#";
    console.log(triangle);
}
