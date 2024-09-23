// Control Structures
// 1. Conditional Statements
// 2. Loops
// 3. Switch Statements
// conditional Statements:

let age = 15;
// - if statement

const ifCheck = (age)=>{
    if (age => 18) {
        return 'You are an adult'
    }
}


// If...else


const ageCheck = (age)=> {
    if (age >= 18){
    return 'You are an adult'
}
else 
return 'Underage'
}

console.log(ageCheck(age));
console.log(ifCheck(18));

// ternary operator - short hand for the if...else

const message = (age <18) ? 'You are a minor' : 'you are an adult'

console.log(message);

// if...else if statement

let score = 50;

const grade = (score)=>{
    if (score >= 70){
        return 'A'
    }
    else if(score >= 60 && score <= 69){
        return 'B'
    }
    else if(score >= 50 && score <= 59){
        return 'C'
    }
    else if (score >= 40 && score <= 49){
        return 'D'
    }
    else return 'E'
}

console.log(`Your grade is: ${grade(score)}`);

// switch statement - can be used in place of if else if

let weather = 'warm'

const weatherCheck = (weather)=>{
switch (weather) {
    case 'warm':
        return 'It is a good day for a picnic'
        break
    case 'Sunny':
        return 'It is a good day for a walk'
        break
    case 'Rainny':
        return 'It is a good day to stay indoors'
        break
    case 'cloudy':
        return 'It is a good day to stay indoors'

    default:
        return 'It is a good day to stay indoors'
}
}

console.log(weatherCheck(weather));



// Loops
// for loop - used to iterate over an array or a string
// while loop - used to iterate over a condition
// do while loop - used to iterate over a condition

// 1. For loops - for (initialization;condition;counter/iteration)
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let number =15;number>=1; number--){
//     console.log(number);
// }

// while
// let a =0;
// while (a < 10) {
//     console.log( a );
//     if(a==5) break
//     a++;

// }

// do while 
let b =5 

do {
    console.log(`Loop number: ${b}`);
} while (b<5)

    // Arrays

    utensils = ['Knife','Spoon', 'Spatula', 'fork', 'chooping board', 'plates']

    utensils.pop()
    utensils.shift()
    utensils.push('whisk')
    utensils.forEach(element => {
        console.log(element);
        
    });