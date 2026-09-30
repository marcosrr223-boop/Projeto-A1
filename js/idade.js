import { validarCampo } from './validacao.js';

// ---- Calculo de idade com a biblioteca Day.js (via CDN) ----

export function calcularIdadeComDayjs(campoData) {
  if (!campoData.value) {
    return;
  }

  const nascimento = dayjs(campoData.value);
  if (!nascimento.isValid()) {
    return;
  }

  const idadeCalculada = dayjs().diff(nascimento, 'year');
  const campoIdade = campoData.form.querySelector('#idade');

  if (campoIdade && idadeCalculada >= 0) {
    campoIdade.value = idadeCalculada;
    validarCampo(campoIdade);
  }
}

