


 const opcao = document.querySelector(".opcao")

 function perguntarSalto() { 

   opcao.innerHTML = `<label for="numero"> Qual o número do salto? </label> <br>
   <input type="number" id="chave" name='shift' value="0" min="0" max="26"> <br>
    <div> 
    <input class = "botao" type="radio" id= "codificar" name = "codificar-ou-decodificar" value = "codificar" 
   onclick ="codificarOuDecodificar()"> 
   <label for="codificar">Codificar</label>
   <br>
   <input class = "botao" type="radio" id= "decodificar" name = "codificar-ou-decodificar" value = "decodificar" 
   onclick ="codificarOuDecodificar()">
   <label for="decodificar">Decodificar</label> 
   </div>
   <div class ="opcao2"</div>`
   
  
};

function codificarOuDecodificar() { 

     // 1- se o botão Codificar for selecionado, aparecer botão que exibe Codificar mensagem! 
    //  2 - com o decodificar selecionado exibe Decodificar Mensagem! 
     
    var seletor = document.querySelectorAll(".botao")
    var opcao2 = document.querySelector(".opcao2")
    
      if (seletor[0].checked) { 
        opcao2.innerHTML = `<input class = "botao" type="submit" id= "codificar" value = "Codificar Mensagem!" 
        onclick ="codTxt()">`
        
        
      }
    else { 
      opcao2.innerHTML = `<input class = "botao" type="submit" id= "decodificar" value = "Decodificar Mensagem!" 
      onclick ="decodTxt()">`
    }

};    
  
 var form = document.forms[0];
 
  
  form.addEventListener ('submit', event => {
    event.preventDefault();
 });

function codTxt () { 
  
var primeirosbotoes = document.querySelectorAll(".escolha")
var retorno = document.querySelector(".retorno")
var valorChave = parseInt(chave.value)



 if(primeirosbotoes[0].checked) {
                       
  retorno.innerHTML = `<label>Sua mensagem é:</label><br><textarea>${codificaCesar(form.plaintext.value.split(""),valorChave)}</textarea>`

 }
else { 


  retorno.innerHTML = `<label>Sua mensagem é:</label><br><textarea>${btoa(form.plaintext.value)}</textarea>`
  
  


}
 }


 function decodTxt() { 

var primeirosbotoes = document.querySelectorAll(".escolha")
var retorno = document.querySelector(".retorno")
var valorChave = parseInt(chave.value)




 if(primeirosbotoes[0].checked) {
                       
  retorno.innerHTML = `<label>Sua mensagem é:</label><br><textarea>${decodificaCesar(form.plaintext.value.split(""),valorChave)}</textarea>`

 }
else { 


  retorno.innerHTML = `<label>Sua mensagem é:</label><br><textarea>${atob(form.plaintext.value)}</textarea>`





 }
}



function codificaCesar(str,chave) { 
  
  
  var arrNovo = [];
  for (var i=0; i< str.length; i++) { 
    let code = str[i].charCodeAt()
    if( code >= 65 && code <= 90) { 
      arrNovo.push(String.fromCharCode(((code - 65 + chave)%26)+65))
    }else if(code >= 97 && code <= 122) { 
      arrNovo.push(String.fromCharCode(((code - 97 + chave)% 26)+97))
    }else{ 
      str[i]
    }
  }
 return arrNovo.join ('')
}   


function decodificaCesar(str,chave) { 
  
  
  var arrNovo = [];
  for (var i=0; i< str.length; i++) { 
    let code = str[i].charCodeAt()

     if( code >= 65 && code <= 90) { 
      arrNovo.push(String.fromCharCode(((code - 90 - chave)%26)+90))
    }else if(code >= 97 && code <= 122) { 
      arrNovo.push(String.fromCharCode(((code - 122 - chave)% 26)+122))
    
    }else{ 
      str[i]
    }
  }
 return arrNovo.join ('')
}   
