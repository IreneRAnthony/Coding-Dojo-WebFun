//1 
console.log(hello);                                   
var hello = 'world';
//Rewritten
// var hello;
// console.log(hello);
// hello = 'world';
//Predicted Output = undefined
//Output = undefined                            

//2
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
//Rewritten
// var needle = 'haystack';
// function test(){
//   var needle = 'magnet';
//   console.log(needle);
// }
//Predicted Output = magnet
//Output = magnet

//3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//Rewritten
// No change
// Predicted Output = super cool
// Output = super cool

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//Rewritten
// var food = 'chicken';
// console.log(food);
// function eat(){
//   food = 'half-chicken';
//   console.log(food);
//   var food = 'gone';
//}
//Predicted Output = half-chicken
//Output = half-chicken

//5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
//Rewritten
// var mean = function(){
//      food = 'chicken';
//      console.log(food);
//      var food = 'fish';
//      console.log(food);
//}
// mean();
//console.log(food);
//console.log(food);
//Predicted Output = chicken, fish, undefined, undefined
//Output = type error = mean is not a function.

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//Rewritten 
// var genre;
// console.log(genre);
// genre = 'disco';
// function rewind() {
//      genre = 'rock';
//      console.log(genre);
//      var genre = 'r&b';
//      console.log(genre);
//}
// console.log(genre);
// Predicted Output = undefined, rock, r&b, disco
// Output = undefined, rock, r&b, disco

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
//Rewritten
// dojo = 'san jose';
// console.log(dojo);
// function learn() {
//      dojo = 'seattle';
//      console.log(dojo);
//      var dojo = "burbank";
//      console.log(dojo);
//}
// learn();
// console.log(dojo);
//Predicted Output = san jose, seattle, burbank, san jose
//Output = san jose, seattle, burbank, san jose
