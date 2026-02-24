

// Pollyfill for array.includes()

Array.prototype.myIncludes = function (value) {

    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) return true
    }
    return false;
}

console.log("includes = "+([1,2,3,4,5].myIncludes(3)));
