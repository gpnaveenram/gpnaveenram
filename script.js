function createElementTag(tagname){
    var ele = document.createElement(tagname);
    return ele;
}
function setAttributes(element,attr,attrValue){
    element.setAttribute(attr,attrValue);
    return element;
}

function setsInnerHTML(element,inner){
    element.innerHTML = inner;
    return element;
}

var flex = createElementTag("div");
flex = setAttributes(flex,"class","d-flex p-2");

var formdiv = createElementTag("form");
formdiv = setAttributes(formdiv,"class","form");
formdiv = setAttributes(formdiv,"id","form");

var mainTitle = createElementTag("h1");
mainTitle = setsInnerHTML(mainTitle,"User Preferences");

var sub = createElementTag("h6");
sub = setsInnerHTML(sub,"Kinldy provide your Personal Info & Preferences");

var mb3_1 = createElementTag("div");
mb3_1 = setAttributes(mb3_1,"class","mb-3");
var firstNamelabel = createElementTag("label");
firstNamelabel = setAttributes(firstNamelabel,"for","FirstName");
firstNamelabel = setAttributes(firstNamelabel,"class","form-label");
firstNamelabel = setsInnerHTML(firstNamelabel,"First Name");

var firstNameInput = createElementTag("input");
firstNameInput = setAttributes(firstNameInput,"type","firstname");
firstNameInput = setAttributes(firstNameInput,"class","form-control");
firstNameInput = setAttributes(firstNameInput,"id","FirstName");

mb3_1.append(firstNamelabel,firstNameInput);

var mb3_2 = createElementTag("div");
mb3_2 = setAttributes(mb3_2,"class","mb-3");
var lastNamelabel = createElementTag("label");
lastNamelabel = setAttributes(lastNamelabel,"for","FirstName");
lastNamelabel = setAttributes(lastNamelabel,"class","form-label");
lastNamelabel = setsInnerHTML(lastNamelabel,"Last Name");

var lastNameInput = createElementTag("input");
lastNameInput = setAttributes(lastNameInput,"type","lastname");
lastNameInput = setAttributes(lastNameInput,"class","form-control");
lastNameInput = setAttributes(lastNameInput,"id","LastName");

mb3_2.append(lastNamelabel,lastNameInput);

var mb3_3 = createElementTag("div");
mb3_3 = setAttributes(mb3_3,"class","mb-3");
var addresslabel = createElementTag("label");
addresslabel = setAttributes(addresslabel,"for","Adress");
addresslabel = setAttributes(addresslabel,"class","form-label");
addresslabel = setsInnerHTML(addresslabel,"Address");

var addressInput = createElementTag("textarea");
addressInput = setAttributes(addressInput,"type","address");
addressInput = setAttributes(addressInput,"class","form-control");
addressInput = setAttributes(addressInput,"id","Address");
addressInput = setAttributes(addressInput,"row","3");

mb3_3.append(addresslabel,addressInput);

var mb3_4 = createElementTag("div");
mb3_4 = setAttributes(mb3_4,"class","mb-3");
var pincodelabel = createElementTag("label");
pincodelabel = setAttributes(pincodelabel,"for","pincode");
pincodelabel = setAttributes(pincodelabel,"class","form-label");
pincodelabel = setsInnerHTML(pincodelabel,"Pin Code");

var pincodeInput = createElementTag("input");
pincodeInput = setAttributes(pincodeInput,"type","pincode");
pincodeInput = setAttributes(pincodeInput,"class","form-control");
pincodeInput = setAttributes(pincodeInput,"id","pincode");

mb3_4.append(pincodelabel,pincodeInput);

var mb3_5 = createElementTag("div");
mb3_5 = setAttributes(mb3_5,"class","mb-3");
var genderlabel = createElementTag("label");
genderlabel = setAttributes(genderlabel,"for","gender");
genderlabel = setAttributes(genderlabel,"class","form-label");
genderlabel = setsInnerHTML(genderlabel,"Gender");

var genderInput = createElementTag("select");
genderInput = setAttributes(genderInput,"name","gender");
genderInput = setAttributes(genderInput,"id","gender");

var genderOption1 = createElementTag("option");
genderOption1 = setAttributes(genderOption1,"value","select");
genderOption1 = setsInnerHTML(genderOption1,"--select--");

var genderOption2 = createElementTag("option");
genderOption2 = setAttributes(genderOption2,"value","Male");
genderOption2 = setsInnerHTML(genderOption2,"M");

var genderOption3 = createElementTag("option");
genderOption3 = setAttributes(genderOption3,"value","Female");
genderOption3 = setsInnerHTML(genderOption3,"F");

genderInput.append(genderOption1,genderOption2,genderOption3);

mb3_5.append(genderlabel,genderInput);


var mb3_6 = createElementTag("div");
mb3_6 = setAttributes(mb3_6,"class","mb-3");
var foodlabel = createElementTag("label");
foodlabel = setAttributes(foodlabel,"for","food");
foodlabel = setAttributes(foodlabel,"class","form-label");
var title_1 = createElementTag("h4");
title_1.innerHTML = "Choice of Food";
foodlabel.append(title_1);

