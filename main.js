function removeElement(array, item) {
    const i = array.indexOf(item);
    
    if(i >= 0) {
        array.splice(i, 1);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);

console.log(array);

