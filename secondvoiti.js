function checkForm(el){
    // let name = document.getElementById('exampleInputEmail1').value;
    let name = el.email.value;
    let password = el.password.value;
    let password1 = el.password1.value;
    

    console.log("Email: "+name, "Password: "+password, "Repeat-Pass: "+password1);
    let failed="";
    if(name=="" || password==""||password1==""){
        // alert('Заполните все поля');
        failed='Заполните все поля';
    }else if(password!=password1){
        alert("Пароли не совпадают");
    }else if(password.split("&").length > 1){
        alert("Некорректный пароль");
    }else {
        alert("Поздравляем, вы успешно зарегистрировались");
        window.location="file:///Users/erasylassyltaevicloud.com/Desktop/Front-End/PROJECTWORK/first.html";
    }
  
    if(failed != ""){
        document.getElementById('error').innerHTML=failed;
    }
return false;
}