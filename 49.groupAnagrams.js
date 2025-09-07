/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj = {};

    // const freqArr = {};
    // for(let i = 0; i < 26; i++) {
    //     freqArr[String.fromCharCode(97 + i)] = i;
    // }

    strs.forEach(str => {
        // let newStr = new Array(26).fill(0);
        // for(let sym of str){
        //     newStr[freqArr[sym]]++;
        // }
        // newStr = newStr.join("#")

        let newStr = str.split("").sort().join("");
        obj[newStr] ? obj[newStr].push(str) : obj[newStr] = [str]
    })
    return Object.values(obj)
};