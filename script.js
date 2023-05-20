var ele = document.createElement("h1");
var innerEle = document.createElement("span");
innerEle.setAttribute("id","timer");

var head = document.createElement("h1");
var innerH = document.createElement("span");
innerH.setAttribute("id","message");

function appendd(ele1, ele2,counter){
    ele2.innerHTML=counter;
    ele1.append(ele2);
    document.body.append(ele1);
}

function message(ele1, ele2,message){
    ele2.innerHTML=message;
    ele1.append(ele2);
    document.body.append(ele1);
}



setTimeout(
    ()=>{appendd(ele,innerEle,"10")
    setTimeout(
        ()=>{appendd(ele,innerEle,"9")
        setTimeout(
            ()=>{appendd(ele,innerEle,"8")
            setTimeout(
                ()=>{appendd(ele,innerEle,"7")
                setTimeout(
                    ()=>{appendd(ele,innerEle,"6")
                    setTimeout(
                        ()=>{appendd(ele,innerEle,"5")
                        setTimeout(
                            ()=>{appendd(ele,innerEle,"4")
                            setTimeout(
                                ()=>{appendd(ele,innerEle,"3")
                                setTimeout(
                                    ()=>{appendd(ele,innerEle,"2")
                                    setTimeout(
                                        ()=>{appendd(ele,innerEle,"1")
                                            setTimeout(()=>{
                                                appendd(ele,innerEle,"Happy Independence Day")
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)