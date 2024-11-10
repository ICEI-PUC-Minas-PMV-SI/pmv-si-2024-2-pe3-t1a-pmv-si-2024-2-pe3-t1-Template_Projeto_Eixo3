![image](https://github.com/user-attachments/assets/ab969400-26ac-4077-8881-545599c692cb)# 4. PROJETO DO DESIGN DE INTERAÇÃO

## 4.1 Personas e respectivos mapas de empatia

## Arthor, O Biólogo
![arthor img persona](https://github.com/user-attachments/assets/d83e3573-997d-4f77-9ee1-acb997bcc313)

![Mapa de Empatia - Arthor](https://github.com/user-attachments/assets/efa4d8ce-d5cf-48ef-94ab-209615f3b6cd)

## 4.2 Protótipos das Interfaces
Apresente nesta seção os protótipos de alta fidelidade do sistema proposto. A fidelidade do protótipo refere-se ao nível de detalhes e funcionalidades incorporadas a ele. Assim, um protótipo de alta fidelidade é uma representação interativa do produto, baseada no computador ou em dispositivos móveis. Esse protótipo já apresenta maior semelhança com o design final em termos de detalhes e funcionalidades. No desenvolvimento dos protótipos, devem ser considerados os princípios gestálticos, as recomendações ergonômicas e as regras de design (como as 8 regras de ouro). É importante descrever no texto do relatório como os princípios gestálticos e as regras de ouro foram seguidas no projeto das interfaces. Nesta etapa deve-se dar uma ênfase na implementação do software de modo que possam ser realizados os testes com usuários na etapa seguinte.

### Página de login
![image](https://github.com/user-attachments/assets/bf01b7e1-bbb2-42d5-95c4-6f961cbb5eda)

Os princípios gestálticos foram aplicados para facilitar a percepção do layout e melhorar a usabilidade:

1. **Proximidade**: Os campos de entrada de dados, como "usuário" e "senha", estão posicionados próximos um do outro, formando um bloco visual coeso, o que ajuda o usuário a entender que ambos pertencem ao mesmo contexto de login.

2. **Boa continuidade (alinhamento)**: O alinhamento dos elementos cria uma estrutura visual limpa e coerente. Os campos de texto e o botão "Entrar" seguem uma linha vertical contínua, facilitando o fluxo de leitura e ação do usuário.

3. **Similaridade**: Elementos com funcionalidades semelhantes, como os campos de entrada e botões, compartilham o mesmo estilo visual (cor, forma, fonte), destacando seu propósito e evitando confusões na navegação.

4. **Fecho**: As bordas dos campos de login e os elementos agrupados na tela formam uma estrutura visual que orienta o olhar do usuário, “fechando” o design e limitando o campo de visão ao necessário para a ação de login.

5. **Região comum**: A área do login é claramente delimitada, com todos os elementos necessários contidos em uma mesma seção. Isso torna evidente o espaço dedicado ao login, diferenciando-o de outras áreas da interface.

#### Regras de Ouro de Design

Quanto às **regras de ouro de design**, Foram consideradas, principalmente:

1. **Consistência**: A interface mantém uma consistência visual e funcional condizente com o padrão de páginas dessa natureza, o que facilita o reconhecimento dos elementos e cria uma experiência mais confiável.

2. **Fornecimento de atalhos**: Existe um link para o cliente que deseja fazer o cadastro (sign-up) caso ainda não tenha uma conta, oferecendo um caminho rápido e acessível.

![image](https://github.com/user-attachments/assets/95cb3985-7093-4308-b233-fa6c83353f3d)

3. **Feedbacks informativos**: Quando o cliente insere informações inválidas, o sistema exibe uma mensagem clara e específica, sem atribuir culpa ao usuário, ajudando-o a corrigir o erro sem criar frustração.
   
![image](https://github.com/user-attachments/assets/dd760da2-0c2f-4693-a679-9cc8e28235e1)

![image](https://github.com/user-attachments/assets/afad0fb3-faad-4392-a4d2-80c2f47a0dab)

4. **Prevenção de erros e facilidade de correção**: O layout da página foi projetado para minimizar erros, e o sistema oferece mensagens de feedback em caso de entradas inválidas, indicando o que precisa ser ajustado.

5. **Controle do usuário**: Ao manter o login simplificado e direto, o sistema reforça o controle do usuário, oferecendo acesso imediato às ações desejadas, como redirecionamento para a página principal após o login.

### Página de sign-up

Os mesmos princípios gestálticos e considerações das regras de ouro da página de login foram aplicados na página de sign-up, valendo destacar:

1. **Feedbacks informativos**:  

![image](https://github.com/user-attachments/assets/2183f9d4-ce4c-4e3d-8e95-5def6df8daec)

![image](https://github.com/user-attachments/assets/4b2aa04f-9716-4f18-a9e6-3ecfe73b848d)

![image](https://github.com/user-attachments/assets/ff8547ad-2d3e-439e-9db4-9d406f2e88cf)


2. **Fornecimento de atalhos**:  

![image](https://github.com/user-attachments/assets/dea421c0-2541-44f7-acd3-b0b5b01cf398)

Adicionalmente, outras boas práticas são aplicadas, como:

1. **Prevenção de erros e facilidade de correção**:  
   O layout do formulário de sign-up foi projetado para minimizar erros comuns, como falhas de digitação ou descompasso entre os campos de e-mail e confirmação de e-mail. Mensagens de erro só surgem quando há realmente algo errado, evitando a sobrecarga de informações e direcionando o usuário para as correções necessárias de forma clara e objetiva.  
   **Princípio Gestáltico:** *Boa continuidade (alinhamento)* — os campos e mensagens de erro estão organizados de forma alinhada, criando uma leitura contínua e intuitiva.  
   **Regra de Ouro:** *Prevenção de erros e facilidade de correção* — o sistema permite que o usuário corrija erros de forma simples e clara.

![image](https://github.com/user-attachments/assets/70839461-1582-41aa-9c78-0078bb073496)

![image](https://github.com/user-attachments/assets/7d160b11-9c89-40cb-8f80-195d894a69c8)



2. **Controle do usuário**:  
   Ao permitir um processo de cadastro direto e sem fricções, o sistema oferece ao usuário um controle mais assertivo sobre suas ações. O uso de validações em tempo real permite que o usuário seja informado imediatamente sobre qualquer erro, dando-lhe a chance de corrigir sem precisar esperar pela submissão do formulário.  
   **Princípio Gestáltico:** *Região comum* — todos os elementos necessários para o cadastro estão organizados dentro de uma área visualmente delimitada, criando um espaço coeso e de fácil navegação.  
   **Regra de Ouro:** *Controle do usuário* — o sistema oferece um controle total ao usuário, permitindo que ele realize as correções e alterações necessárias sem perder a confiança no processo.