var foodChoiceRow = createElementTag("div");
foodChoiceRow.setAttribute("class","row");
foodChoiceRow = setAttributes(foodChoiceRow,"id","foodchoice");

var foodChoiceColumn1 = document.createElement("div")
foodChoiceColumn1.setAttribute("class","col align-self-start");

var foodChoiceCheckbox1 = document.createElement("div");
foodChoiceCheckbox1.setAttribute("class","form-check");
var checkbox1 = document.createElement("input");
checkbox1.setAttribute("class","form-check-input");
checkbox1.setAttribute("type","checkbox");
checkbox1.setAttribute("value","veg");
checkbox1.setAttribute("id","check");

var checkbox1label = document.createElement("label");
checkbox1label.setAttribute("class","form-check-label");
checkbox1label.innerHTML = "Vegeterian";
foodChoiceCheckbox1.append(checkbox1,checkbox1label);

var foodChoiceCheckbox2 = document.createElement("div");
foodChoiceCheckbox2.setAttribute("class","form-check");
var checkbox2 = document.createElement("input");
checkbox2.setAttribute("class","form-check-input");
checkbox2.setAttribute("type","checkbox");
checkbox2.setAttribute("value","nonveg");
checkbox2.setAttribute("id","check");

var checkbox2label = document.createElement("label");
checkbox2label.setAttribute("class","form-check-label");
checkbox2label.innerHTML = "Non-Vegeterian";
foodChoiceCheckbox2.append(checkbox2,checkbox2label);

var foodChoiceCheckbox3 = document.createElement("div");
foodChoiceCheckbox3.setAttribute("class","form-check");
var checkbox3 = document.createElement("input");
checkbox3.setAttribute("class","form-check-input");
checkbox3.setAttribute("type","checkbox");
checkbox3.setAttribute("value","fruits");
checkbox3.setAttribute("id","check");

var checkbox3label = document.createElement("label");
checkbox3label.setAttribute("class","form-check-label");
checkbox3label.innerHTML = "Fruits";
foodChoiceCheckbox3.append(checkbox3,checkbox3label);

foodChoiceColumn1.append(foodChoiceCheckbox1,foodChoiceCheckbox2,foodChoiceCheckbox3);

var foodChoiceColumn12 = document.createElement("div")
foodChoiceColumn12.setAttribute("class","col align-self-baseline");

var foodChoiceCheckbox12 = document.createElement("div");
foodChoiceCheckbox12.setAttribute("class","form-check");
var checkbox12 = document.createElement("input");
checkbox12.setAttribute("class","form-check-input");
checkbox12.setAttribute("type","checkbox");
checkbox12.setAttribute("value","tea");
checkbox12.setAttribute("id","check");

var checkbox12label = document.createElement("label");
checkbox12label.setAttribute("class","form-check-label");
checkbox12label.innerHTML = "Tea";
foodChoiceCheckbox12.append(checkbox12,checkbox12label);

var foodChoiceCheckbox22 = document.createElement("div");
foodChoiceCheckbox22.setAttribute("class","form-check");
var checkbox22 = document.createElement("input");
checkbox22.setAttribute("class","form-check-input");
checkbox22.setAttribute("type","checkbox");
checkbox22.setAttribute("value","coffee");
checkbox22.setAttribute("id","check");

var checkbox22label = document.createElement("label");
checkbox22label.setAttribute("class","form-check-label");
checkbox22label.innerHTML = "Coffee";
foodChoiceCheckbox22.append(checkbox22,checkbox22label);

foodChoiceColumn12.append(foodChoiceCheckbox12,foodChoiceCheckbox22);

foodChoiceRow.append(foodChoiceColumn1,foodChoiceColumn12);
mb3_6.append(foodlabel,foodChoiceRow);

var mb3_7 = createElementTag("div");
mb3_7 = setAttributes(mb3_7,"class","mb-3");
var statelabel = createElementTag("label");
statelabel = setAttributes(statelabel,"for","state");
statelabel = setAttributes(statelabel,"class","form-label");
statelabel = setsInnerHTML(statelabel,"State");

var stateInput = createElementTag("input");
stateInput = setAttributes(stateInput,"type","state");
stateInput = setAttributes(stateInput,"class","form-control");
stateInput = setAttributes(stateInput,"id","state");

mb3_7.append(statelabel,stateInput);

var mb3_8 = createElementTag("div");
mb3_8 = setAttributes(mb3_8,"class","mb-3");
var countrylabel = createElementTag("label");
countrylabel = setAttributes(countrylabel,"for","country");
countrylabel = setAttributes(countrylabel,"class","form-label");
countrylabel = setsInnerHTML(countrylabel,"Country");

var countryInput = createElementTag("input");
countryInput = setAttributes(countryInput,"type","country");
countryInput = setAttributes(countryInput,"class","form-control");
countryInput = setAttributes(countryInput,"id","country");

mb3_8.append(countrylabel,countryInput);

var submit = document.createElement("button");
submit.setAttribute("class","btn btn-primary");
submit.setAttribute("type","button");
submit.innerHTML="Submit";


