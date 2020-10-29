/**
 * Remove the duplicates from the array
 * using as few expressions as possible.
 *
 * The Set object helps to store unique values of any type.
 *
 */

let arr = [1, 2, 2, 3, 4, 4, 5];

arr = [...new Set(arr)]; // spread operator is used to convert the Set object to Array

console.log(arr);
