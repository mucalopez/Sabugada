const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
 const atual = docuemnt.querySelector('.ativo');
 const proximoPasso = 'passo-' + this.getAttribute('data-prxoimo');

 atual.classList.remove('.ativo');
 document.getElementById(proximoPasso).classList.add('ativo');
    })
})