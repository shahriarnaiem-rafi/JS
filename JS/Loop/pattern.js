//normal pattarn
let pattern = 5;
for(var i=0;i<=pattern;i++){
    var put="";
    for(var j=1;j<i;j++){
        put+="*";
    }
    console.log(put);
}
//similar 
var n=prompt("enter ")
for (var row = 1; row <= n; row++) {
    for (var col = 1; col <=row; col++) {          

        document.write(col);
    }
    document.write("</br>");

}


//piramid
let rows = 5; // Number of rows for the pyramid

for (let i = 1; i <= rows; i++) {
    let spaces = '';
    let stars = '';

    // Create leading spaces
    for (let j = 0; j < rows - i; j++) {
        spaces += ' ';
    }

    // Create asterisks
    for (let k = 0; k < (2 * i - 1); k++) {
        stars += '*';
    }

    // Combine spaces and stars and log to the console
    console.log(spaces + stars);
}
//
//another piramid
let height = 5;

// Loop through each level of the pyramid
for (let i = 1; i <= height; i++) {
    let row = '';

    // Create spaces for alignment
    for (let j = 0; j < height - i; j++) {
        row += ' ';
    }

    // Create the asterisks for the current level
    for (let k = 0; k < (2 * i - 1); k++) {
        row += '*';
    }

    // Print the current level of the pyramid
    console.log(row);
}