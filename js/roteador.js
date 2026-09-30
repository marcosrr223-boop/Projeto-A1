import { renderizarProjetos } from './projetos.js';
import { restaurarRascunhoCadastro } from './armazenamento.js';

// Roteador da Single Page Application (SPA)
// Cada chave do objeto "paginas" corresponde a uma rota (o texto depois de "#/")

const paginas = {
  inicio: `

        <section>
            <h2>Resumo da ONG </h2>
            <article>
                <h3>Nossa História</h3>
                <p>Fundado em 2015 por professoras e voluntários do Jardim das Palmeiras, o Instituto Raízes do Amanhã nasceu do desejo de oferecer educação, alimentação e oportunidades a famílias em vulnerabilidade social.</p>
            </article>

            <article>
                <h3>Nosso objetivo</h3>
                <p>Promover educação, segurança alimentar e geração de renda para famílias vulneráveis, construindo um futuro mais justo através de ações comunitárias sustentáveis.</p>
            </article>
        </section>

    `,
  cadastro: `
        <section>
            <div class="alert alert-sucesso">
                <strong>Sucesso!</strong> Seu cadastro foi enviado.
            </div>
            <form id="form-cadastro" novalidate>
                <fieldset>
                    <legend>Informações pessoais</legend>

                    <label for="nome"> Nome Completo:</label>
                    <input type="text" id="nome" name="nome" required>
                    <span class="mensagem-erro" id="erro-nome"></span>

                    <label for="Data_N"> Data de Nascimento:</label>
                    <input type="date" id="Data_N" name="Data_N" required>
                    <span class="mensagem-erro" id="erro-Data_N"></span>

                    <label for="idade"> Idade:</label>
                    <input type="number" id="idade" name="idade" min="18" max="100" required>
                    <span class="mensagem-erro" id="erro-idade"></span>

                    <label for="CPF"> CPF:</label>
                    <input type="text" id="CPF" name="CPF" pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}" 
                    placeholder="000.000.000-00" title="Formato: 000.000.000-00"
                    required>
                    <span class="mensagem-erro" id="erro-CPF"></span>

                </fieldset>

                <fieldset>
                    <legend>Informações de Contato</legend>

                    <label for="email"> Email de Titular:</label>
                    <input type="email" id="email" name="email" required>
                    <span class="mensagem-erro" id="erro-email"></span>

                    <label for="telefone"> Telefone de Contato:</label>
                    <input type="tel" id="telefone" name="telefone" 
                    pattern="[0-9]{2}\\-[0-9]{5}\\-[0-9]{4}" 
                    placeholder="00-00000-0000" title="Formato: 00-00000-0000"
                    required>
                    <span class="mensagem-erro" id="erro-telefone"></span>
                    
                    <label for="CEP"> CEP:</label>
                    <input type="text" id="CEP" name="CEP" 
                    pattern="[0-9]{5}-[0-9]{3}" 
                    placeholder="00000-000" title="Formato: 00000-000"
                    required>
                    <span class="mensagem-erro" id="erro-CEP"></span>

                </fieldset>
                <button type="submit">Enviar</button>
            </form>
            <div class="toast">Cadastro enviado com sucesso.</div>
        </section>

    `,
  projetos: `
        <section>
            <h2>Nossos projetos</h2>
            <div id="lista-projetos"></div>

        <hr>    
        </section>
        <section>
            <h2>Campanhas de Doação</h2>
            <span class="badge badge-doacao">Doação</span>
            <article>
                <h3>1. Doação recorrente ("Seja um Guardião")</h3>
                <ul>
                    <li>1. Doação recorrente ("Seja um Guardião")</li>
                    <li>Benefício simbólico: relatório trimestral de impacto enviado por e-mail.</li>
                </ul>
               
                <h3>2. Doação única</h3>
                <ul>
                    <li>Via Pix, cartão de crédito ou boleto.</li>
                    <li>Chave Pix (fictícia): doe@raizesdoamanha.org.br</li>
                    <li><a href="#" data-abrir-modal="modal-comprovante">Ver exemplo de comprovante</a></li>
                </ul>

            </article>
        </section>
        <div class="modal-overlay" id="modal-comprovante">
          <div class="modal-caixa">
            <h3>Comprovante de doação</h3>
            <p>Obrigado pela sua contribuição! Este é um exemplo de comprovante gerado após uma doação.</p>
            <a href="#" data-fechar-modal>Fechar</a>
          </div>
        </div>
    `
};

const titulos = {
  inicio: 'Pagina inicial',
  cadastro: 'Cadastro',
  projetos: 'Como nos ajudar'
};

export function renderizar() {
  const rotaAtual = window.location.hash.replace('#/', '') || 'inicio';
  const conteudo = paginas[rotaAtual] || paginas.inicio;

  const app = document.getElementById('app');
  app.innerHTML = conteudo;
  document.title = titulos[rotaAtual] || titulos.inicio;

  if (rotaAtual === 'projetos') {
    renderizarProjetos();
  } else if (rotaAtual === 'cadastro') {
    restaurarRascunhoCadastro();
  }
}

