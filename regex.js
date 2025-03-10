const testStr = 'mi chiamo pippo, ho 7 fratelli, mi piace il numero 5 e vado spesso al parco che dista 8 km da casa mia'

const rgx = /\d+/;

console.log(rgx.test(testStr));


console.log(testStr.match(rgx));

// console.log(rgx.exec(testStr));

/* This code snippet is using a while loop to iterate over the matches found in the `testStr` string
using the regular expression `rgx`. Here's a breakdown of what it does: */
 let array = [];
let result = [];

while(array !== null){
    array  = rgx.exec(testStr);
    if(array !== null){
    const match = {
        value: array[0];
        index: array['index'];

    }
    result.push(match)
}
}

console.log(result)

