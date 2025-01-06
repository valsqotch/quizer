const ipt=document.getElementById("ipt");
const btn=document.getElementById("btn");
console.log("running");
function callBackend(){
    fetch("https://ux9t3s9dgd.execute-api.us-east-1.amazonaws.com/quizer0",{
        method:'GET'
    })
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        })   
}
document.addEventListener("keydown",function(info){
    if(info.key==' '){
        //callBackend();
        console.log("space pressed");
    }
})
btn.addEventListener("click",function(){
    fetch("https://ux9t3s9dgd.execute-api.us-east-1.amazonaws.com/quizer0",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            comm:ipt.value.trim()
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error =>{
        console.log("error occured,", error);
    })
    ipt.value='';
})
