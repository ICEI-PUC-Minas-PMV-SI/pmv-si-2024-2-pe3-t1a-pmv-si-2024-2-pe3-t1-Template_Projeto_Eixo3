# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE


## 3.1 Objetivos deste documento
Descrever e especificar as necessidades da aplicação WEB Baobá que devem ser atendidas pelo projeto de Design Centrado no usuário no Eixo 3 de Sistemas de Informação em 2024.2.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado Baobá. Ele terá somente um componente ???? com os devidos elementos necessários à gestão de cursos.

### 3.2.2 Missão do produto
A missão Baobá é fornecer uma plataforma centralizada com informações científicas rigorosas e acessíveis sobre o meio ambiente, promovendo a conscientização e a educação contínua sobre os impactos das atividades humanas na biodiversidade. Através de uma interface interativa, o projeto busca engajar diferentes públicos — desde a população geral até estudantes e empresas — na preservação ambiental, facilitando o acesso a dados confiáveis e incentivando ações sustentáveis que contribuam para a conservação da biosfera e para um futuro menos impactado por ações humanas na natureza.

### 3.2.3 Limites do produto
TBD

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1	| Facilidade no cadastro de dados |	Essencial |
|2 | Facilidade na recuperação de informações | Essencial | 
|3 | Segurança no cadastro de matrículas | Essencial | 
|4	| Melhoria na comunicação com os alunos	| Recomendável | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais


| Código | Requisito Funcional (Funcionalidade)                     | Descrição                                                                                                   |
|--------|----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| RF1    | Gerenciar Informações de Espécies Ameaçadas               | O sistema deve permitir a consulta, inclusão, alteração e exclusão de dados sobre espécies ameaçadas.        |
| RF2    | Gerenciar Dados de Biomas                                 | O sistema deve permitir o gerenciamento de dados sobre diferentes biomas e suas espécies.                    |
| RF3    | Consultar Impacto das Atividades Econômicas               | O sistema deve fornecer dados e relatórios sobre o impacto das atividades econômicas nas espécies e biomas.  |
| RF4    | Mapear Queimadas e Desastres Naturais                     | O sistema deve exibir um mapa interativo com a localização de queimadas e desastres naturais relevantes no território brasileiro.      |
| RF5    | Reportar Atividade de Vida Silvestre                      | Os usuários devem poder reportar atividades ilegais ou de risco envolvendo vida silvestre diretamente nos pontos de interesse do mapa. |
| RF6    | Gerenciar Usuários                                        | O sistema deve permitir a consulta, inclusão, alteração e exclusão, com diferentes níveis de permissão.         |
| RF7    | Gerar Relatórios Ambientais                               | O sistema deve gerar relatórios sobre a biodiversidade e espécies ameaçadas para diferentes públicos (estudantes, empresas). |
| RF8   | Mostrar Dados Estatísticos e Gráficos Interativos         | O sistema deve exibir gráficos interativos com dados sobre a degradação dos biomas e a situação das espécies. |
| RF9    | Fornecer Informações Educativas                           | O sistema deve fornecer conteúdos educativos interativos sobre a preservação ambiental e a importância da biodiversidade. |
| RF10    | Acompanhar Indicadores de Sustentabilidade                | O sistema deve exibir indicadores sobre a sustentabilidade dos biomas e espécies.                            |
| RF11   | Integrar com Ferramentas de Ecoturismo                    | O sistema deve oferecer informações sobre ecoturismo, destacando áreas preservadas e oportunidades de visitação. |
| RF12   | Gerenciar Fórum de Discussões                             | O sistema deve incluir um fórum para discussões entre usuários sobre questões ambientais e soluções sustentáveis. |
| RF13   | Disponibilizar página para parcerias com Empresas            | O sistema deve permitir que empresas interessadas em projetos sustentáveis possam se conectar com o projeto Baobá. |
| RF14   | Oferecer Recursos de Educação para Estudantes             | O sistema deve disponibilizar módulos educacionais e materiais didáticos para estudantes sobre biodiversidade e sustentabilidade. |
| RF15   | Monitorar e Exibir Tendências de Queimadas                | O sistema deve monitorar e exibir tendências de queimadas e desmatamento com base em dados em tempo real.     |


