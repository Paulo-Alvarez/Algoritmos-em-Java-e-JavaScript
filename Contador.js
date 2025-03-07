function contarValoresEntre(primeiro, N, dados) {
  let contador = 0;


  for (let i = 0; i < dados.length; i++) {
      if (dados[i] >= primeiro && dados[i] <= N) {
          contador++;
      }
  }}