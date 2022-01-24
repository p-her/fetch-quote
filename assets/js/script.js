var userFormEl = document.querySelector("#user-form");
var wordInputEl = document.querySelector("#word");
var searchResultEl = document.querySelector("#search-result");
var wordDefinitionEl = document.querySelector("#definition");
var wordSynonymEl = document.querySelector("#synonyms");
var wordPronunciationEl = document.querySelector("#pronunciation");

//function to handle button click

var formSubmitHandler = function(event){
    event.preventDefault();
    var word = wordInputEl.value.trim();
    fetchAPI(word)
    
    wordInputEl.value="";

}

userFormEl.addEventListener("submit", formSubmitHandler);


// make a fetch api call to get a quote
function fetchAPI(word){

    // fetch url
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(function(data){
        // empty array
        var arr = [];

            // loop through the data
            for(var count = 0; count < data.length; count++){

                // set flag to false
                var flag = false;

                // get the quote from the api and assign to str variable
                var str = data[count].text;

                // split the words into an array and assign to arr
                    arr = str.split(" ");

                // loop thrugh the array 
                for(var i = 0; i < arr.length; i++){

                    // check if the word the user enters match with any words of the array
                    // if it's match, then display the quote to the user
                    if(arr[i] === word){
                        
                        // get the quote
                       $(".quotes").text(str)
                       // set flag to true
                        flag = true;
                        
                    }
                    
                }

                // if flag is true, then break the loop
                if(flag){
                    break;
                }


                // check if no word match with the user input
                // then display no quote to the user
                if(count == (data.length -1)){

                    $(".quotes").text('No Quote')
                }

    
            }
    })
}