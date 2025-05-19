let itens = document.querySelector("menu");

function mudouTamanho() {
                    if (window.innerWidth >=1000 ) {
                        itens.style.display = 'block'
                } else {
                    itens.style.display = 'none'
                }
            }
        
        function clickMenu() {
            if (itens.style.display == 'block') {
                itens.style.display = 'none'
            } else {
                itens.style.display = 'block'
            }
        }

var especialidadeCaixas = document.querySelectorAll('.especialidade-caixa');

especialidadeCaixas.forEach(caixa => {
  const texto = caixa.querySelector('.especialidade-texto');
  
  caixa.addEventListener('mouseenter', () => {
    texto.style.display = 'block';
  });

  caixa.addEventListener('mouseleave', () => {
    texto.style.display = 'none';
  });
});
