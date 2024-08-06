 alert("stay organized!")

 // 1. Utilize descriptive variable names  
 let totalSum = 0; // Integer variable
 let greetingMessage = "Welcome to the JavaScript demo!"; // String variable

 // 2. Implement Mathematical Operations
 let firstNumber = 15;
 let secondNumber = 7;
 totalSum = firstNumber + secondNumber; // Performing a mathematical operation

 // 3. Create decision making with decision structures
 if (totalSum > 20) {
     console.log("The total sum is greater than 20.");
 } else {
     console.log("The total sum is 20 or less.");
 }

 // 4. Utilize Logical Operators for Complex Condition Evaluation
 let isUserLoggedIn = true;
 let hasUserPrivileges = false;

 if (isUserLoggedIn && hasUserPrivileges) {
     console.log("User has access to the admin dashboard.");
 } else {
     console.log("User does not have access to the admin dashboard.");
 }

 // 5. Showcase JavaScript Output Techniques
 // Output to the console
 console.log(greetingMessage);
 console.log("The total sum is: " + totalSum);

 
let myfooter = document.getElementById("myfooter")

myfooter.innerHTML = "I put this text on my page using java script"