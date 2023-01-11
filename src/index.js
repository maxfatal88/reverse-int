module.exports = function reverse (n) {
  
let=stringNum=String(n);

if (stringNum[0]==='-') {
    stringNum=stringNum.slice(1);
}

if (stringNum[stringNum.length-1]==='0') {
    stringNum=stringNum.slice(0,-1);
}

return +stringNum.split("").reverse().join("");

}