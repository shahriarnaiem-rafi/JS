var n=[1,2,3,4,5];
var large=n[0];
var small=n[0];
var sum=0;
for(i=0;i<n.length;i++){
    if(small>n[i]){
        small=n[i];
    }
    if(large<n[i]){
        large=n[i];
    }
    var sum =sum+n[i];
}
console.log("small number ",small);
console.log("large number ",large);
console.log("sum number ",sum);
