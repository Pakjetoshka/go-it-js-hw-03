function makeArray(firstArray, secondArray, maxLength)
{
    let multyArray = [];
    if(maxLength === 0)
    {
        return multyArray;
    }
    else
    {
        for (const firstArrayElement of firstArray) {
            multyArray.push(firstArrayElement);
        }
        for (const secondArrayElement of secondArray) {
            multyArray.push(secondArrayElement);
        }
        const finalArray = multyArray.slice(0, maxLength);
        return finalArray;
    }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
