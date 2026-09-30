// ---- Sistema de templates: gera os cards de projeto a partir de dados ----

const projetos = [
  {
    titulo: 'Projeto 1 — Educação Complementar "Ler é Voar"',
    badge: 'Educação',
    classeBadge: 'badge-educacao',
    descricao: 'Reforço escolar, contação de histórias e oficinas de leitura para crianças de 6 a 12 anos, no contraturno escolar.',
    publico: '80 crianças atendidas por semestre.',
    local: 'Sede do Instituto — Bairro Jardim das Palmeiras.',
    frequencia: 'Segunda a sexta, das 13h às 17h.',
    funcoes: 'contador(a) de histórias, auxiliar de reforço escolar, monitor(a) de oficinas.',
    requisitos: 'maior de 18 anos, disponibilidade mínima de 4h semanais, participar de treinamento inicial (2h).',
    processo: 'preencher formulário de interesse → entrevista rápida → treinamento → início das atividades.'
  },
  {
    titulo: 'Projeto 2 — Horta Comunitária "Sementes do Bairro"',
    badge: 'Meio Ambiente',
    classeBadge: 'badge-ambiental',
    descricao: 'Cultivo agroecológico comunitário, com produção de hortaliças distribuídas às famílias cadastradas e oficinas de educação ambiental.',
    publico: '40 famílias parceiras + escolas da região.',
    local: 'Terreno cedido pela Prefeitura — Rua das Acácias, 245.',
    frequencia: 'Sábados, das 8h às 12h.',
    funcoes: 'manejo de plantio, mutirões de limpeza, educador(a) ambiental para oficinas com escolas.',
    requisitos: 'não é necessário experiência prévia; equipamento (luvas, chapéu) fornecido pela ONG.',
    processo: null
  }
];

function criarCardProjeto(projeto) {
  const linhaProcesso = projeto.processo
    ? `<li><strong>Processo:</strong> ${projeto.processo}</li>`
    : '';

  return `
    <article>
      <h3>${projeto.titulo}</h3>
      <span class="badge ${projeto.classeBadge}">${projeto.badge}</span>
      <ul>
        <li><strong>Descrição:</strong> ${projeto.descricao}</li>
        <li><strong>Público-alvo:</strong> ${projeto.publico}</li>
        <li><strong>Local:</strong> ${projeto.local}</li>
        <li><strong>Frequência:</strong> ${projeto.frequencia}</li>
      </ul>
      <h4>Como ser voluntário(a):</h4>
      <ul>
        <li><strong>Funções:</strong> ${projeto.funcoes}</li>
        <li><strong>Requisitos:</strong> ${projeto.requisitos}</li>
        ${linhaProcesso}
      </ul>
    </article>
  `;
}

const htmlProjetos = projetos.map(criarCardProjeto).join('');

export function renderizarProjetos() {
  const container = document.getElementById('lista-projetos');
  if (container) {
    container.innerHTML = htmlProjetos;
  }
}

