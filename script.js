var calcDone=false;
var element = createElementbyTag("form");
element = setAttributesforEle(element,"class","formstyle");
var div = createElementbyTag("div");
div=setAttributesforEle(div,"class","form-group");

var inputField = createElementbyTag("input");
inputField = setAttributesforEle(inputField,"class","calc");
inputField = setAttributesforEle(inputField,"type","text");
inputField = setAttributesforEle(inputField,"id","display");
var linebreaker0 = linebreakers();

var clearButton = createButton("input","button","btn btn-secondary","C");
clearButton = setAttributesforEle(clearButton,"id","clear");

var mod = createButton("input","button","btn btn-secondary","%");
mod = setAttributesforEle(mod,"id","mod");

var squareroot = createButton("input","button","btn btn-secondary","√");
squareroot = setAttributesforEle(squareroot,"id","squareroot");

var divButton = createButton("input","button","btn btn-secondary","/");
divButton = setAttributesforEle(divButton,"id","divButton");

var multButton = createButton("input","button","btn btn-secondary","*");
multButton = setAttributesforEle(multButton,"id","multButton");

var minusButton = createButton("input","button","btn btn-secondary","-");
minusButton = setAttributesforEle(minusButton,"id","minusButton");

var linebreakers1 = linebreakers();

var seven = createButton("input","button","btn btn-secondary","7");
seven = setAttributesforEle(seven,"id","seven");

var eight = createButton("input","button","btn btn-secondary","8");
eight = setAttributesforEle(eight,"id","eight");

var nine = createButton("input","button","btn btn-secondary","9");
nine = setAttributesforEle(nine,"id","nine");

var plusButton = createButton("input","button","btn btn-secondary","+");
plusButton = setAttributesforEle(plusButton,"id","plusButton");

var linebreakers2 = linebreakers();

var four = createButton("input","button","btn btn-secondary","4");
four = setAttributesforEle(four,"id","four");

var five = createButton("input","button","btn btn-secondary","5");
five = setAttributesforEle(five,"id","five");

var six = createButton("input","button","btn btn-secondary","6");
six = setAttributesforEle(six,"id","six");

var linebreakers3 = linebreakers();

var one = createButton("input","button","btn btn-secondary","1");
one = setAttributesforEle(one,"id","one");

var two = createButton("input","button","btn btn-secondary","2");
two = setAttributesforEle(two,"id","two");

var three = createButton("input","button","btn btn-secondary","3");
three = setAttributesforEle(three,"id","three");

var equalto = createButton("input","button","btn btn-secondary","=");
equalto = setAttributesforEle(equalto,"id","equalto");

var linebreakers4 = linebreakers();


var zero = createButton("input","button","btn btn-secondary","0");
zero = setAttributesforEle(zero,"id","zero");

var point = createButton("input","button","btn btn-secondary",".");
point = setAttributesforEle(point,"id","point");


div.append(inputField,linebreaker0,clearButton,squareroot,mod,divButton,linebreakers1,seven,eight,nine,multButton,linebreakers2,four,five,six,minusButton,linebreakers3,one,two,three,plusButton,zero,point,equalto);
element.append(div);
document.body.append(element);

clearButton.addEventListener("click",function(){clear()});
mod.addEventListener("click",function(){display("mod")});
squareroot.addEventListener("click",function(){display("squareroot")});
divButton.addEventListener("click",function(){display("divButton")});
multButton.addEventListener("click",function(){display("multButton")});
minusButton.addEventListener("click",function(){display("minusButton")});
seven.addEventListener("click",function(){display("seven")});
eight.addEventListener("click",function(){display("eight")});
nine.addEventListener("click",function(){display("nine")});
plusButton.addEventListener("click",function(){display("plusButton")});
four.addEventListener("click",function(){display("four")});
five.addEventListener("click",function(){display("five")});
six.addEventListener("click",function(){display("six")});
one.addEventListener("click",function(){display("one")});
two.addEventListener("click",function(){display("two")});
three.addEventListener("click",function(){display("three")});
equalto.addEventListener("click",function(){calculation()});
zero.addEventListener("click",function(){display("zero")});
point.addEventListener("click",function(){display("point")});


function createButton(tagname,type,Class,value){
    var ele = document.createElement(tagname);
    ele.setAttribute("type",type);
    ele.setAttribute("class",Class);
    ele.setAttribute("value",value);
    return ele;
}
function createElementbyTag(tagname){
    var ele = document.createElement(tagname);
    return ele;
}
function setAttributesforEle(ele,attr,attrValue){
    ele.setAttribute(attr,attrValue);
    return ele;
}
function setInnerText(ele,innerText){
    ele.innerHTML=innerText;
    return ele;
}
function linebreakers(){
    var ele = document.createElement("br");
    return ele;
}

function display(val){
    resetdisplay();
var valu = document.getElementById(val).value;
document.getElementById("display").value+=valu;
}
function clear(){
document.getElementById("display").value="";
}
function calculation(){
    var equation = document.getElementById("display").value;
    var sol = eval(equation);
    document.getElementById("display").value=sol;
    calcDone=true;

}
function resetdisplay(){
    if(calcDone){
        document.getElementById("display").value="";
        calcDone=false;
    }
}
