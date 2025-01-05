const obj1=document.getElementById("obj1");
console.log("running");
obj1.addEventListener("click",function(){
    this.innerText="event activated";
})
function callBackend(){
    fetch("https://ux9t3s9dgd.execute-api.us-east-1.amazonaws.com/quizer0",{
        method:'GET'
    })
        .then(response => response.json())
        .then(data =>{
            obj1.innerText = data.body;
        })   
}
function runFetch(){
    fetch("https://hdyeovw90a.execute-api.us-east-1.amazonaws.com/runFetch",{
        
    })
        .then(response => response.json())
        .then(data =>{
            obj1.innerText = data.body;
        })   
}
document.addEventListener("keydown",function(info){
    if(info.key==' '){
        callBackend();
    }
})