var count;
var countryflag=false;
var logo = document.createElement("header");
logo.innerHTML=`<i class="fa fa-globe fa-2x" aria-hidden="true"></i>`;
logo.style.marginLeft = "10px";
logo.style.marginTop = "10px";
logo.style.color="#5EBEC4";
document.body.append(logo); 
var h1 = document.createElement("h1");
h1.innerHTML="Your Age";

var contentContainer = document.createElement("div");
contentContainer.className="container-fluid";

var searchField = document.createElement("div");
searchField.className="searchField";
searchField.innerHTML=`<div class="input-group input-group-md">
<input type="text" id="name" placeholder="Enter your Name Here . . ." class="form-control" aria-label="Medium" aria-describedby="inputGroup-sizing-sm" autocomplete="on"></input>
</div>`;
var dropdown = document.createElement("div");
dropdown.className="dropdown"


dropdown.innerHTML=`
<label for="dropdown" class="labeldropdown"><h4>Country / Region : </h4></label>
<select id="dropdown" style="color:rgb(29, 29, 78);","border-color:rgb(29, 29, 78);" name="dropdown' class="form-select" aria-label="country">
<option selected>-----select-----</option>
<option value="AF">Afghanistan</option>
<option value="AR">Argentina</option>
<option value="AU">Australia</option>
<option value="BD">Bangladesh</option>
<option value="BR">Brazil</option>
<option value="CA">Canada</option>
<option value="CH">Switzerland</option>
<option value="CN">China</option>
<option value="DK">Denmark</option>
<option value="PK">Pakistan</option>
<option value="LK">SriLanka</option>
<option value="IN">India</option>
<option value="AE">United Arab Emirates</option>
<option value="MY">Malaysia</option>
<option value="RU">Russia</option>
<option value="SG">Singapore</option>
<option value="JP">Japan</option>
</select>`;
var button = document.createElement("div");
button.className="findButton";
button.innerHTML=`<button type="button" class="btn btn-success">Guess my Age</button>`;

contentContainer.append(searchField,dropdown,button)
document.body.append(h1,contentContainer);


button.addEventListener("click",function(){getage()});
logo.addEventListener("click",function(){foo()});

var searchResultFilter = document.createElement("div");
searchResultFilter.className="searchFilter";

var container = document.createElement("div");
    container.className="container";

    var info = document.createElement("div");
    info.setAttribute("class","info");




async function getage(){
    try{
      deleteChild("div.row"); 
    let queryParam = document.getElementById("name").value;
    
    let queryParam2 = document.getElementById("dropdown").value;
    
    let url = "https://api.agify.io?name=";
    if(queryParam2!=="-----select-----" ){
      countryflag=true;
      var res = await fetch(url+queryParam+"&country_id="+queryParam2);
      
    }else{
      countryflag=false;
    var res = await fetch(url+queryParam);
   
    }
    let res1 = await res.json();
   
    if(res1!==undefined){   
    createCards(res1,container);
    searhfilter(queryParam,searchResultFilter);
    }
    else{
        noresultFound(queryParam,searchResultFilter);
    }
    }catch(error){
            tryagain(searchResultFilter);
    }
}

function searhfilter(value,element){
  
    element.innerHTML=`<div class="alert alert-success" id="alert1" role="alert">
    <h4 class="alert-heading">About ${count} People have <mark>"${value}"</mark> as their name ${countryflag? "in your Country" : "in the World"}!</h4>
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
  deleteChild("div.row");  
  count = response.count;
    var name = response.name;
    var age = response.age;
    container.setAttribute("id","resultCards");
    var row = document.createElement("div");
    row.className="row";
    var card = document.createElement("div");
    card.className="age"; 
    card.innerHTML=`${age!==null ? `<h1 title="Your average Age based on your name in your region.">${age}</h1>` : `<i title="Your Name is UNIQUE!" class="fa-solid fa-ghost fa-5x"></i>` }`; 

  row.append(card);
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

function deleteChild(tagged) {
  try{
  let e = document.querySelector(tagged);
  let child = e.lastElementChild;
  while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
  }
}catch(Exception){
  //TBD
}
} 
