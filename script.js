var logo = document.createElement("div");
logo.innerHTML=`<i class="fa fa-globe fa-2x" aria-hidden="true"></i>`;
logo.style.marginLeft = "10px";
logo.style.marginTop = "10px";
logo.style.color="#5EBEC4";
document.body.append(logo);
var h1 = document.createElement("h1");
h1.innerHTML="Check your Nationality";

var searchField = document.createElement("div");
searchField.className="container";
searchField.innerHTML=`<div class="input-group input-group-lg">
<input type="text" id="name" placeholder="Enter your Name Here . . ." class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
</div>`;
var button = document.createElement("div");
button.className="findButton";

button.innerHTML=`<button type="button" class="btn btn-success">Find Nationality</button>`;
document.body.append(h1,searchField,button);
button.addEventListener("click",function(){getNationality()});
logo.addEventListener("click",function(){foo()});

var searchResultFilter = document.createElement("div");
searchResultFilter.className="searchFilter";

var container = document.createElement("div");
    container.className="container";

    var info = document.createElement("div");
    info.setAttribute("class","info");

var card1 = document.createElement("div");
var card2 = document.createElement("div");


async function getNationality(){
    try{
    let queryParam = document.getElementById("name").value;
    document.getElementById("name").value="";
    let url = "https://api.nationalize.io?name=";
    var res = await fetch(url+queryParam);
    let res1 = await res.json();
    if(res1.country.length>1){    
    searhfilter(queryParam,searchResultFilter);
    createCards(res1,container,card1,card2);
    console.log(res1);
    }else{
        noresultFound(queryParam,searchResultFilter);
    }
    }catch(error){
            tryagain(searchResultFilter);
    }
}

function searhfilter(value,element){
    
    element.innerHTML=`<div class="alert alert-success" id="alert1" role="alert">
    <h4 class="alert-heading">Match Found for ! <mark>${value}</mark> </h4>
    <p>Prediction of the nationality of the given name. Be sure to check out the probability as well.</p>
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
function createCards(response,container,card1,card2){
    var lists = response.country;
    var country1 = lists[0].country_id;
    var probability1 = (lists[0].probability)*100;
    console.log(probability1);
    var country2 = lists[1].country_id;
    var probability2 = (lists[1].probability)*100;
    console.log(probability2)
    
    
    container.setAttribute("id","resultCards");
    var row = document.createElement("div");
    row.className="row";
    var cols1 = document.createElement("div");
    cols1.className="col";
    var cols2 = document.createElement("div");
    cols2.className="col";

    
    info.innerHTML=`<p class="lead">
     Top two possible country of Orgin of this Name are, 
  </p>`;

   
    card1.innerHTML=`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${country1}</h5>
      <p class="card-text">Above is the most relevant Country of Origin of this given Name</p>
      <h6>Probability</h6>
      <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: ${probability1}%" 
  aria-valuenow=${probability1} aria-valuemin="0" aria-valuemax="100">${probability1}%</div>
</div>
    </div>
  </div>`;

    card2.innerHTML=`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${country2}</h5>
      <p class="card-text">Above is the second most relevant Country of Origin of this given Name</p>
      <h6>Probability</h6>
      <div class="progress">
  <div class="progress-bar" role="progressbar" style="width: ${probability2}%" 
  aria-valuenow=${probability2} aria-valuemin="0" aria-valuemax="100">${probability2}%</div>
</div>
    </div>
  </div>`;

  cols1.append(card1);
  cols2.append(card2);

  row.append(cols1,cols2);
  container.append(info,row);
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
