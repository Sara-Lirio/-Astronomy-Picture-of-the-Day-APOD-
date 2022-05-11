function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 45 * i)

  });
}
const titulo = document.querySelector('.animacao');
typeWrite(titulo);

setTimeout(function(){
    $(".lancar").css("display","inline");
},12600);

$(".lancar").click(function(){
    $(".section-page1").css("display","none");
    $(".lancar").css("display","none");
    $(".imagem-lancar").css("display","inline");
    $(".lancar").css("margin-left","400px");
    $(".lancamento").css("margin-top","0em");
    setTimeout(function Redirecionar(){ 
        $(location).attr('href', './page2.html'); 
    }, 1350);
})



