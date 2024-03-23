
//Chapter 21- 25
//Q1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome.");

//Q3
var word = "Pakistani";
var index = word.indexOf('n');
document.write("The index of 'n' in the word 'Pakistani' is: " + index);

//Q4
var word = "Hello World";
var lastIndex = word.lastIndexOf('l');
document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);

//Q5
var word = "Pakistani";
var character = word.charAt(3);
document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);

//Q6
var word = "Pakistani";
var index = word.concat().indexOf('n');
document.write("The index of 'n' in the word 'Pakistani' is: " + index);



//chapter no 21

// Q1
var allLower = userinput.toLowercase();
// Q2
var x = "hello world";
x = x.toLowerCase();
console.log(x);
// Q3
var y = "hello world";
y = y.toUpperCase();
console.log(y); 
// Q4
var first = "Haider khan";
var second = first.toLowerCase();
console.log(second);
// Q5
var firstArr = ["Karachi", "Abbotabad"];
var second = firstArr[1].toLowerCase();
console.log(second);
// Q6
var y = "hello world";
y = y.toUpperCase();
alert(y);
// Q7
var cityName = "kaRacHi";
var firstChar = cityName.charAt(0).toUpperCase();
var remanChar = cityName.slice(1).toLowerCase();
console.log(firstChar + remanChar);

// chapter 22-25
// Q1
var sameWords = "captain"
var changeWords = sameWords.slice(1,3);
console.log(changeWords);
// Q3
var animal = "elephant";
var middleIndex = Math.floor(animal.length / 2); 
var seg = animal.slice(middleIndex - 2, middleIndex + 2); // Slice out the middle four characters
console.log(seg); 

// Q6
var text = "to be or not be";
var indx = text.indexOf("be");
console.log(indx);
// Q7
var text = "to be or not be";
var indx = text.lastIndexOf("be");
console.log(indx);

// Q8
var txt ="where you want to go and then go to the university"
var index = txt.lastIndexOf("go");
console.log(index);

// Q10
var text = "abcde";
var index2 = text.charAt(2);
console.log(index2);

// Q11
var text = "hi my name is hamza naeem";
var cha = text.charAt(9);
console.log(cha);

// Q11
var text = "hi my name is hamza naeem";
var cha = text.charAt(text.length - 1);
console.log(cha);

// Q12
var text = "hi my name is hamza naeem";
var cha = text.charAt(4);
console.log(cha);