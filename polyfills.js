// -----> POLLYFILL ' S

//----->  Pollyfill for array.foreach()

Array.prototype.myfroeach = function (callback) {

    if (this == null) {
        throw new TypeError('Array.prototype.forEach called on null or undefined');
    }
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}
let arr = [1, 2, 3, 4, 5];

arr.myfroeach((e) => console.log("Filter Result ->",e));


//-----> Pollyfill for array.map()

Array.prototype.myMap = function (callback) { //--> map callback return value

    if (this == null) {
        throw new TypeError("Cannot read properties of null or undefined");
    }

    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (i in this) {

            result.push(callback(this[i], i, this))
        }
    }
    return result;
}

let result = arr.myMap((e) => e * 2)
console.log('Map Result ->', result);

// if (!Array.prototype.myMap) {
//   Object.defineProperty(Array.prototype, "myMap", {
//     value: function (callback, thisArg) {

//       if (this == null) {
//         throw new TypeError("Array.prototype.myMap called on null or undefined");
//       }

//       if (typeof callback !== "function") {
//         throw new TypeError(callback + " is not a function");
//       }

//       const arr = Object(this);
//       const len = arr.length >>> 0;
//       const result = new Array(len);

//       for (let i = 0; i < len; i++) {
//         if (i in arr) {
//           result[i] = callback.call(thisArg, arr[i], i, arr);
//         }
//       }

//       return result;
//     },
//     writable: true,
//     configurable: true,
//     enumerable: false
//   });
// }



//-----> Pollyfill for array.filter() 

Array.prototype.myFilter = function (callback) { //--> filter callback return boolean

    if (this == null) {
        throw new TypeError("Cannot read properties of null or undefined");
    }

    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }
    let result = []

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (callback(this[i], i, this)) {
                result.push(this[i])
            }
        }
    }
    return result;
}

let filterResult = arr.myFilter((e) => e >= 3)
console.log('Filter Result -> ', filterResult);

// Array.prototype.myFilter = function (callback, thisArg) {

//     if (this == null) {
//         throw new TypeError("Cannot read properties of null or undefined");
//     }

//     if (typeof callback !== "function") {
//         throw new TypeError(callback + " is not a function");
//     }

//     const arr = this;
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i in arr) {
//             if (callback.call(thisArg, arr[i], i, arr)) {
//                 result.push(arr[i]);
//             }
//         }
//     }

//     return result;
// };



//-----> Pollyfill for array.reduce() 

Array.prototype.myReduce = function (callback, initialValue) {

    if (this == null) {
        throw new TypeError("Cannot read properties of null or undefined");
    }

    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    let accumulator;
    let startIndex = 0

    if (arguments.length > 1) {
        accumulator = initialValue;
    }
    else {
        accumulator = this[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator
}

let myreduceResult = console.log('Reduce Resuly ->',arr.reduce((acc,item)=> acc+item));

//-----> Pollyfill for array.includes()

Array.prototype.myIncludes = function (value) {

    for (let i = 0; i < this.length; i++) {
        if (this[i] === value) return true
    }
    return false;
}

console.log("includes  Result -> " + ([1, 2, 3, 4, 5].myIncludes(3)));

// Array.prototype.myReduce = function (callback, initialValue) {

//     if (this == null) {
//         throw new TypeError("Cannot read properties of null or undefined");
//     }

//     if (typeof callback !== "function") {
//         throw new TypeError(callback + " is not a function");
//     }

//     const arr = this;
//     const len = arr.length;

//     let accumulator;
//     let startIndex = 0;

//     // If initial value provided
//     if (arguments.length > 1) {
//         accumulator = initialValue;
//     } 
//     else {
//         // Find first defined element
//         while (startIndex < len && !(startIndex in arr)) {
//             startIndex++;
//         }

//         if (startIndex >= len) {
//             throw new TypeError("Reduce of empty array with no initial value");
//         }

//         accumulator = arr[startIndex];
//         startIndex++;
//     }

//     for (let i = startIndex; i < len; i++) {
//         if (i in arr) {   // skip holes
//             accumulator = callback(accumulator, arr[i], i, arr);
//         }
//     }

//     return accumulator;
// };
