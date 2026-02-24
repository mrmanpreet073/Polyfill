//----->  Pollyfill for array.foreach()

Array.prototype.myfroeach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}
let arr = [1, 2, 3, 4, 5];

arr.myfroeach((e) => console.log(e));

// if (!Array.prototype.forEach) {
//   Array.prototype.forEach = function(callback, thisArg) {
//     // 1. Basic safety checks
//     if (this == null) {
//       throw new TypeError('Array.prototype.forEach called on null or undefined');
//     }
//     if (typeof callback !== 'function') {
//       throw new TypeError(callback + ' is not a function');
//     }

//     // 2. 'this' refers to the array the method is called on
//     const array = this;

//     // 3. Iterate through the array
//     for (let i = 0; i < array.length; i++) {
//       // 4. Check if the index exists (to skip empty slots in sparse arrays)
//       if (i in array) {
//         // 5. Execute callback with (value, index, array)
//         // Use .call() to support the optional 'thisArg' parameter
//         callback.call(thisArg, array[i], i, array);
//       }
//     }
//   };
// }



//-----> Pollyfill for array.includes()

Array.prototype.myIncludes = function (value) {

    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) return true
    }
    return false;
}

console.log("includes = " + ([1, 2, 3, 4, 5].myIncludes(3)));
