function verificarCpf() {

    //pegando o cpf do usuario do html
    let cpfUsuario = document.getElementById("inputCpf").value

    //separando o cpf em digitos
    let cpfUsuarioDigitos = cpfUsuario.toString().split('')
    let digitos = cpfUsuarioDigitos.map(Number)

    //atribuindo variaveis aos 2 ultimos digitos do cpf
    let digitoVerificador1 = digitos[9]
    let digitoVerificador2 = digitos[10]

    //criando a variavel multiplicadora
    let multiplicadorDig1 = 10
    let multiplicadorDig2 = 11

    //criando variaveis soma dos dois digitos verificadores
    let somaVerificador1 = 0
    let somaVerificador2 = 0

    //verificacao do primeiro digito
    //loop para somar a multiplicacao dos 9 primeiros digit com 10, 9, 8... ate 2
    for (i = 0; i < 9; i++) {
        somaVerificador1 += (digitos[i] * (multiplicadorDig1))
        multiplicadorDig1--
    }

    //calculo padrao com a soma encontrada para verificar o primeiro digito
    let restoDigito1 = ((somaVerificador1 * 10) % 11)
    if (restoDigito1 == 10 || restoDigito1 == 11) {
        restoDigito1 = 0
    } else {
        restoDigito1
    }

    //verificacao do segundo digito
    //loop para somar a multiplicacao dos 10 primeiros digit com 11, 10, 9, 8... ate 2
    for (i = 0; i < 10; i++) {
        somaVerificador2 += (digitos[i] * multiplicadorDig2)
        multiplicadorDig2--
    }

    //calculo padrao com a soma encontrada para verificar o segundo digito
    let restoDigito2 = ((somaVerificador2 * 10) % 11)
    if (restoDigito2 == 10 || restoDigito2 == 11) {
        restoDigito2 = 0
    } else {
        restoDigito2
    }

    //resultado usuario
    if (restoDigito1 === digitoVerificador1 && restoDigito2 === digitoVerificador2) {
        console.log("CPF VÁLIDO")
        document.getElementById("resultadoValidacao").innerHTML = "Seu CPF é VÁLIDO."
    } else {
        console.log("CPF NÃO VÁLIDO")
        document.getElementById("resultadoValidacao").innerHTML = "Seu CPF NÃO é VÁLIDO."
    }
}

function limparCpf() {
    document.getElementById("inputCpf").value = ""
}