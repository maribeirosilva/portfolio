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
