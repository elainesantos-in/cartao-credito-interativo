const nomeCliente = document.getElementById('digiteNomeCliente');
const desenhoNumeroCartao = document.querySelector('.numerodoCartao');

const numeroCartao = document.getElementById('digiteNumeroCartao')
const desenhoNomedoCliente = document.querySelector('.nomedoCliente--docartao');

const mesCartao = document.getElementById('mesCartao');
const desenhoMesVencimento = document.querySelector('.dataDeVencimento--docartao1');

const anoCartao = document.getElementById('anoCartao');
const desenhoAnoVencimento = document.querySelector('.dataDeVencimento--docartao3');

const codigodeSeguranca = document.getElementById('cvcCartao');
const desenhoCodigoSeguranca = document.querySelector('.codigodeSeguranca---docartao');

const botaoConfirma = document.getElementById('botaoConfirma')

const areaErro = document.querySelector('.areaErro')
const pAviso1 = document.createElement('p')
const pAviso2 = document.createElement('p')

const confirmar = []

botaoConfirma.addEventListener("click", thankYou);

nomeCliente.addEventListener('input', () => {
        desenhoNomedoCliente.innerText = nomeCliente.value.toUpperCase();
    
        if (/\d/.test(nomeCliente.value)) {
            nomeCliente.style.borderColor = "";
            pAviso1.setAttribute("id", "menssagemErro1");
            pAviso1.innerText = 'Caracter inválido, digite apenas letras';
            nomeCliente.parentNode.appendChild(pAviso1);
            nomeCliente.style.borderColor = "rgb(223, 6, 6)";
            limparErroNome();
        }else if (nomeCliente.value == ""){
            nomeCliente.style.borderColor = ""
            if (pAviso1) {
                pAviso1.parentNode.removeChild(pAviso1);
            }
        }
        else if (/^[a-zA-ZÀ-ú\s]+$/.test(nomeCliente.value)) {
            limparErroNome()
            nomeCliente.style.borderColor = "green"
            confirmar[0] = true
        }
    });

numeroCartao.addEventListener('input', () => {
    
    // Remove qualquer caractere que não seja número
    var cardNumber = numeroCartao.value.replace(/\D/g, '');

    // Aplica a máscara de formatação
    cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');

    // Atualiza o valor do campo de entrada
    numeroCartao.value = cardNumber;
    desenhoNumeroCartao.innerText = numeroCartao.value;

    if(numeroCartao.value.length == 19){

        console.log('aqui')
        numeroCartao.style.borderColor = "green";
        limparErroCartao();
        confirmar[1] = true
    }
    
});


mesCartao.addEventListener('input', () => {
    desenhoMesVencimento.innerText = mesCartao.value;
    if(mesCartao.value.length == 2){
        mesCartao.style.borderColor = "green";
        confirmar[2] = true
    } else{
            mesCartao.style.borderColor = ""; // Remove a borda vermelha se o campo estiver preenchido corretamente
            limparErroMes();
            confirmar[2] = false
        }
});

anoCartao.addEventListener('input', () => {
    desenhoAnoVencimento.innerText = anoCartao.value;
    if(anoCartao.value.length == 2){
        anoCartao.style.borderColor = "green";
        confirmar[3] = true
     }else {
         anoCartao.style.borderColor = ""; // Remove a borda vermelha se o campo estiver preenchido corretamente
         limparErroAno();
         confirmar[3] = false
     }
});

codigodeSeguranca.addEventListener('input', () => {
    desenhoCodigoSeguranca.innerText = codigodeSeguranca.value;
    if(codigodeSeguranca.value.length == 3){
        codigodeSeguranca.style.borderColor = "green";
        confirmar[4] = true
    }else {
        codigodeSeguranca.style.borderColor = ""; // Remove a borda vermelha se o campo estiver preenchido corretamente
        limparErroCodigo();
        confirmar[4] = false
    }
});

function limparErroNome(){
    // Remove qualquer parágrafo de erro existente
    const paragrafoErroExistente = nomeCliente.parentNode.querySelector('.paragrafoErro');
    
    if (paragrafoErroExistente) {
        paragrafoErroExistente.parentNode.removeChild(paragrafoErroExistente);
    }
}

function limparErroCartao(){
    // Remove qualquer parágrafo de erro existente
    const paragrafoErroExistente5 = numeroCartao.parentNode.querySelector('.paragrafoErro5');
    if (paragrafoErroExistente5) {
        paragrafoErroExistente5.parentNode.removeChild(paragrafoErroExistente5);
    }
}

