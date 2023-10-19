var emailInput = document.getElementById("email")
var passInput = document.getElementById("pass")
function login() {
    //   console.log(emailInput.value);
    //   console.log(passInput.value);
    // if (emailInput.value.trim() || passInput.value.trim()) {
    //     Swal.fire({
    //         icon: 'error',
    //         text: 'Please enter email and password!',

    //     })
    // }
     if (emailInput.value.trim() == "student@gmail.com" && passInput.value.trim() == "student123") {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logged in successfully',
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(function() {
            window.location.href = "quiz.html"
        }, 800);
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter placeholders value',

        })
    }
    emailInput.value = ""
    passInput.value = ""
}