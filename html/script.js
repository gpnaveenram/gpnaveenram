var request = new XMLHttpRequest();
request.open('GET','https://jsonplaceholder.typicode.com/posts');
request.send();
request.onload=function(){
    console.log(this.response)
    var data = JSON.parse(this.response);
    for(var i = 0;i<data.length;i++){
    console.log(data[i].id);
    }
    
}
