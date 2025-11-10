const a = [...document.querySelectorAll('button')]
const visor = [...document.querySelectorAll('.visor div')]

function trocar(){
    if(visor[0].innerHTML.length <= 0){
        visor[0].innerHTML = visor[2].innerHTML;
        visor[2].innerHTML = '';
    }
}

function limpar(){
    visor.forEach((el)=>{
        el.innerHTML = '';
    })
}

const apg = function apagar(){
    visor[2].innerHTML = visor[2].innerHTML.slice(0,-1);
}

function operacao(op){
    let num1 = Number(visor[0].innerHTML);
    let num2 = Number(visor[2].innerHTML);
    let res = null;
    console.log(op,num1,num2)
    switch(op){
        case '+':
           return res = num1 + num2;
            break;
        case '-':
           return res = num1 - num2;
            break;
        case '*':
           return res = num1 * num2;
            break;
        case '/':
           return res = num1 / num2;
            break;
        default:
            visor[1].innerHTML = 'OPERADOR INVALIDO'
            break;
    }
}

a.forEach((el)=>{
    el.addEventListener('click', (e)=>{
        switch(el.dataset.value){
            case '+':
                visor[1].innerHTML = '+';
                trocar();
                break;
            case '-':
                visor[1].innerHTML = '-';
                trocar();
                break;
             case '*':
                visor[1].innerHTML = '*';
                trocar();
                break;
             case '/':
                visor[1].innerHTML = '/';
                trocar();
                break;
            case '=':
                visor[0].innerHTML = operacao(visor[1].innerHTML);
                if (visor[2].innerHTML.length <=   0){
                    trocar();
                }
                break;
            case 'apg':
                apg();
                break;
            case NaN:
                alert('NaN');
            default:
                visor[2].innerHTML = visor[2].innerHTML += el.dataset.value;
        }
        switch(el.dataset.func){
            case 'c':
                limpar();
                break;
        }
    })
})
