'use strict';

/** 
* identity: Designed to return a <value>, any data type, without changing it.
* 
* @param {Any data type} value: The argument <value> which to return.
*/

function identity(value) {
    return value;
};

/** 
* typeOf: Designed to return the data type of a <value> as a string. Data types include: string, array, object, undefined,
*         number, boolean, null, and function.
* 
* @param {Any data type} value: The argument <value> for which to evaluate its type.
*/


function typeOf(value){
  if (value === null) {
      return 'null';
        } else if (Array.isArray(value) === true) {
            return 'array';
        } else if (typeof value === 'object') {
            return 'object';
        } else if (typeof value === 'number') {
            return 'number';
        } else if (typeof value === 'boolean') {
            return 'boolean';
        } else if (typeof value === 'string') {
            return 'string';
        } else if (typeof value === 'undefined') {
            return 'undefined';
        } else if (typeof value === 'function') {
            return 'function';
        }
};

/** 
* first: Designed to return the indexed value of <array>, an Array, that corresponds to a <number> argument, which is a Number 
*        value. If <array> is not an array, the function will return empty brackets. If <number> is negative, empty brackets  
*        will also be returned. If <number> is greater than <array> length, the whole array will be returned.
* 
* @param {Array} array: The <array> for which to evaluate its indexed value corresponding to the number given.
* @param {Number} number: The <number> value which is passed into the function that returns the corresponding index (or edge
*                         cases defined above).
*/

function first(array, number) {
    if (Array.isArray(array) === false) {
        return [];
    } else if (isNaN(number) === true || number === undefined) {
        return array[0];
    } else if (number < 0) {
        return [];
    } else {
        return array.slice(0, number);
    }
};


/** 
* last: Designed to return the number of items in <array>, an Array, corresponding to the input <number> argument, a Number.
*       The function counts items from the end of the array (i.e., return last <number> of array elements). If the argument 
*       given is not an array, empty brackets will be returned. If the argument given is not a number, the last element in 
*       the array will be returned. If the number is negative, empty brackets will be returned. If the number is greater than 
*       the array length, the entire array will be returned.
* 
* @param {Array} array: The array for which the last number of items will be returned that corresponds to the <number> 
*                       argument.
* @param {Number} number: The value which will determine the number of items to return from <array>.
*/

function last(array, number) {
    if (Array.isArray(array) === false) {
        return [];
    } else if (isNaN(number) === true || number === undefined) {
        return array[array.length - 1];
     } else if (number < 0) { 
        return [];
     } else if (number > array.length) {
         return array;
    } else { 
         return array.slice(array.length - number, array.length)
     }
};

/** 
* indexOf: Designed to return the index of the <value>, which can be of any data type, where it first occurs in 
*          <array>, an Array. The function will return -1 if the <value> does not exist in <array>.
* 
* @param {Array} array: The array which will be evaluated for the first occurrence of the input argument <value>.
* @param {Value} value: The value, any data type, whose first occurrence will be searched for in <array>.
*/

function indexOf(array, value) {
    return array.indexOf(value);
};

/** 
* contains: Designed to return 'true' if <array>, an Array, contains <value>, which can be of any data type. 
*           Otherwise, 'false' will be returned. If no value is given, 'false' will also be returned.
* 
* @param {Array} array: The array which will be evaluated for the presence (true) or absence (false) of <value>.
* @param {Value} value: The value for which to search <array>.
*/

function contains(array, value) {
    let find = false;
    for (var i = 0; i < array.length; i++) {
        find = array[i] === value ? true : find;
    }
    return find;
};

/** 
* each: Designed to iterate through <collection>, which is an Array or Object, and call <action>, which is a function, in  
*       order to apply a function to each value within <collection>. If <collection> is an array, the function will be applied 
*       to each element; if <collection> is an object, the function will be applied to each property.
* 
* @param {Array or Object} collection: The parameter <collection> accepts arrays or objects, for whose values the <action> 
*                                      function is applied.
* @param {Function} action: The parameter <action> is the function which will be applied to each value in <collection>.
*/

