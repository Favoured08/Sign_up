form = document.querySelector('form')


  form.addEventListener('submit', async (e) =>{
        e.preventDefault();
        if(form.pword.value === form.cpword.value){
            const data ={
                user_name: form.uname.value,
                email: form.email.value,
                password: form.pword.value
            }

            await fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'content-Type': 'application/json'}
             }); 
     
        }else{
    alert("password does not match with confirm password")
}

  });