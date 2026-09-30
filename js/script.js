// Ponto de entrada da aplicacao: importa os modulos e conecta os eventos

import { renderizar } from './roteador.js';
import { validarCampo } from './validacao.js';
import { salvarRascunhoCadastro, limparRascunhoCadastro } from './armazenamento.js';
import { calcularIdadeComDayjs } from './idade.js';

window.addEventListener('hashchange', renderizar);
window.addEventListener('DOMContentLoaded', renderizar);

// Envio do formulario de cadastro (delegado, pois o form e recriado a cada renderizacao)
document.addEventListener('submit', function (evento) {
  if (evento.target.id !== 'form-cadastro') {
    return;
  }

  evento.preventDefault();
  const form = evento.target;
  const campos = form.querySelectorAll('input');
  let formularioValido = true;

  campos.forEach(function (campo) {
    const campoValido = validarCampo(campo);
    if (!campoValido) {
      formularioValido = false;
    }
  });

  if (formularioValido) {
    const alertaSucesso = document.querySelector('.alert-sucesso');
    const toast = document.querySelector('.toast');
    if (alertaSucesso) alertaSucesso.classList.add('mostrar');
    if (toast) toast.classList.add('mostrar');
    form.reset();
    limparRascunhoCadastro();

    campos.forEach(function (campo) {
      campo.classList.remove('campo-invalido');
      const spanErro = document.getElementById('erro-' + campo.name);
      if (spanErro) spanErro.textContent = '';
    });
  }
});

// Feedback em tempo real nos campos do formulario (delegado, pois o form e recriado)
document.addEventListener('input', function (evento) {
  const campo = evento.target;
  if (!campo.form || campo.form.id !== 'form-cadastro') {
    return;
  }

  if (campo.name === 'Data_N') {
    calcularIdadeComDayjs(campo);
  }

  validarCampo(campo);
  salvarRascunhoCadastro(campo.form);
});

// Abrir/fechar o modal (tambem delegado, pelo mesmo motivo)
document.addEventListener('click', function (evento) {
  const linkAbrir = evento.target.closest('[data-abrir-modal]');
  if (linkAbrir) {
    evento.preventDefault();
    const modal = document.getElementById(linkAbrir.dataset.abrirModal);
    if (modal) modal.classList.add('aberto');
    return;
  }

  const linkFechar = evento.target.closest('[data-fechar-modal]');
  if (linkFechar) {
    evento.preventDefault();
    const modal = linkFechar.closest('.modal-overlay');
    if (modal) modal.classList.remove('aberto');
  }
});
