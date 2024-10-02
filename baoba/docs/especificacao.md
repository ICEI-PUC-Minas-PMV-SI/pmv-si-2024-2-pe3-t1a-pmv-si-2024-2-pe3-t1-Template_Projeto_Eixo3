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
| ... |	... |	... |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](https://github.com/user-attachments/assets/41f6b731-b44e-43aa-911f-423ad6198f47)
 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

#### Gerenciar Professor (CSU01)

Sumário: A Secretária realiza a gestão (inclusão, remoção, alteração e consulta) dos dados sobre professores.

Ator Primário: Secretária.

Ator Secundário: Coordenador.

Pré-condições: A Secretária deve ser validada pelo Sistema.

Fluxo Principal:

1) 	A Secretária requisita manutenção de professores.
2) 	O Sistema apresenta as operações que podem ser realizadas: inclusão de um novo professor, alteração de um professor, a exclusão de um professor e a consulta de dados de um professor.
3) 	A Secretária seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.
4) 	Se a Secretária desejar continuar com a gestão de professores, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Inclusão

a)	A Secretária requisita a inclusão de um professor. <br>
b)	O Sistema apresenta uma janela solicitando o CPF do professor a ser cadastrado. <br>
c)	A Secretária fornece o dado solicitado. <br>
d)	O Sistema verifica se o professor já está cadastrado. Se sim, o Sistema reporta o fato e volta ao início; caso contrário, apresenta um formulário em branco para que os detalhes do professor (Código, Nome, Endereço, CEP, Estado, Cidade, Bairro, Telefone, Identidade, Sexo, Fax, CPF, Data do Cadastro e Observação) sejam incluídos. <br>
e)	A Secretária fornece os detalhes do novo professor. <br>
f)	O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo professor e a grade listando os professores cadastrados é atualizada; caso contrário, o Sistema reporta o fato, solicita novos dados e repete a verificação. <br>

Fluxo Alternativo (3): Remoção

a)	A Secretária seleciona um professor e requisita ao Sistema que o remova. <br>
b)	Se o professor pode ser removido, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato. <br>

Fluxo Alternativo (3): Alteração

a)	A Secretária altera um ou mais dos detalhes do professor e requisita sua atualização. <br>
b)	O Sistema verifica a validade dos dados e, se eles forem válidos, altera os dados na lista de professores, caso contrário, o erro é reportado. <br>
 
Fluxo Alternativo (3): Consulta

a)	A Secretária opta por pesquisar pelo nome ou código e solicita a consulta sobre a lista de professores. <br>
b)	O Sistema apresenta uma lista professores. <br>
c)	A Secretária seleciona o professor. <br>
d)	O Sistema apresenta os detalhes do professor no formulário de professores. <br>

Pós-condições: Um professor foi inserido ou removido, seus dados foram alterados ou apresentados na tela.

### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![dcu](https://github.com/user-attachments/assets/97ab1aa8-eb03-4b58-9ad5-1697d414a451)

### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1	|	Aluno |	Cadastro de informações relativas aos alunos. |
| 2	| Curso |	Cadastro geral de cursos de aperfeiçoamento. |
| 3 |	Matrícula |	Cadastro de Matrículas de alunos nos cursos. |
| 4 |	Turma |	Cadastro de turmas.
| 5	|	Professor |	Cadastro geral de professores que ministram as disciplinas. |
| ... |	... |	... |
