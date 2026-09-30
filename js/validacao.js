// ---- Sistema de validacao dos campos do formulario ----

export const regrasValidacao = {
  CPF: { regex: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, mensagem: 'CPF deve seguir o formato 000.000.000-00' },
  telefone: { regex: /^\d{2}-\d{5}-\d{4}$/, mensagem: 'Telefone deve seguir o formato 00-00000-0000' },
  CEP: { regex: /^\d{5}-\d{3}$/, mensagem: 'CEP deve seguir o formato 00000-000' }
};

export function validarCampo(campo) {
  if (!campo.name) {
    return true;
  }

  const regra = regrasValidacao[campo.name];
  let valido;
  let mensagem = '';

  if (regra) {
    valido = campo.value !== '' && regra.regex.test(campo.value);
    mensagem = valido ? '' : (campo.value === '' ? 'Este campo e obrigatorio.' : regra.mensagem);
  } else {
    valido = campo.checkValidity();
    mensagem = valido ? '' : campo.validationMessage;
  }

  campo.classList.toggle('campo-invalido', !valido);
  campo.setAttribute('aria-invalid', String(!valido));

  const spanErro = document.getElementById('erro-' + campo.name);
  if (spanErro) {
    spanErro.textContent = mensagem;
  }

  return valido;
}

