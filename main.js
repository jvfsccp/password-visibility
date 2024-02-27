document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("passwordInput");
    const passwordIcon = document.getElementById("passwordIcon");
    const passwordButton = document.getElementById("passwordButton");

    const togglePassword = () => {
        const { length: passwordLength } = passwordInput.value;

        if (passwordIcon.innerText === "Visibility") {
            passwordIcon.innerText = "Visibility_Off";
            passwordInput.type = "text";
        } else {
            passwordIcon.innerText = "Visibility";
            passwordInput.type = "password";
        }

        if (passwordLength) {
            passwordInput.focus();
        }
    };

    passwordButton.addEventListener("click", togglePassword);
});