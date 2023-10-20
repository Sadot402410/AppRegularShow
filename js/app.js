const personajes = document.getElementById('personajes')
const imgpersonaje = document.getElementById('imgpersonaje')
const nompersonaje = document.getElementById('namepersonaje')

personajes.value = "default";
imgpersonaje.src = `../images/default.png`;
imgpersonaje.style.height = "130px";

personajes.addEventListener("change", () => {

    // if (personajes.value == "default"){
    //     imgpersonaje.src = `../images/${personajes.value}.png`;
    // }
    // else if (personajes.value != ""){
    //     imgpersonaje.src = `../images/${personajes.value}.png`;
    // }
    // else{
    //     imgpersonaje.src = `../images/default.png`;
    // }

    const selectedOption = personajes.value;

    if (selectedOption === "default") {
        imgpersonaje.src = `../images/default.png`;
        nompersonaje.textContent = "Nombre del personaje";
        imgpersonaje.style.height = "130px";
    } else if (selectedOption === "fantasmano") {
        imgpersonaje.src = `../images/${selectedOption}.png`;
        nompersonaje.textContent = selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1);
        imgpersonaje.style.height = "130px"; // Cambiamos la altura a 130px
    } else if (selectedOption !== "") {
        imgpersonaje.src = `../images/${selectedOption}.png`;
        nompersonaje.textContent = selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1);
        imgpersonaje.style.height = "200px";
    } else {
        imgpersonaje.src = `../images/default.png`;
        nompersonaje.textContent = "Nombre del personaje";
        imgpersonaje.style.height = "130px";
    }

    // Verifica si se seleccionó "Fantasmano" y ajusta la altura de la imagen
    // if (selectedOption === "fantasmano" || selectedOption === "default") {
    //     imgpersonaje.style.height = "130px";
    // }
    // else {
    //     // Si se selecciona cualquier otra opción, restablece la altura a 200px
    //     imgpersonaje.style.height = "200px";
    // }
})
