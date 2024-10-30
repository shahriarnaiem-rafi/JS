var n=11; //initial number  to chek the number
var count=true;
if(n==0 || n==1){
    console.log("kicu no");
}
else{
    for(i=2;i<n;i++){
        if(n%i==0){
            count=false;
            break;
        }
    }
    if(count==0){
        console.log(" prime");
    }
    else{
        console.log("nott prime");
    }
}