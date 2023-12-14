var logo = document.createElement("div");
logo.innerHTML=`<i class="fa fa-globe fa-2x" aria-hidden="true"></i>`;
logo.style.marginLeft = "10px";
logo.style.marginTop = "10px";
logo.style.color="#5EBEC4";
document.body.append(logo); 
var h1 = document.createElement("h1");
h1.innerHTML="Word Check";

var searchField = document.createElement("div");
searchField.className="searchField";
searchField.innerHTML=`<div class="input-group input-group-md">
<input type="text" id="name" placeholder="Enter your Word Here . . ." class="form-control" aria-label="Medium" aria-describedby="inputGroup-sizing-sm">
</div>`;
var button = document.createElement("div");
button.className="findButton";

button.innerHTML=`<button type="button" class="btn btn-success">Get the Word</button>`;
document.body.append(h1,searchField,button);
button.addEventListener("click",function(){getWORD()});
logo.addEventListener("click",function(){foo()});

var searchResultFilter = document.createElement("div");
searchResultFilter.className="searchFilter";

var container = document.createElement("div");
    container.className="container";

    var info = document.createElement("div");
    info.setAttribute("class","info");




async function getWORD(){
    try{
      deleteChild();
    let queryParam = document.getElementById("name").value;
    document.getElementById("name").value="";
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    var res = await fetch(url+queryParam);
    let res1 = await res.json();
    if(res1.length>0){   
    searhfilter(queryParam,searchResultFilter);
    createCards(res1,container);
    }
    else{
        noresultFound(queryParam,searchResultFilter);
    }
    }catch(error){
            tryagain(searchResultFilter);
    }
}

function searhfilter(value,element){
  console.log("Search Filter1");
    element.innerHTML=`<div class="alert alert-success" id="alert1" role="alert">
    <h4 class="alert-heading">Word Search found for ! <mark>${value}</mark> </h4>
    <p>Usage of the given Word below, </p>
    <hr>
  </div> 
  </div>`;
  document.body.append(element);
}
function noresultFound(value,element){
    element.innerHTML=`<div class="alert alert-warning" id="alert1" role="alert">
    <h4 class="alert-heading">No Match Found for ! <mark>${value}</mark> </h4>
    <p>Please enter the valid name</p>
    </div> 
  </div>`;
  document.body.append(element);
}
function createCards(response,container){
    var word = response[0].word;
    var phonetic = response[0].phonetic;
    var partsofspeech = response[0].meanings[0].partOfSpeech;
    var audio = response[0].phonetics[0].audio;
    var meaning1 = response[0].meanings[0].definitions[0].definition;
       
    container.setAttribute("id","resultCards");
    var row = document.createElement("div");
    row.className="row";
    var cols1 = document.createElement("div");
    cols1.className="col";

    info.innerHTML=`<h1 class="lead">
     Usage of the given Word below, 
  </h1>
  <br></br>`;

    var card = document.createElement("div");  
    card.className="resultCard"; 
    card.innerHTML=`<div class="card">
    <div class="card-header">
    <h1>
      ${word}</h1> Pronounciation : ${phonetic}
    </div>
    <div class="card-body">
      <h5 class="card-title">${partsofspeech}</h5>
      <p class="card-text">${meaning1}</p>
      <hr/>
      <audio controls>
  
  <source src=${audio} type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
    </div>
  </div>`;
  row.append(card);
  // row.append(cols1);
  // container.append(info);
  container.append(row);
  document.body.append(container);


}

function tryagain(element){
    element.innerHTML=`<div class="alert alert-warning" id="alert1" role="alert">
    <h4 class="alert-heading">Error Occurred.</mark> </h4>
    <p>Please Try Again !</p>
    </div> 
  </div>`;
  document.body.append(element);

}

function foo(){
    location.reload();
}

function deleteChild() {
  try{
  let e = document.querySelector("div.resultCard");
  let child = e.lastElementChild;
  while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
  }
}catch(Exception){
  //TBD
}
} 
