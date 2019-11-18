//function expression 
// var bye=function() {console.log('Bye');}
// bye();

//calling a function from another function

var callfun=function(fun){
    fun();
}


var bye=function() {console.log('Bye');}
bye();
callfun(bye);