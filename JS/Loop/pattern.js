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
// piramid