function limparErroMes(){
    // Remove qualquer parágrafo de erro existente
    const paragrafoErroExistente2 = mesCartao.parentNode.querySelector('.paragrafoErro2');
    if (paragrafoErroExistente2) {
        paragrafoErroExistente2.parentNode.removeChild(paragrafoErroExistente2);
    }
}

function limparErroAno(){
    // Remove qualquer parágrafo de erro existente
    const paragrafoErroExistente3 = anoCartao.parentNode.querySelector('.paragrafoErro3');
    if (paragrafoErroExistente3) {
        paragrafoErroExistente3.parentNode.removeChild(paragrafoErroExistente3);
    }
}

function limparErroCodigo(){
    // Remove qualquer parágrafo de erro existente
    const paragrafoErroExistente4 = codigodeSeguranca.parentNode.querySelector('.paragrafoErro4');
    if (paragrafoErroExistente4) {
        paragrafoErroExistente4.parentNode.removeChild(paragrafoErroExistente4);
    }
}

function validarCampos() {
    limparErroNome()
    limparErroCartao()
    limparErroMes()
    limparErroAno()
    limparErroCodigo()

    if (nomeCliente.value ==""){
        nomeCliente.style.borderColor = "red";
        const p1 = document.createElement('p');
        p1.textContent = "Preenchimento obrigatório!";
        p1.classList.add('paragrafoErro');
        nomeCliente.parentNode.appendChild(p1);
        confirmar[0] = false
    } else {
        nomeCliente.style.borderColor = ""; // Remove a borda vermelha se o campo estiver preenchido corretamente
        confirmar[0] = true
    } if(numeroCartao.value.length < 19){
        numeroCartao.style.borderColor = "red";
        const p5 = document.createElement('p');
        p5.textContent = "O campo deve conter 16 números";
        p5.classList.add('paragrafoErro5');
        numeroCartao.parentNode.appendChild(p5);
        confirmar[1] = false
    }else{
        limparErroCartao();
        confirmar[1] = true
    } 
    if(mesCartao.value == ""){
        mesCartao.style.borderColor = "red";
        const p2 = document.createElement('p');
        p2.textContent = "Preenchimento obrigatório!";
        p2.classList.add('paragrafoErro2');
        mesCartao.parentNode.appendChild(p2);
        confirmar[2] = false

    }
    if(anoCartao.value == ""){
        anoCartao.style.borderColor = "red";
        const p3 = document.createElement('p');
        p3.textContent = "Preenchimento obrigatório!";
        p3.classList.add('paragrafoErro3');
        anoCartao.parentNode.appendChild(p3);
        confirmar[3] = false

    } 
    if(codigodeSeguranca.value == ""){
        codigodeSeguranca.style.borderColor = "red";
        const p4 = document.createElement('p');
        p4.textContent = "Preenchimento obrigatório!";
        p4.classList.add('paragrafoErro4');
        codigodeSeguranca.parentNode.appendChild(p4);
        confirmar[4] = false

    } 
    ValidacaoFinal(confirmar);

}


function ValidacaoFinal(array) {
    // Supondo que confirmar seja um array que você tenha definido em algum lugar
    //const confirmar = [true, true, true, true, true];

    // Verifica se todos os elementos do array confirmar são verdadeiros
    const todosVerdadeiros = array.every(opcao => opcao === true);

    if (todosVerdadeiros) {
        const div = document.createElement('div');
        div.classList = 'cardThankyou'

        const icone = document.createElement('img');
        icone.src = './images/icon-complete.svg';
        icone.classList = 'imgIconeThankyou'
        
        const h2 = document.createElement('h2');
        h2.innerText = 'THANK YOU';
        h2.classList = 'tituloThankyou'

        const p = document.createElement('p');
        p.innerText = "We've added your card details";
        p.classList = 'paragrafoThankyou'

        const buttonContinue = document.createElement('button');
        buttonContinue.innerText = 'Continue';
        buttonContinue.classList = 'buttonContinueThankyou'

        // Adiciona os elementos criados à div
        div.appendChild(icone);
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(buttonContinue);

        // Adiciona a div criada ao corpo do documento (ou a outro local desejado)
        document.body.appendChild(div);
    }
}

function thankYou() {
    validarCampos();
}


