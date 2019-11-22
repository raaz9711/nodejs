arr =[7, 5, 2, 4, 3, 9];
console.log(arr);

const bubble = (a) => {
for(let i=a.length-1;i=>0;i--){
    for(let j=1;j<=i;j++){
        if(a[j-1]>a[j]){
            let tmp=a[j-1];
            a[j-1]=a[j];
            a[j]=tmp;
            console.log(a)
        }
    }
}
}

bubble(arr);