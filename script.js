// Obtiene los elementos necesarios
const openDialogButton = document.getElementById('openDialog');
const closeDialogButton = document.getElementById('closeDialog');
const dialog = document.getElementById('dialog');

// Abre el diálogo cuando se hace clic en el botón
openDialogButton.addEventListener('click', () => {
    dialog.style.display = 'flex';
});

// Cierra el diálogo cuando se hace clic en la "X"
closeDialogButton.addEventListener('click', () => {
    dialog.style.display = 'none';
});

// Opcional: Cierra el diálogo si se hace clic fuera del cuadro del diálogo
window.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.style.display = 'none';
    }
});