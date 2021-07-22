// task 1
const myParseInt = ( str )=> {
    const result = + str;
    if(isNaN(str)) return NaN;
    return result;
}

console.log(myParseInt("34"));
console.log(myParseInt("34q"));
console.log(myParseInt("34") + 1);

const myParsIntWithReqExp = ( str ) => {
    const req = /^\d+/;
    try {
        const result = str.match(req)[0];
        return result;
    } catch (error) {
       return NaN;
    }
}

console.log(myParsIntWithReqExp("b3411"));
console.log(myParsIntWithReqExp("34"));
console.log(myParsIntWithReqExp("34asd"));

// task 2

const mockArray = Array.from({length: 4}, () => Array.from({length: 3}, () => Math.floor(Math.random()* 100)));

const printArray = (arr) => {
    if (!(arr instanceof  Array)) return "Not Array";
    const result = arr.reduce((acc, currenValue) => {
        return `${acc} ${currenValue.join(' ')}`;
    }, '');
    return result;
 }

 console.log(printArray(mockArray));









