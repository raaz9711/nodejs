const cars= {BMW:3,Tesla:2,Toyota:1,car: ()=>{console.log(`It's a function`)}}

for (let [key,value] of Object.entries(cars)){
    console.log(`key : ${key} , value : ${value}`)
}
module.exports=cars