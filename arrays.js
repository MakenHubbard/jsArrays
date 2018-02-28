console.log('arrays');

//challenge #1

var test1 = 'cat';
var test2 = "racecar";
var test3 = "bear";
var test1 = "mom";


var array1 = test1.split('');
var reversed = array1.reverse();
var array1 = reversed.join('');
console.log(array1);
if (test1 === array1 ) {
    console.log(true);
} else {
    console.log(false);
}


var animals = ["fish", "dog", "cat"];
var animalzElement = document.getElementById('animalz');
for(var i=0; i<animals.length; i++) {
// console.log("animal", animals[i])
 animalzElement.innerHTML += '<h5>' + animals[i] + '</h5>';
}


//Challenge #2

var book1 = 'catch 22';
var array1 = book1.split(" ").pop();
    console.log(array1);

var book2 = 'Slaughterhouse 5';
var array2 = book2.split(" ").pop();
    console.log(array2);

var book3 = 'Fahrenheit 451';
var array3 = book2.split(" ").pop();
    console.log(array3);

var book4 = 'jaws 33';
var bookSplit = book4.split("");
var realNumz = [];
for(var j=0; j<bookSplit.length; j++){
    console.log('bookSplit', bookSplit[j]);
    if((bookSplit[j]*1)){
        realNumz.push(bookSplit[j]);
        console.log('booksplit', bookSplit[j]);
    }
}
console.log("answer",realNumz.join(""))