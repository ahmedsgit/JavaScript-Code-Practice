/****
 * trim function
 */

const name = '                  Ahmed Sazzad              ';
console.log(name.length, `Name: ${name.trim()}`);
console.log(name.trimStart().length, `Name: ${name.trimStart()}`); //trim in Starting position
console.log(name.trimEnd().length, `Name: ${name.trimEnd()}`); //trim in Ending position