function each(collection, action) {
    if (Array.isArray(collection) === true) {
        for (var i = 0; i <= collection.length - 1; i++) {
            action(collection[i], [i], collection);
        } 
    } else if (typeof collection === 'object') {
        for (var key in collection) {
            action(collection[key], key, collection);
            }
        }
    };

/** 
* unique: Designed to return a new array of all elements from <array> without including any duplicates.
* 
* @param {Array} array: The array which will be evaluated to remove all duplicated elements, and whose unique values will be
*                       derived and pushed into a new array.
*/

function unique(array) {
    var duplicatesRemoved = [];
        for (var i = 0; i < array.length; i++) {
             var duplicate = false;
                for (var j = 0; j < duplicatesRemoved.length; j++) {
                    if (array[i] === duplicatesRemoved[j]) {
                        duplicate = true;
            }
        }
            if (!duplicate) {
                duplicatesRemoved.push(array[i]);
            }
        }
  return duplicatesRemoved;
};


/** 
* filter: Designed to return a new array of values comprised of elements in <array> which the function <action>
*         returns the boolean value 'true' for elements passing the test. If the <action> returns anything else, the value 
*         will be filtered out and will not be pushed into the array.
* 
* @param {Array} array: The array to whose elements <action> will be applied.
* @param {Function} action: The function <action> which will be applied to each element of <array>, which returns a value 
*                           for each element. 
*/


function filter(array, action) {
    var truArray = [];
        for(var i = 0; i < array.length; i++){
            if(action(array[i], i, array) === true) {
                truArray.push(array[i]);
            }
        } return truArray;
};
 

/** 
* reject: Designed to return a new array comprised of the elements for which <action> function returns false after being
*         applied to all the elements in the input <array>. Elements for which <action> returns a value other than false 
*         will not be included.
* 
* @param {Array}: The array for each of whose elements will be evaluated by <action>.
* @param {Function}: The <action> function that is applied to each element in the array, which will evaluate them for 
*                    false equivalence.
*/

function reject(array, action) {
    var falseArray = [];
        for(var i = 0; i < array.length; i++){
            if(action(array[i],i,array) === false) {
                falseArray.push(array[i]);
            }
        } return falseArray;
 };
 

/** 
* partition: Designed to return a new array with two elements: a sub-array containing values which return a truthy 
*            value after the <action> function has been applied, and a second sub-array containing values which are 
*            falsy.
* 
* @param {Array} array: The array containing the values to be evaluated by <action>, from which the output array with its
*                       sub-arrays of truthy and falsy values will be derived.
* @param {Function} array: The <action> function applied to each element in the array that evaluates to true and false 
*                          values.
*/

function partition(array, action) {
    var falseArray = [];
    var truArray = [];
    var subArrays =[truArray, falseArray];
    for(var i = 0; i < array.length; i++){
            if(action(array[i],i,array) === true) {
                truArray.push(array[i]);
            } else if (action(array[i],i,array) === false) {
                falseArray.push(array[i]);
            }
    } return subArrays;
}; 
    
/** 
* map: Designed to evaluate a <collection>, an Array or Object, and apply the <action> function to each value in 
*      <collection>. The function will return a new array comprised of the returned values for each <action> 
*      function call.
* 
* @param {Array or Object} collection: The array or object whose values will be evaluated by the <action> function.
* @param {Function} action: The <action> function that will be called for each value in <collection>, and whose return 
*                           value will populate the new array that is returned.
*/

function map(collection, action) {
    var finalArray = [];
    if (Array.isArray(collection) === true) {
      for(var i = 0; i < collection.length; i++) {
        var isArray = action(collection[i], i, collection);
        finalArray.push(isArray);
      } 
    } else {
        for(var key in collection) {
            var isObj = action(collection[key], key, collection);
            finalArray.push(isObj);
            }
    } return finalArray;
};

/** 
* pluck: Designed to return an array containing the value of <property> for each element in an <array> of objects, and
*        to return those values in a new array.
* 
* @param {Array of Objects} array: The <array> comprised of the objects whose properties will each by evaluated by a 
*                                  function.
* @param {Any data type} property: The value for which an object's <property> will be evaluated, which will be returned 
*                                  in a new array.
*/

function pluck(array, property) {
    return map(array, function(object, index, array){
        return object[property];
    });
};

