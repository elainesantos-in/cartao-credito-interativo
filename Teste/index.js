const botaoConfirma = document.getElementById('botaoConfirma')
botaoConfirma.addEventListener("click", thankYou);

function thankYou() {
    const cardConfirmado = document.getElementById('cardConfirmado')

    const img = document.createElement("img");
    img.className = "imgConfirmado"; 
    img.src = "../src/images/icon-complete.svg";

    const f1 = document.createElement('p');
    f1.className = "pf1"; 
    f1.innerText = "THANK YOU";

    const f2 = document.createElement('p');
    f2.className = "pf2"; 
    f2.innerText = "We've added your card details";
    
    cardConfirmado.appendChild(img); 
    cardConfirmado.appendChild(f1);
    cardConfirmado.appendChild(f2);

    
}