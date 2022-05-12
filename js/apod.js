$(document).ready(function (){
    $("#enviar").click(function(e){
        e.preventDefault();
        const data = document.getElementById("data")
        document.getElementById('explicacaoAstro').style.display = 'inline';
        document.getElementById('box').style.display = 'none';
        document.getElementById('h1').style.display = 'none';
        while (data.value == ""){
            alert("Por favor informe uma data válida!")
            data++ 

        } 
       apiNasa();
    });
    
    async function apiNasa () {
    let dataInput = $('#data').val();
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=V4n5887oanZY2NL5JyoEmkhBHHJYmbAhzIJ0TEgJ&date=${dataInput}`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    
    document.querySelector('#titulo').innerHTML = data.title;
    document.querySelector('#explicacao').innerHTML = data.explanation;
    
    
    if (data.media_type == "image") {
        document.querySelector('#imagemcosmos').innerHTML = `<br><img width="600px" height="400px" src="${data.url}">`;
    } else if (data.media_type == "video") {
            document.querySelector('#imagemcosmos').innerHTML = `<br><iframe width="600px" height="400px" src="${data.url}">`;
    }
    }
    })
    
    
