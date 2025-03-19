function criptografar(frase, deslocamento) {
    frase = frase.toUpperCase();
    let resultado = "";

    for (let i = 0; i < frase.length; i++) {
        let char = frase[i];

        if (char >= 'A' && char <= 'Z') {
            let codigo = frase.charCodeAt(i);
            let novoCodigo = ((codigo - 65 + deslocamento + 26) % 26) + 65;
            resultado += String.fromCharCode(novoCodigo);
        } else {
            resultado += char;
        }
    }
    return resultado;
}

function criptografarTexto() {
    let texto = document.getElementById("inputTexto").value;
    const deslocamento = 4;
    
    let textoCriptografado = criptografar(texto, deslocamento);
    
    document.getElementById("textoCriptografado").innerText = "🔒 " + textoCriptografado;
    document.getElementById("textoDescriptografado").innerText = "";
}

function descriptografarTexto() {
    let textoCriptografado = document.getElementById("textoCriptografado").innerText.replace("🔒 ", "");
    const deslocamento = -4;

    let textoOriginal = criptografar(textoCriptografado, deslocamento);
    
    document.getElementById("textoDescriptografado").innerText = "🔓 " + textoOriginal;
}
