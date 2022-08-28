document.getElementById('submit-login').addEventListener('click',function(){
    // get user email-------------
    const emailfield =document.getElementById('user-email');
    const useremail =emailfield.value;
    console.log(useremail);

    // get user password shortcut-----

    const passfield =document.getElementById('user-password');
    const userpassword =passfield.value;
    console.log(userpassword);

    // check email and password for login---

    if(useremail=='joygupto2017@gmail.com' && userpassword =='12345'){
        console.log('valid user');
        // move to new webpage by click 
        window.location.href = 'banking.html';
    }

})