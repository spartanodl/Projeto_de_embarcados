
// Mostra a descrição do modo de alerta escolhido.

function escolherModo(modo) {
    let resultado = document.getElementById("resultado");

    if (modo === "silencioso") {
        resultado.innerHTML = `
            <h3>Modo silencioso</h3>
            <p>
                O usuário recebe os avisos por vibração,
                sem precisar de alertas sonoros.
            </p>
        `;
    } 
    
    else if (modo === "sonoro") {
        resultado.innerHTML = `
            <h3>Modo sonoro</h3>
            <p>
                O sistema utiliza sons para avisar
                quando um obstáculo está próximo.
            </p>
        `;
    } 
    
    else if (modo === "completo") {
        resultado.innerHTML = `
            <h3>Modo completo</h3>
            <p>
                Combina os alertas sonoros com a vibração
                para oferecer duas formas de aviso.
            </p>
        `;
    }
}


// Simula a distância de um obstáculo.

function simularDistancia() {
    let distancia = Math.floor(Math.random() * 150) + 10;

    let mensagem = document.getElementById("distancia");

    if (distancia <= 30) {
        mensagem.innerHTML =
            "Obstáculo muito próximo: " + distancia + " cm.";
    } 
    
    else if (distancia <= 80) {
        mensagem.innerHTML =
            "Atenção, obstáculo detectado a " + distancia + " cm.";
    } 
    
    else {
        mensagem.innerHTML =
            "Obstáculo mais distante: " + distancia + " cm.";
    }
}
