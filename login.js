const UsersData = [
    {
      name: "nest",
      password: "Nest12345678",
    },
  ];
  
  function Signup() {
    let passOne = document.getElementById("passOne").value;
    let name = document.getElementById("name").value;
  
    if (passOne.length >= 8) {
        if (passOne != passOne.toLowerCase()) {
            console.log("pass approved!");
            if (name != "") {
              let newUser = "";
              newUser = {
                name: name,
                password: passOne,
              };
              UsersData.push(newUser);
            }
          } else {
            alert("must include capital letter");
          }
        }
    }
    else {
      alert("pass is too short");
    }
  
  function Login() {
    let found = false;
    let pass = document.getElementById("pass").value;
    for (let i = 0; i < UsersData.length; i++) {
      if (email == UsersData[i].email && pass == UsersData[i].password) {
        found = true;
        window.location.replace("./index.html");
      }
    }
    if (!found) {
      alert("your pass or email is wrong");
    }
  }
  
  function Forgot() {
    let email = document.getElementById("femail").value;
    for (let i = 0; i < UsersData.length; i++) {
      if (UsersData[i].email == email) {
        document.getElementById("sQuestion").innerHTML = UsersData[i].secretQ;
      }
    }
  }
  
  function Check() {
    let email = document.getElementById("femail").value;
    let userAns = document.getElementById("userAns").value;
    for (let i = 0; i < UsersData.length; i++) {
      if (UsersData[i].email == email) {
        if (UsersData[i].secretAns == userAns)
          document.getElementById("fpass").innerHTML = UsersData[i].password;
      }
    }
  }