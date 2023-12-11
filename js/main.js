function validate(){
    let user =document.getElementById('user').value;
    let password =document.getElementById('password').value;

    if(user =='marce' && password=='1234'){
       
        location.href = ('/transporte.html');
        alert('Usuario CORRECTO');
    
        
    }
        else{
            alert('Usuario incorrecto');

        }
    
}