### 3.3.2 Requisitos Não Funcionais


| Código | Requisito Não Funcional (Restrição)                                                   |
|--------|---------------------------------------------------------------------------------------|
| RNF1   | O sistema web do Baobá precisa ser responsivo e funcionar em dispositivos móveis e desktops.  |
| RNF2   | O sistema web deve estar integrado a uma API que contenha uma base de dados robusta e escalável. |
| RNF3   | O sistema web deve garantir a segurança das informações, com criptografia de dados sensíveis. |
| RNF4   | O sistema web deve restringir o acesso por meio de senhas individuais para usuários autenticados. |
| RNF5   | O sistema web deve diferenciar o acesso entre usuários pessoa física e pessoa jurídica, com diferentes permissões de uso. |
| RNF6   | O sistema web deve ser capaz de lidar com alto volume de tráfego, garantindo desempenho em picos de acesso. |
| RNF7   | O tempo de resposta para carregamento das páginas deve ser de no máximo 2 segundos em condições normais de rede. |
| RNF8   | O sistema web deve seguir as normas da LGPD (Lei Geral de Proteção de Dados) para proteger dados pessoais. |
| RNF9  | A arquitetura do sistema deve ser modular para permitir a fácil adição de novas funcionalidades no futuro. |
| RNF10  | O sistema web deve ser compatível com navegadores populares (Chrome, Firefox, Safari, Edge). |
| RNF11  | A interface de usuário deve ser acessível, seguindo padrões de acessibilidade web (WCAG 2.1). |
| ... |	... |	... |

### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Administrador |	Usuário responsável pela administração geral do sistema, com acesso completo a todos os módulos e funcionalidades. Ele pode gerenciar usuários, relatórios, e dados relacionados às espécies e biomas. |
| Moderador do Fórum |	Usuário responsável por gerenciar o fórum de discussões, moderar interações entre os participantes e garantir que as diretrizes sejam seguidas. |
| Estudante |	Usuário que pode consultar dados e relatórios, acessar materiais educativos, e interagir no fórum de discussões. Esse ator não tem permissão para modificar dados no sistema. |
| Empresa/Parceiro | Usuário corporativo que pode consultar relatórios, acessar áreas específicas para empresas interessadas em projetos de sustentabilidade, e visualizar dados sobre o impacto das atividades econômicas. |
| Visitante | Usuário sem autenticação, com acesso limitado a informações públicas sobre espécies ameaçadas, biomas e ecoturismo, mas sem permissão para interagir ou modificar dados no sistema. |
| ... |	... |	... |

Esses usuários representam diferentes níveis de acesso e papéis no sistema, permitindo uma gestão eficiente de dados e um engajamento diversificado com o público.

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![image](https://github.com/user-attachments/assets/57e7fe8c-73c8-47d5-9aa6-2f0ab1f424ae)
 
### 3.4.2 Descrições de Casos de Uso

#### Gerenciar Fórum (CSU01)

**Sumário**: O Administrador realiza a gestão completa do sistema, incluindo a criação e controle dos fóruns e seus usuários.

**Ator Primário**: Administrador.

**Ator Secundário**: Nenhum.

**Pré-condições**: O Administrador deve estar autenticado no sistema.

**Fluxo Principal**:

1) O Administrador acessa o sistema.
2) O sistema apresenta as operações de gerenciamento do fórum e dos usuários.
3) O Administrador escolhe a operação desejada: criação de fórum, modificação, exclusão ou gerenciamento de usuários.
4) O Administrador realiza as operações escolhidas.
5) O sistema confirma as alterações feitas e apresenta o estado atualizado.

**Pós-condições**: O fórum e os usuários foram gerenciados conforme as operações realizadas.

---

#### Moderar Fórum (CSU02)

**Sumário**: O Moderador do Fórum gerencia e modera as interações entre os participantes, garantindo que as normas sejam seguidas.

**Ator Primário**: Moderador do Fórum.

