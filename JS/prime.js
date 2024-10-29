var num,count;
//num=prompt("enter num");
num=10;
count=0;

if(num==0 || num==1){
    console.log(" not prime or composit ");
}
else{
    for(i=2;i<num;i++){
        if(num%i==0){
            count++;
            break;

        }  
    }
    if(count==0){
        console.log("prime")
    }
    else{
        console.log(" not prime");
    }
}

