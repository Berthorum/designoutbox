function carregar(){
    Swal.fire({
        title: 'Carregando...',
        html: 'Essa mensagem irá desaparecer em segundos.',
        timer: 3000
    })
}

function carregarTituloProdutos(){
    var qtdProdutos = document.getElementsByClassName('card')
    var produtosTitulo = document.getElementById('prod')

    produtosTitulo.innerHTML = `Todos os Produtos (${qtdProdutos.length})`
    return qtdProdutos
}


function produtosLanc(){
    var cont = 0
    var produtosTitulo = document.getElementById('prod')
    var produtos = carregarTituloProdutos()
    for(i = produtos.length - 1; i >= 0; i-=2){
        produtos[i].style.opacity = "0.2"
        cont++
    }

   produtosTitulo.innerHTML =`Últimos Lançamentos (${produtos.length - cont})`
}

function produtosAll(){
    var qtdProdutos = carregarTituloProdutos()
    var produtosTitulo = document.getElementById('prod')

    for(i = qtdProdutos.length - 1; i >= 0 ; i--)
       qtdProdutos[i].style.opacity = "1"
       
    produtosTitulo.innerHTML =`Todos os Produtos (${qtdProdutos.length})`

}


function comprar(){
   var qtd =  prompt("Digite a quantidade que deseja comprar:")
   var cont = 0;

   if(qtd == ''){
        cont = -1
   }
  
   for(i = 0; i < qtd.length; i++){
       if(qtd[i] != '0'  && qtd[i] != '1' && qtd[i] != '2' && qtd[i] != '3' 
            && qtd[i] != '4' && qtd[i] != '5' && qtd[i] != '6' && qtd[i] != '7' 
            && qtd[i] != '8' && qtd[i] != '9'){

           cont = 1;
       }
   }

   if(cont == 0){
       qtd = parseInt(qtd)
        if (qtd != 0  && qtd != 1 && qtd > 0){
            Swal.fire(
                "Obrigado!",
                qtd + " Produtos adicionados ao carrinho",
                'success'
            )
    
        }else if (qtd == 1){
            Swal.fire(
                "Obrigado!",
                qtd + " Produto adicionado ao carrinho",
                'success'
            )
        }else{
            Swal.fire(
                'Algo errado aconteceu :(',
                'Por favor, tente novamente.',
                'error'
            )
        }
        
   }else if(cont == -1 || cont == 1){
    Swal.fire(
        'Algo errado aconteceu :(',
        'Por favor, tente novamente.',
        'error'
    )
   }
   
}

function mouseOverSobre(x){
    x.style.backgroundColor = "#0074fa"
}

function mouseOutSobre(x){
    x.style.backgroundColor = "#A239CA"
}

function formMod(){
    var elems = document.getElementsByTagName('label')
    for(i = 1; i < elems.length; i++){
        elems[i].style.opacity = "0.2"
    }
}

function formBack(){
    var elems = document.getElementsByTagName('label')
    for(i = 0; i < elems.length; i++){
        elems[i].style.opacity = "1"
    }
}

function upText(){
    var letra = document.getElementById('mensagem')
    letra.value = letra.value.toUpperCase()
}

function submitForm(form){
    var confirma = confirm("Deseja confirmar as Informações?")
    if(confirma == true){
        alert("Obrigado por ter visitado a nossa Loja!!!")
        form.submit()
    }else
        return false;
        
}

function destaqueEmail(){
    var email = document.getElementById('email')
    email.value = email.value.toLowerCase()
}
