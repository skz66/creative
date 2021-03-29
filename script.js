document.write("Hello, world!");



function sayHello(){
 var response = prompt("What is your name?");
 alert("Hello " + response + ", have a good day!");
}

function add(a,b){
 return a + b;
}
console.log(add(20,30));
console.log(add(100,30));


function showTopic(){
 var x = document.getElementById("demo");
 x.style.fontSize = "25px";
 x.style.color = "red";
}

var movies = ["Avengers","Captain Marvel", "Black panther", "Spiderman"];
movies[0] = "Wonder woman";
console.log(movies);

var fruits = [ ];
for (i=1; i< 10 ; i++){
fruits[i] = prompt("Enter fruit");
}
alert("fruits contains " + fruits);

for (var movie of movieDetails){
 if (movie.status === "available"){
 console.log("The movie " + movie.title + " plays at " + movie.time)
 }
else{
 console.log("Sorry, the movie " + movie.title + " is sold out.")
 }
};
