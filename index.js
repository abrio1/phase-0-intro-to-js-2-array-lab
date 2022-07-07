// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name)}
    function destructivelyPrependCat(name){
        cats.unshift(name)
    }
    function destructivelyRemoveLastCat(){
        cats.pop()
    }
    function destructivelyRemoveFirstCat(){
        cats.shift()
    }
    function appendCat(name){
        const allCats = [...cats]
         allCats.push(name);
         return allCats;
    }
    function prependCat(name){
        const allCats = [...cats]
        allCats.unshift(name);
        return allCats;
    }
    function removeLastCat(){
        const allCats = [...cats]
        allCats.pop()
        return allCats;
    }
    function removeFirstCat(){
        const allCats = [...cats]
        allCats.shift()
        return allCats;
    }