var numArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var evenArray=[];
var oddArray =[];
var isEven;

for(i=0; i<=numArray.length;i++){
    isEven=numArray[i]%2==0;

    if(isEven){
    evenArray.push(numArray[i]);
}else{
    oddArray.push(numArray[i]);
}

}
console.log("even numbers" + evenArray);
console.log("odd numbers" + oddArray);
