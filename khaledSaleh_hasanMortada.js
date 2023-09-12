// document.getElementById("user-inp").addEventListener("blur", () => {
//     //getting the nubmer and chaniging its data tye to int
//     const userInput = document.getElementById("user-inp").value;
//     const numberOfKeys = parseInt(userInput);
//     // making sure the nb entered is in the correct range
//     if (numberOfKeys >= 0 && numberOfKeys <= 30000) {
//         switch (numberOfKeys) {
//             case 0:
//                 console.log("we sank together");
//                 break;
//             case 30000:
//                 console.log("we made it");
//                 break;
//             // default acts like else
//             default:
//                 console.log("we need to swim a little bit more!");
//                 break;
//         }
//     } 
//     // handling th error id nbr out of range
//     else {
//         console.log("Number should be between 0 and 30000");
//     }
// });

/////////////////////////////////////////////////////////////////////////////////////

// //EX: 2
let arr = [1, 3, 5, 22, 87, 1]
// function using arrow notation, passing array as an arguement
const get_min_and_max = (arr) => {
    // initializing and assigining the values to the 1st array element
    let min = arr[0];
    let max = arr[0];
    // looping over the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // if we found a nbr less than the min it becomes the min
        }
        if (arr[i] > max) {
            max = arr[i]; // if we found a nbr greater than the max it becomes the max
        }
    }
    // logging the outpt
    console.log("Minimum: " + min); 
    console.log("Maximum: " + max);
}
get_min_and_max(arr);

////////////////////////////////////////////////////////

// // EX:3 

// // fct that takes a number and print the shape/ grapht wanted
// const draw_pyramid = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let pyramid = ''; // declaring a dtring to add the putput to it
//         // for loopp that works horizontally adding *'s 
//         for (let j = 1; j <=  i; j++) {
//             pyramid += '*';
//         }
//         // for loop that add spaces infront of stars
//         for (let k = 1; k <= i; k++) {
//             pyramid += ' ';
//         }
//         pyramid += "\n";
//         // Print the output
//         console.log(pyramid);
//     }
// }
// draw_pyramid(5);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// EX: 4 :

// let arr = [12,98,96];


// const largest_nb = (arr) => {
//     let maxx = arr[0]; // Initialize maxx to negative infinity
//     console.log("before", maxx);
    
//     // Looping over the big array
//     for (let i = 0; i < arr.length; i++) {
//         if ( arr[i] > maxx) {
//             maxx = arr[i];
//         }
        
//         }
//     console.log(maxx);
//     }

// largest_nb(arr);


/////////////////////////////////////////////////////////////////////////////////////

// //EX5:

// const sqr = (n) => {
//     console.log(n * n); // power 2 is the same as multiplying the nbr by itslef
//     return n * n;
// }
// sqr(5);