var inputtext = document.querySelector("#inputTxt");
var outputtext = document.querySelector("#output");
var btnTransalate = document.querySelector("#btn-transalate");

var serverURL = "https://api.funtranslations.com/translate/british.json"

function getConstructurl(textinputvalue){

    return serverURL + "?"+"text="+textinputvalue

}

function clickHandler(){

    //incoming value
    var inputText = inputtext.value;

//processing
fetch(getConstructurl(inputText))
.then(response => response.json())
.then(json => {

    var transalatedText = json.contents.translated;

    outputtext.innerText=transalatedText; 
})
.catch(errorhandler)


    //outut

}

function errorhandler(error){
    console.log("error occured", error);
    alert("Something wrong with the server tray again after sometime");
}

btnTransalate.addEventListener("click",clickHandler)