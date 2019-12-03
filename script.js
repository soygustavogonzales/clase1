/*
Aqui ira mi codigo js
*/ 

/*
var o = document.getElementsByTagName('article');
var firstArticle = o[0];
var section = firstArticle.parentElement;
var cloneArticle = firstArticle.cloneNode(true);

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(function(response) {
    console.log(response.json());
  })
  .then(function(myJson) {
    console.log(myJson);
});
*/




var a = [];
var num = -1;
var cad = "";
for(var j = 0;j<4;j++){
    
    for(var i = -1; i< j;i++){
        num = num + 2
        cad = cad + num;
        a[j] = cad;
        cad = "";        
    }

}
console.log(a);


/*

    for(var i = 0;i <= j;++i){
        console.log(i)
        cad  =  cad + "1";
    }*/