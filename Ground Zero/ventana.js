<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function() {
        // Función para mostrar/ocultar la contraseña
        function mostrarPassword() {
            var cambio = document.querySelector("input[type='password']");
            var icon = document.querySelector(".icon-eye");

            if (cambio.type === "password") {
                cambio.type = "text";
                icon.innerHTML = '<ion-icon name="eye"></ion-icon>';
            } else {
                cambio.type = "password";
                icon.innerHTML = '<ion-icon name="eye-off"></ion-icon>';
            }
        }

        // Mostrar/ocultar contraseña al hacer clic en el ícono del ojo
        document.querySelector('.icon-eye').addEventListener('click', function () {
        mostrarPassword();
        });

    // Mostrar/ocultar contraseña al hacer clic en el checkbox correspondiente
    document.querySelector('#showPasswordCheckbox').addEventListener('click', function () {
            var isChecked = this.checked;
    var passwordInput = document.querySelector("input[type='password']");

    if (isChecked) {
        passwordInput.type = 'text';
            } else {
        passwordInput.type = 'password';
            }
        });
    });
</script>