**Ator Secundário**: Estudante, Empresa/Parceiro, Visitante.

**Pré-condições**: O Moderador deve estar autenticado e ter permissões de moderação.

**Fluxo Principal**:

1) O Moderador acessa o sistema de moderação.
2) O sistema apresenta as interações recentes dos participantes no fórum.
3) O Moderador escolhe interações para moderar: exclusão de mensagens, advertências a usuários, ou bloqueio de contas.
4) O sistema aplica as ações e atualiza a situação do fórum.

**Pós-condições**: As interações do fórum foram moderadas e os usuários notificados.

---

#### Interagir no Fórum (CSU03)

**Sumário**: O Estudante participa do fórum, interagindo com outros usuários e publicando suas próprias contribuições.

**Ator Primário**: Estudante.

**Ator Secundário**: Moderador do Fórum, Administrador.

**Pré-condições**: O Estudante deve estar autenticado no sistema.

**Fluxo Principal**:

1) O Estudante acessa o fórum.
2) O sistema exibe os tópicos de discussão disponíveis.
3) O Estudante seleciona um tópico e participa através de respostas ou novos posts.
4) O sistema registra a interação e atualiza o tópico.

**Pós-condições**: A interação do Estudante foi registrada no fórum.

---

#### Visualizar Relatórios e Impactos (CSU04)

**Sumário**: Empresas ou Parceiros têm acesso a dados e relatórios sobre os impactos das atividades econômicas discutidas no fórum.

**Ator Primário**: Empresa/Parceiro.

**Ator Secundário**: Moderador do Fórum, Administrador.

**Pré-condições**: O usuário deve estar autenticado e ter permissões adequadas para visualizar relatórios.

**Fluxo Principal**:

1) A Empresa/Parceiro acessa a área de relatórios.
2) O sistema apresenta as opções de relatórios disponíveis.
3) A Empresa/Parceiro seleciona o relatório desejado.
4) O sistema gera o relatório e o exibe.

**Pós-condições**: O relatório foi exibido para a Empresa/Parceiro.

---

#### Acesso a Informações Públicas (CSU05)

**Sumário**: Visitantes têm acesso a informações públicas no fórum, podendo visualizar tópicos e dados sem interagir diretamente.

**Ator Primário**: Visitante.

**Ator Secundário**: Administrador.

**Pré-condições**: Nenhuma autenticação é necessária.

**Fluxo Principal**:

1) O Visitante acessa o fórum.
2) O sistema exibe os tópicos públicos disponíveis para visualização.
3) O Visitante navega pelos tópicos e visualiza o conteúdo.

**Pós-condições**: O Visitante visualizou informações públicas no fórum.

### 3.4.3 Diagrama de Classes 
![Flowchart](https://github.com/user-attachments/assets/075a6b3c-75cb-4477-8df7-9de8e3b53a9d)

### 3.4.4 Descrições das Classes 

| #  | Nome          | Descrição                                                                  |
|----|---------------|----------------------------------------------------------------------------|
| 1  | Cliente       | Cadastro de informações gerais dos clientes, como nome, contato e endereço |
| 2  | Produto       | Cadastro de produtos disponíveis, incluindo nome, descrição e preço        |
| 3  | Pedido        | Registro de pedidos feitos pelos clientes, contendo informações de data e status |
| 4  | ItemPedido    | Detalhamento dos itens que compõem um pedido, incluindo quantidade e valor |
| 5  | Pagamento     | Cadastro de pagamentos realizados pelos clientes, vinculados aos pedidos|
| 6  | Categoria     | Classificação dos produtos, permitindo organização por tipos ou grupos     |
| 7  | Fornecedor    | Cadastro de fornecedores que oferecem os produtos, com informações de contato |
| 8  | Estoque       | Controle do estoque de produtos, incluindo quantidade disponível e local de armazenamento |
| 9  | Funcionario   | Cadastro de funcionários que operam o sistema, com dados de login e perfil |
| 10 | Endereco      | Cadastro de endereços associados aos clientes e fornecedores, incluindo cidade e estado |