/** 
* every: Designed to call <action> function for every element of a <collection>, which is an Array or an Object. The 
*        function will return the boolean value 'true' when every case is true; otherwise 'false' will be returned. 
*        The function can be used without the <action> argument, in which case if all values are truthy, 'true' is
*        returned. Otherwise, if any values are falsy, then 'false' will be returned.
* 
* @param {Array or Object} collection: The <collection> whose values will be evaluated.
* @param {Function} action: The optional input function parameter which accepts arguments that evaluate each element of 
*                           <collection>.
*/

function every(collection, action) {
    var boolean = true; 
    each(collection, function(element, index, collection) {
        if(typeof action === 'function' || action !== undefined) {
            if(action(element, index, collection) === false) {
                boolean = false; 
            }
        } else {
            if(element === false){
                boolean = false;
            }
        }
    });
    return boolean;
};


/** 
* some: Designed to evaluate each value of <collection>, which is an Array or Object, and return 'true' if at least one 
*       value returns 'true' by the optional <action> function. If the function call <action> returns false for all values 
*       in <collection>, 'false' will be returned. If no <action> is provided, and at least one value in <collection> is 
*       truthy, the function will return 'true'; otherwise, the function will return 'false'.
* 
* @param {Array or Object} collection: The array or object whose values will be evaluated by <action> and for which the 
*                                      function will return 'true' or 'false'.
* @param {Function} action: The optional <action> function which will evaluate each value in <collection> for strict 
*                           equivalence.
*/

function some(collection, action) {
    var boolean = false;
    each(collection, function(element, index, collection){
        if(typeof action === 'function' || action !== undefined) {
            if(action(element, index, collection) === true){
                boolean = true;
            }
        } else {
            if(element === true){
                boolean = true;
            }
        }
    });
    return boolean;
};

/**
* reduce: Designed to implement a reducer <action> function on each element of <array>, an Array, using an optional input  
*         value <seed>, a Number, for the first iteration at index 0. Each iteration produces a new value, which is then 
*         utilized in the same way for the next <action> iteration of the function. If no <seed> value is input, the first 
*         iteration utilizes the value at index 0 as the reducer value. Subsequent iterations progress in order down the 
*         index values of the array. After the last iteration, the value of the final <action> function call is returned.
* 
* @param {Array} array: The array holding the values which will be reduced by the application of the <action> function upon
*                       each element.
* @param {Function} function: The <action> function called for each element in <array>, utilizing <seed> values in its reducer
*                              function.
* @param {Number} seed: The number argument which will be passed into the <action> function on the first iteration, and which
*                       will utilize the return value of the previous iteration for subsequent iterations. If not input, will
*                       intially be assigned the value of index 0 of <array>.
*/

function reduce(array, action, seed) {
    if (seed === undefined) {
        seed = array[0];
        each(array, function(element, index, arr) { 
            if( index !== 0) {
                seed = action(seed, element, index, arr);
            }
        });
     return seed;
    } else {
        let previousResult = seed;
        each(array, function(element, index, arr) { 
            previousResult = action(previousResult, element, index,arr);
        });
        return previousResult;
    }
};

/** 
* extend: Designed to add properties to an input <object>, an Object, that are copied from an/other Object <args> argument(s).
*         This function will add all properties of subsequent objects in the order that they are added as arguments, and 
*         can be innumerable. The function returns an updated <object> with all the added properties.
* 
* @param {Object} object: The initial object to which properties from subsequent objects are added.
* @param {Object} ...args: The extender function which accepts additional objects and adds their properties to the initial
*                          object in the order they appear.
*/

function extend(object, ...args) {
    Object.assign(object, ...args);
    return object;
};


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

module.exports.identity = identity;
module.exports.typeOf = typeOf;
module.exports.first = first;
module.exports.last = last;
module.exports.indexOf = indexOf;
module.exports.contains = contains;
module.exports.each = each;
module.exports.unique = unique;
module.exports.filter = filter;
module.exports.reject = reject;
module.exports.partition = partition;
module.exports.map = map;
module.exports.pluck = pluck;
module.exports.every = every;
module.exports.some = some;
module.exports.reduce = reduce;
module.exports.extend = extend;
