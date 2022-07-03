const my_form=document.forms["myform"]
const input=my_form["task"]
const ul=document.getElementById("tasklist")

my_form.addEventListener("submit",(e)=>{

    e.preventDefault();
    const val=input.value;
    const newli=document.createElement("li")
    newli.innerHTML=val + "<i onclick=\"deleteTask(this)\" class=\"fa-solid fa-xmark\" style=\"float:right;\"></i>"

    ul.appendChild(newli)

})

function deleteTask(element){

    element.parentElement.remove();

}
