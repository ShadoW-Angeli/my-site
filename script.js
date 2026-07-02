const stud = document.getElementById("stud");
const add = document.getElementById("add");
add.addEventListener("click", function(event){
    event.preventDefault();

    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.textContent = stud.value;
    if(stud.value.trim() == ""){
        return
    }
    list.append(li);
    stud.value = "";

    const del = document.createElement("button");
    del.textContent = "Видалити";
    li.append(del);

    del.addEventListener("click", function(){
        li.remove();
    });
});
