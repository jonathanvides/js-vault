/*
STEPS:
-Create a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:
-Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator(+ - * /). -Each must equal one of the three codes in the combination.
-Add comments throughout the code to explain each step in the process.
-Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.
-Please submit either a file with your code or a screenshot of the code, with the pseudocode showing, or a GitHub link.
-The combination of the lock is !!!10 - 40 - 39!!!

PSEUDOCODE:
~ First create a string variable to display a message to the user
~ Next create three different variables that are equations using different arithmetic operators and the previous result of each prior equation to come up with one of the vault code numbers
~ Then create an alert box displaying the vault code along with the message to the user
~ Also do not forget to comment code and push to github when done
*/

// String in a variable to display a message to the user
const message = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination: ';

// Equations in variables using arithmetic operators and the result of previous equations to equal vault code
const firstNum = 5 + 5;
const secondNum = firstNum * 4;
const thirdNum = secondNum - 1;

//Displaying an alert box of the message to the user along with the vault code
alert(message + firstNum + ' - ' + secondNum + ' - ' + thirdNum);


