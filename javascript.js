document.getElementById('controlForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir envío del formulario
    const controlNumberInput = document.getElementById('controlNumber');
    const errorMessage = document.getElementById('errorMessage');

    const controlNumberPattern = /^2184\d{4}$/; // Patrón que verifica que empiece con "2184" y tenga 8 dígitos en total

    if (!controlNumberPattern.test(controlNumberInput.value)) {
        errorMessage.style.display = 'block'; // Mostrar mensaje de error
    } else {
        errorMessage.style.display = 'none'; // Ocultar mensaje de error
        alert('Número de control válido');
        
    }
});