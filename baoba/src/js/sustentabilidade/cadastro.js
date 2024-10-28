document.getElementById('botaoCadastrar').addEventListener('click', function(event) {
    
    event.preventDefault();

    document.getElementById('modalConfirmacao').style.display = 'block';
});


document.getElementById('btnPerfil').addEventListener('click', function() {
    
    window.location.href = 'urlDaPaginaDoPerfil'; 
});