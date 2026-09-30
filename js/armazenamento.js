// ---- Persistencia do rascunho do cadastro (localStorage) ----

export function salvarRascunhoCadastro(form) {
  const campos = form.querySelectorAll('input');
  const dados = {};

  campos.forEach(function (campo) {
    dados[campo.name] = campo.value;
  });

  localStorage.setItem('rascunhoCadastro', JSON.stringify(dados));
}

export function restaurarRascunhoCadastro() {
  const form = document.getElementById('form-cadastro');
  if (!form) {
    return;
  }

  const rascunhoSalvo = localStorage.getItem('rascunhoCadastro');
  if (!rascunhoSalvo) {
    return;
  }

  const dados = JSON.parse(rascunhoSalvo);
  const campos = form.querySelectorAll('input');

  campos.forEach(function (campo) {
    if (dados[campo.name] !== undefined) {
      campo.value = dados[campo.name];
    }
  });
}

export function limparRascunhoCadastro() {
  localStorage.removeItem('rascunhoCadastro');
}

