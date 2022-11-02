/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {}

console.log(orderedIntersection(numsA1,numsB1))
console.log(orderedIntersection(numsA2,numsB2))
console.log(orderedIntersection(numsA3,numsB3))



// Solution 

// let newArray = []
//     for (i = 0; i < sortedA.length; i++) {
//         for (j = 0; j < sortedB.length; j++) {
//             if ( sortedA[i] === sortedB[j] && newArray.indexOf(sortedB[j]) === -1) {
//                 newArray.push(sortedB[j])
//             }
//         }
//     }
//     return newArray


// Solution 2 ( Incomplete but is much bettwe time complexity)

// let newArray = []
//     let combinedArray = sortedA.concat(sortedB)
//     for (i = 0; i < combinedArray.length; i++) {
//         if ( newArray.indexOf(combinedArray[i] === -1) && combinedArray.indexOf(combinedArray[i]) > 1 ) {
//             newArray.push(combinedArray[i]);
//         }
//     }
//     return newArray