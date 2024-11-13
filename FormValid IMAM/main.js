

document.getElementById('name').addEventListener('keyup', function(event){
    const getName = event.target.value
    const nameVld = document.getElementById('name');
    const nameMessage = document.getElementById('message');

    if(getName.length < 4 || getName.length > 12){
        nameVld.style.borderColor = '#ff0000';
        nameMessage.textContent = 'Name must be between 4 and 12 characters.';
        nameMessage.style.color = '#ff0000';
    }
    else{
        nameVld.style.borderColor = '#228B22';
        nameMessage.textContent = "";
        nameMessage.style.color = '#228B22';
    }
})

document.getElementById('email').addEventListener('keyup', function(){
    
    const emailVld = document.getElementById('email')
    const emailMessage = document.getElementById('emailMessage')
    const emailPattern = /^[a-z-0-9._%+-]+@[a-z-0-9.-]+\.[a-z]{2,}$/;
    if(emailPattern.test(emailVld.value)){
        emailVld.style.borderColor = "#228B22";
        emailMessage.textContent = ""
        emailMessage.style.color = "#228B22";
    }
    else{
        emailVld.style.borderColor = "#ff0000";
        emailMessage.textContent = "Please Enter Your Valid Email Address"
        emailMessage.style.color = "#ff0000";
    }
})


document.getElementById('submitBtn').addEventListener('click', function(){
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    


    let genders = '';

    for(let i = 0; i < document.form.gnd.length; i++){
        if(document.form.gnd[i].checked){
            genders = document.form.gnd[i].value
            
        }
    }
    let getRound = '';

    for(let r = 0; r < document.form.select.length; r++){
        if(document.form.select[r].selected){
            getRound = document.form.select[r].value
        }
    }

    let educations = '';

    for(let e = 0; e < document.form.edu.length; e++){
        if(document.form.edu[e].checked){
            educations = document.form.edu[e].value
        }
    }

    if(name && email && password){
    doc = open('', '', 'width= 500px', 'height= 500px');
    with(doc.document){
        write('Name:' + name);
        write("<br>");
        write('Email:' + email);
        write('<br>');
        write('Password:' + password);
        write('<br>');
        write('Gander:' + genders)
        write('<br>');
        write('Round: ' + getRound)
        write('<br>');
        write('Education: ' + educations)
    }
    }
    else{
        alert('Please Fill Up The Form')
        return
    }
})