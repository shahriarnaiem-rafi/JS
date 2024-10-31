// var a=10;
var a=prompt("enter n");              
var f,s,fibo;
f=0;
s=1;
document.write("FIBO: ")
for(i=1;i<=a;i++){
    // console.log(f,"+");
    document.write(f," ");
    fibo=f+s;
    f=s;
    s=fibo;
}
