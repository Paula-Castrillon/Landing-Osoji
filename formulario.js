const FORMULARIO = document.querySelector("#formulariosoji")

FORMULARIO,addEventListener("submit", function(event) {
    event.preventDefault()

    const user = event.target.user.value.trim().toLowerCase()
    const email = event.target.email.value.trim().toLowerCase()
    const contraseña = event.target.contraseña.value.trim()

    console.log(user)
    console.log(email)
    console.log(contraseña)
})
