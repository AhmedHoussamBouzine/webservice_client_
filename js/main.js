function load(){
    let req=new XMLHttpRequest();
    req.open("get","http://localhost:8080/WebService/list")
    req.onload=function(){
        let todos=JSON.parse(req.response)
        todos.forEach(todo => {
            addToTable(todo)
        });
    }
    req.send();
}
function addToTable(todo)
{
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    tr.appendChild(td1)
    tr.appendChild(td2)
    td1.innerText=todo.name
    td2.innerText=todo.desc
    document.getElementById("tbody").appendChild(tr)
}
let formData;
let btn=document.getElementById("btn");
btn.addEventListener('click',function(){
    let name=document.getElementById("name").value
    let desc=document.getElementById("desc").value
    let req=new XMLHttpRequest()
    req.open("post","http://localhost:8080/WebService/add")
    req.onload=function()
    {
        let todo=new Object();
        todo.name=name;
        todo.desc=desc;
        addToTable(todo)
    }
   formData=new FormData();
    formData.append("name",name)
    formData.append("desc",desc)
    console.log(formData)
    req.send(formData)
})
load();