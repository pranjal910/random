function savedata()
{
name=document.getElementById("name").value;
email=document.getElementById("email").value;
contact=document.getElementById("contact").value;
let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email})) {
    alert("duplicate data");
}    
else{
    user_records.push({
        "name": name,
        "email":email,
        "contact":contact,
    })

localStorage.setItem("users",JSON.stringify( user_records));

}
for(let i=0 ; i < user_records.length ;i++){
    console.log(user_records[i]);


}
display();
}
function display(){
    for(var i=0 ; i < localStorage.length ;i++){
    document.writeln();
        document.write(localStorage.key(i)+"\n"+localStorage.getItem(localStorage.key(i))+"]");
        document.writeln();

    }

}


