var myInfo = {
    "name"              : "naveenram",
    "email"             : "gpnaveenram@gmail.com",
    "yearsOfExperience" : "8",
    "phone"             : "9791213161",
    "education":{
         "HSC" : "Bio-Maths",
         "UG"  : {
            degree : "BE",
            course : "Mechanical Engineering"
        }
    },
    "Skill"  : {
        code      : "java",
        scripting : "javascript"
    },
    "profile"    :"Senior QA Engineer",
    "experience" : "Functional and Automation Testing", 
    "tools"      : ['selenium', 'JIRA'],
    "keyword"    : ['testing','automationTesting', 'selenium', 'JIRA']
}
//Print the entire given json
console.log("<--------------- Resume of Canditate --------->\n" ,myInfo)
var details = Object.keys(myInfo)
var count = details.length;
console.log("Details provided - ", count);

//Iteration
console.log("Details Provided are ...")
for(var i = 0;i<count;i++){
    console.log(myInfo[details[i]])
}

//forEach
Object.entries(myInfo).forEach(([key, value]) => {
    console.log("Key : "+`${key}  -->  ${value}`);
});
//for in
function printSkills(obj) {
    for(var k in obj) {
         if(k =="Skill") {
            console.log(obj[k])
         }
    }
};
//for of
function shortListed(obj){
    for(var skillSet of Object.entries(obj)){
        if(skillSet.indexOf('Functional and Automation Testing') !== -1){
            return true
        }
    }
    
}
printSkills(myInfo)
if(shortListed(myInfo)){
    console.log("Shortlisted")
}else{
    console.log("Not Applicable")
}



