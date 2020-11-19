var name;
function myFunction() {
    name = document.getElementById("name").value;
   // userName = document.getElementById("username").value;
   // email = document.getElementById("email").value;
   // number = document.getElementById("number").value;
   // alert("hello "+name+" "+userName+" "+number+" ");
    location.replace("new.html");
    }
   function getdata() {
    alert("hello "+name+"");
    document.getElementById("name").innerHTML=name;
    }