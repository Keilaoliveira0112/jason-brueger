# Burger-Queen

<div align="center">
<img width="250" src="https://github.com/AdrianaKatarina/jason-brueger/assets/122534293/306d3bdb-97ba-4af0-a5f1-9f22569be0dc"/>
</div>

<br>

<div align="center">
  <a href="https://git-scm.com/">
    <img alt="icon-Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="30" height="40"/>
  </a>
  <a href="https://www.styled-components.com">
    <img alt="icon-styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="40" />
  </a>
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
    <img alt="icon-JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="30" height="40"/>
  </a>
  <a href="https://nodejs.org/en">
    <img alt="icon-NodeJs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="30" height="40"/>
  </a>
  <a href="https://react.dev/">
    <img alt="icon-React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" height="40"/>
  </a>
  <a href="https://jestjs.io/pt-BR/">
    <img alt="icon-Jest" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" width="30" height="40"/>
  </a>
  <a href="https://code.visualstudio.com/">
    <img alt="icon-Vscode" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="30" height="40"/>
  </a>
  <a href="https://www.figma.com/">
    <img alt="icon-Figma" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
  </a>  
</div>  
  <br>

# Índice

* [1. Resumo do Projeto](#1-resumo-do-projeto) 
* [2. Histórias de Usuários](#2-histórias-de-usuários) 
* [3. Funcionalidades](#3-funcionalidades) 
* [4. Considerações Técnicas](#4-considerações-técnicas) 
* [5. Testes Unitários](#6-testes-unitários) 
* [6. Desenvolvedoras](#8-desenvolvedoras)


# 1. Resumo do Projeto

Um pequeno restaurante de hambúrgueres com a temática de filme de terror, que está crescendo e necessita uma interface em que se possa realizar pedidos utilizando um tablet, e enviá-los para a cozinha para que sejam preparados de forma ordenada e eficiente.

Este projeto tem duas áreas: interface (cliente) e API (servidor). Nosso cliente nos pediu para desenvolver uma interface que se integre com a API que outra equipe de desenvolvedoras está trabalhando simultaneamente.

As informações do cliente são as seguintes:

-  Temos 2 tipos de cardápios: um para o café da manhã e outro para o restante do dia.
-  Os clientes podem ser indecisos e mudam o pedido várias vezes antes de finalizá-lo.
-  A interface deve permitir a seleção de produtos e mostrar o resumo do pedido com o custo total.
-  O objetivo principal do projeto é aprender a construir uma interface web usando o framework React. Isso envolve compreender o conceito de estado da tela e como cada mudança no estado reflete na interface. 

***

# 2. História de Usuários

## [Historia de usuario 1] Garçom/Garçonete deve poder entrar no sistema, caso o admin já lhe tenha dado as credenciais

Eu, como garçom/garçonete quero entrar no sistema de pedidos.

### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Acessar uma tela de login.
* Inserir email e senha.
* Receber mensagens de erros compreensíveis, conforme o erro e as informações inseridas.
* Entrar no sistema de pedidos caso as credenciais forem corretas.

![Tela de Login](https://github.com/AdrianaKatarina/jason-brueger/assets/122534293/cabfcaa3-1cf3-4758-a73d-aed4aa995bea)

***

## [História de usuário 2] Garçom/Garçonete deve ser capaz de anotar o pedido do cliente

Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não
depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a
cozinha para serem preparados em ordem.

### Critérios de aceitação

O que deve acontecer para satisfazer as necessidades do usuário?

* Anotar o nome do cliente.
* Adicionar produtos aos pedidos.
* Excluir produtos.
* Ver resumo e o total da compra.
* Enviar o pedido para a cozinha (guardar em algum banco de dados).
* Funcionar bem em um _tablet_.

![Tela de Novo Pedido - Café da Manhã](https://github.com/AdrianaKatarina/jason-brueger/assets/122534293/d78ac032-b166-42c5-9f19-bb15b0f14ed3)
![Tela de Novo Pedido - Resto do Dia](https://github.com/AdrianaKatarina/jason-brueger/assets/122534293/a5d18027-553c-4d34-93ac-744f9bde5220)

***

## [História de usuário 3] Chefe de cozinha deve ver os pedidos

Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder
marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido
está pronto para ser entregue ao cliente.

### Critérios de aceitação

* Ver os pedidos ordenados à medida em que são feitos.
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado
  como concluído.

![Tela de Pedidos Pendentes](https://github.com/AdrianaKatarina/jason-brueger/assets/122534293/b3e2b1e7-8764-4a2f-a2ce-6a98b04d0197)
![Tela de Pedidos Concluídos](https://github.com/AdrianaKatarina/jason-brueger/assets/122534293/bb808f60-e542-41bc-b87b-eadb7129af49)

***

## [Historia de usuário 4] Garçom/Garçonete deve ver os pedidos prontos para servir

Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los
rapidamente aos clientes.

### Critérios de aceitação

* Ver a lista de pedidos prontos para servir.
* Marcar os pedidos que foram entregues.

![Tela de Pedidos Prontos](https://github.com/AdrianaKatarina/jason-brueger/assets/122534293/e1664474-1ae8-4ae1-9ad1-74a2dfbf09b9)

***

## [Historia de usuário 5] Administrador(a) de loja deve administrar seus funcionários

Eu como administrador(a) de loja quero gerenciar os usuários da
plataforma para manter atualizado as informações de meus funcionários.

### Critérios de aceitação

* Ver lista de funcionários.
* Adicionar funcionários.
* Excluir funcionários.
* Atualizar dados dos funcionários.

![Tela de Funcionários - Lista de Funcionários](https://github.com/AdrianaKatarina/jason-brueger/assets/122534293/329bf263-f62a-49d2-a1f9-931f06945077)
![Tela de Funcionários - Adicionar Novo Funcionário](https://github.com/AdrianaKatarina/jason-brueger/assets/122534293/fdca8de8-0a6f-4ce2-b1ef-55cf470f31e4)

***

## [História de usuário 6] Administrador(a) de loja deve administrar os produtos

Eu como administrador(a) de loja quero gerenciar os produtos
para manter atualizado o menu.

### Critérios de aceitação

* Ver lista de produtos.
* Adicionar produtos.
* Excluir produtos.
* Atualizar dados de produtos.

![Tela de Produtos - Lista de Produtos](https://github.com/AdrianaKatarina/jason-brueger/assets/122534293/9d396fbd-fd10-4018-be08-7036b0acd6a6)
![Tela de Produtos - Adicionar Novo Produto](https://github.com/AdrianaKatarina/jason-brueger/assets/122534293/8ebec06c-9647-4a45-8ec3-7f7324f23770)

***

# 3. Funcionalidades

A interface oferece recursos com base nas permissões destinadas a cada usuário. Após a validação de login, o usuário é redirecionado para as páginas pertinentes ao cargo.

* ### ATENDIMENTO

  * `Novos Pedidos:` Usuário tem acesso a essa funcionalidade de registro dos pedidos. O atendente pode selecionar itens, a mesa, adicionar o nome do cliente e pode removê-los. Dinamicamente o resumo do pedido é preenchido, incluindo o cálculo de custo total da comanda.

  * `Pedidos Prontos`: Os atendentes podem visualizar todos os pedidos enviados para a cozinha e estão aguardando a entrega. Assim que prontos, podem marcá-los como entregues.

* ### COZINHA

  * `Pedidos Pendentes:` O chef de cozinha tem acesso a interface destinada aos cozinheiros que recebem os pedidos feitos pelos atendentes. Esses são enviados por ordenação para serem preparados. Ao finalizar o pedido o chef pode alterar o status para pedidos prontos.

  * `Pedidos Concluídos:` Os pedidos concluídos são automaticamente enviados para os atendentes para serem entregues. Essa notificação há o cálculo de quanto tempo foi gasto para a preparação do pedido até a ser finalizado.

* ### ADMIN

  * `Funcionários:` Os usuários com acesso á essa funcionalidade tem a permissão de gerenciar colaboradores. Além de lista-los, adicionar, remover e atualizar o cadastro dos mesmos.

  * `Produtos:` Estes também tem acesso ao gereciamento de produtos para adicionar ao cardápio, excluir e tambem alterá-los conforme suas necessidades.


# 4. Considerações Técnicas

Para o desenvolvimento deste projeto, utilizamos ferramentas e tecnologias adotadas para o desenvolvimento de aplicações web.
O mesmo foi totalmente construído usando o framework `REACT`, que nos possibilita criar interfaces mais dinâmicas e interativas.

Outra ferramenta utilizada foi `Insomnia` que nos auxilia para testar e simular as requisições da `API`. Com o Insomnia foi possível enviar requisições HTTP e visualizar as resposta recebidas, garantindo assim a comunicação entre interface e API.

Além dessas ferramentas citadas, também utilizamos a biblioteca `Styled-components` que nos permite escrever estilos CSS para a aplicação em arquivos `Javascript`.

Para o processamento

Essa combinação de tecnologias nos permitiu a criação de uma interface moderna, funcional, responsiva e eficiente para o ambiente proposto.

## Login:

Para ter [acesso](https://jason-brueger.vercel.app/) será necessário realizar o login em um dos email e senha disponibilizados abaixo:

Cargo | Email | Senha 
:--- | :--:  | :--- 
`Admin` | admin@teste.com | 123456 
`Atendente` | atendente@teste.com | 123456
`Cozinha` | cozinha@teste.com | 123456


# 5. Testes Unitários
 
Para garantir a qualidades e o bom funcionamento da aplicação, foram realizados testes unitários para verificar o comportamento de cada componente e das telas. Permitindo assim a verificação de possíveis erros ou falhas.

Os testes unitários se aplica por toda a aplicação, desde a renderização adequada dos componentes, validação de dados e a interação correta com o `mock da API.


# 6. Desenvolvedoras


 Desenvolvido por : <br>
  <br>
    Keila Oliveira<br>
  [![Github Keila](https://img.shields.io/badge/-KeilaOliveira-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/Keilaoliveira0112)](https://github.com/Keilaoliveira0112) 
  [![Linkedin Keila](https://img.shields.io/badge/-Keila-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/keilaoliveiradev/)](https://www.linkedin.com/in/keilaoliveiradev/) 
  [![Gmail Keila](https://img.shields.io/badge/-Email-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:keilaoliveira.copy@gmail.com)](mailto:keilaoliveira.copy@gmail.com)
  <br>
  <br>
    Adriana Oliveira<br>
  [![Github Adriana](https://img.shields.io/badge/-AdrianaOliveira-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/AdrianaKatarina)](https://github.com/AdrianaKatarina)
  [![Linkedin Adriana](https://img.shields.io/badge/-Adriana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/adroliveira/)](https://www.linkedin.com/in/adroliveira/)
  [![Gmail Adriana](https://img.shields.io/badge/-Email-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:dricakatarina@gmail.com)](mailto:dricakatarina@gmail.com)
  <br>
  