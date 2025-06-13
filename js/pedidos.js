const checkboxes = document.querySelectorAll('input[name="producto"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', actualizarOrden);
});

function actualizarOrden() {
    const seleccionados = Array.from(checkboxes)
        .filter(chk => chk.checked)
        .map(chk => chk.value)
        .slice(0, 3)

    for (let i = 0; i < 3; i++) {
        document.getElementById(`producto${i+1}-list`).textContent = seleccionados[i] || "";
    }
}

function agregarProductosSeleccionados() {
    const seleccionados = Array.from(checkboxes)
        .filter(chk => chk.checked)
        .map(chk => chk.value)
        .slice(0, 3);

    for (let i = 0; i < 3; i++) {
        document.getElementById(`producto${i+1}`).value = seleccionados[i] || "";
    }

    return true;
}