formdiv.append(mainTitle,sub,mb3_1,mb3_2,mb3_3,mb3_4,mb3_5,mb3_6,mb3_7,mb3_8,submit);

var divform = document.createElement("form");
divform.setAttribute("id","resTable")

var hf = document.createElement("h5");
hf.setAttribute("class","response");
hf.innerHTML="User Response";
var responsetable = document.createElement("table");
responsetable.setAttribute("class","table");

var thead = document.createElement("thead");
thead.setAttribute("class","thead-light");

var tr = document.createElement("tr");

var th1 = document.createElement("th");
th1.setAttribute("scope","col");
th1.innerHTML="S.NO";

var th2 = document.createElement("th");
th2.setAttribute("scope","col");
th2.innerHTML="FirstName";

var th3 = document.createElement("th");
th3.setAttribute("scope","col");
th3.innerHTML="LastName";

var th4 = document.createElement("th");
th4.setAttribute("scope","col");
th4.innerHTML="Address";

var th5 = document.createElement("th");
th5.setAttribute("scope","col");
th5.innerHTML="Pin Code";

var th6 = document.createElement("th");
th6.setAttribute("scope","col");
th6.innerHTML="Gender";

var th7 = document.createElement("th");
th7.setAttribute("scope","col");
th7.innerHTML="Food";

var th8 = document.createElement("th");
th8.setAttribute("scope","col");
th8.innerHTML="State";

var th9 = document.createElement("th");
th9.setAttribute("scope","col");
th9.innerHTML="Country";

tr.append(th1,th2,th3,th4,th5,th6,th7,th8,th9);
thead.append(tr);


responsetable.append(thead);
divform.append(hf,responsetable);


flex.append(formdiv,divform);
document.body.append(flex);

submit.addEventListener("click",function(){storeValue()});
var resetButton = document.createElement("button");
resetButton.setAttribute("class","btn btn-primary");
resetButton.setAttribute("id","reset");
resetButton.setAttribute("type","button");
resetButton.innerHTML="Delete";
resetButton.addEventListener("click",function(){var tbds = document.getElementsByTagName("tbody");tbds[tbds.length-1].remove();});

var linebreaks = document.createElement("br");

function storeValue(){
 var food = foodChoiceCheck();
 var allvalues = getAllValues(food);
 var flag = true;
 for(let i = 0;i<allvalues.length;i++){
    if(allvalues[i]===""){
        flag=false;
        break;
    }
}if(flag){
        var tbdy = appendinTable(allvalues);
        responsetable.append(linebreaks,tbdy);
        divform.append(hf,responsetable,resetButton);
        flex.append(formdiv,divform);
        document.body.append(flex);
        document.getElementById("form").reset();
    }else{
        alert("Please provide all Details")
    }
}


function appendinTable(arrayVal){
    var tbodys = document.createElement("tbody");
    tbodys.setAttribute("class","resetrow");
    var currentIndex = responsetable.rows.length;
    var tr2 = responsetable.insertRow(currentIndex);
    var rows=document.getElementsByTagName("tr");
    var counter = rows.length-1;
    var th2 = document.createElement("th");
    th2.setAttribute("scope","row");
    th2.innerHTML=counter;
    tr2.append(th2);
    for(let x in arrayVal){
        var td2 = document.createElement("td");
        td2.innerHTML=arrayVal[x];
        tr2.append(td2);
    }
    tbodys.append(tr2);
    return tbodys;  
}
function foodChoiceCheck(){
console.log("ENTERED FUNCTION")
var values = [];
var checkboxes = document.querySelectorAll('.form-check-input:checked');
for(let i = 0;i<checkboxes.length;i++){
    values.push(checkboxes[i].value);
    console.log(checkboxes[i].value);
}
if(values<2){
    alert("Please select atleast 2 Food Choices");
}
return values;
}

function getAllValues(food){
    var arr = [];
    var firstNameVal = document.getElementById("FirstName").value;
    arr.push(firstNameVal);
    var lastNameVal = document.getElementById("LastName").value;
    arr.push(lastNameVal);
    var addressVal = document.getElementById("Address").value;
    arr.push(addressVal);
    var pincodeVal = document.getElementById("pincode").value;
    arr.push(pincodeVal);
    var genderVal = document.getElementById("gender").value;
    arr.push(genderVal);
    arr.push(food);
    var stateVal = document.getElementById("state").value;
    arr.push(stateVal);
    var countryVal = document.getElementById("country").value;
    arr.push(countryVal);
    
    return arr;
}


// var genderOption1 = createElementTag("option");
// genderOption1 = setAttributes(genderOption1,"value","select");
// genderOption1 = setsInnerHTML(genderOption1,"--select--");

// var genderOption2 = createElementTag("option");
// genderOption2 = setAttributes(genderOption2,"value","Male");
// genderOption2 = setsInnerHTML(genderOption2,"M");

// var genderOption3 = createElementTag("option");
// genderOption3 = setAttributes(genderOption3,"value","Female");
// genderOption3 = setsInnerHTML(gendergenderOption3Input,"F");

// genderInput.append(genderOption1,genderOption2,genderOption3);

// mb3_5.append(genderlabel,genderInput);

