1. What is the difference between var, let, and const?<br>
Ans: i. var is function scoped. It means, after declaring it in a function it can be used anywhere inside that function. On the otherhand let and const are block scoped. It means, it can be used in that specific block where it was declared.
ii. var can be redeclared and updated, let can be updated but we can not redeclare it in the same scope and we can not redeclare and reassign the const.
iii. var can be accessed before initialization but let and const can not be accessed before initialization.

2. What is the difference between map(), forEach(), and filter()?<br>
Ans: map() loops through each element in an array, performes some execution and returns a new array.
forEach() loops through each element in an array, performes some execution in that array but doesn' return anything.
filter() loops through each element in an array and returns a new array that contains the element those are matched with the conditions.

3. What are arrow functions in ES6?<br>
Ans: Arrow function is a shorter form of function in ES6. The arrow function look like this:
const arrowFunction = () => {}; If the body has only one expression then return will work implicitly and if the body has multiple expression or statement then we have to use the retuen keyword for returning anything. 

4. How does destructuring assignment work in ES6?<br>
Ans: By using destructuring assignment we can extract the values from an array or object and then we can assign them into variables in a very simple way.
Example: const numbers = [10, 20, 30]
const [a,b,c] = [10, 20, 30]. 

5. Explain template literals in ES6. How are they different from string concatenation?<br>
Ans: Template literal is a new way to write multi-line string in JS. They are created by using backticks (`). It also allows embedding variables and expressions inside a string using ${}.
In string concatenation if the string becomes larger and have multiple lines then we have to use '+' and '\n' otherwise it will show error. Also using '+' and '\n' so many times in a string makes it harder to read.
But in template literals we don't need to use these so the string or statement remains clean and it is easier to read and understand. 

      
