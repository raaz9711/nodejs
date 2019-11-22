arr =[29, 64, 73, 34, 20];
console.log(arr);

const selectionsort = (a) => {
    for(let i=0;i<a.length-1;i++){
        let min=i;
        for(let j=i+1;j<a.length;j++){
            if(a[j]<a[min]){min=j;
            let temp=a[i];
            a[i]=a[min];
            a[min]=temp;
            console.log(a)
            
            }
        }
    }

}
selectionsort(arr);