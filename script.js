var header = document.createElement("header");
header.innerHTML=`
<i id="icon" class="fa-solid fa-fan fa-3x"></i>
<h1>BORED!</h1>`;
var error = document.createElement("div");

var content = document.createElement("div");
content.className="content";
content.setAttribute("id","card");
content.innerHTML=`<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
<span class="sr-only">Loading...</span>
</div>`;




var button = document.createElement("div");
button.className="button";
button.innerHTML=`<button><h2><i>TRY ME</i></h2></button>`;
button.addEventListener("click",function(){getNext()});
header.addEventListener("click",function(){foo()})
document.body.append(content);

var footer = document.createElement("footer");
footer.innerHTML=`<p>&copy; 2023 What to do Next Website</p>`;

document.body.append(header,content,button,footer);
    

async function getNext(){
    try{
      deleteChild("div.spinner-border");
      deleteChild("div.row"); 
    
    let url = "https://www.boredapi.com/api/activity/";
    var res = await fetch(url);
    let res1 = await res.json();
   
    if(res1!==undefined){   
    createCards(res1);
    }
    }catch(error){
            tryagain(error);
    }
}

function createCards(response){
  deleteChild("div.content"); 
  const card = document.getElementById('card');
  card.style.display = 'block';
  var type = response.type;
  var task = response.activity;
  var link = response.link;
  console.log(type,task,link);

content.innerHTML=`<div id="card" class="card">
<div class="card-header">
 <h1>${task}</h1> 
</div>
<div class="card-body">
  <h2class="card-title">It's ${type} time</h2>
  <p class="card-text">With supporting page below,You can lead-in to additional content.</p>
  <a href=${link==""? "https://www.google.com/search?q="+`${task}` : `${link}`} class="btn btn-primary">Learn More</a>
</div>
</div>`;


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
