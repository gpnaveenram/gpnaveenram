
var div = document.createElement("div");
div.setAttribute("class","box");
var inputDate = document.createElement("input");
inputDate.setAttribute("type","date");
inputDate.setAttribute("id","dob");

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("id","btn")
button.setAttribute("class","btn btn-success");
button.innerText="Display Data";
button.addEventListener("click",displaydata);

div.append(inputDate,button);
document.body.append(div);

function createDataElement(tagname,content,type){
    var ele = document.createElement(tagname);
    ele.innerText=content+" "+type;
    ele.style.textAlign="center";
    document.body.append(ele);
    
    }

function displaydata(){
    var input = (document.getElementById("dob").value);
    var dob = new Date(input);
    console.log(dob);
    var currentDate = new Date();
    console.log(currentDate);
    var milliDiff = parseInt(currentDate.getTime()-dob.getTime());
    var secoDiff = Math.floor(milliDiff/1000);
    var minutDiff = Math.floor(secoDiff/60);
    var hourDiff = Math.floor(minutDiff/60);
    var dayDiff = Math.floor(hourDiff/24);
    var yearDiff = currentDate.getFullYear()-dob.getFullYear();
    var monthDiff = yearDiff*12+((currentDate.getMonth()+1)-(dob.getMonth()+1));
    createDataElement("div",yearDiff,"Years");
    createDataElement("div",monthDiff,"Months");
    createDataElement("div",dayDiff,"Days");
    createDataElement("div",hourDiff,"Hours");
    createDataElement("div",minutDiff,"Minutes");
    createDataElement("div",secoDiff,"Seconds");
    createDataElement("div",milliDiff,"Milli Seconds");
}

