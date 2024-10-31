var a,b,c,temp;
a=parseInt(prompt("a"));
b=parseInt(prompt("b"));
c=parseInt(prompt("c"));
//assen ding 
if(a>b){
    temp=a;
    a=b;
    b=temp;
}
if(a>c){
    temp=c;
    c=a;
    a=temp;
}
if(b>c){
    temp=b;
    b=c;
    c=temp;
}
// console.log(a,b,c);
document.write(a+""+b+""+c);