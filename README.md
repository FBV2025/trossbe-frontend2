🚀 1. Sobre o Projeto

O sistema da Trossbe Hamburgueria foi desenvolvido para permitir que qualquer cliente:

visualize o cardápio completo

adicione itens ao carrinho

informe nome, telefone e endereço

envie um pedido diretamente para o banco de dados

acompanhe o status via painel administrativo

O projeto funciona totalmente no front-end, sem necessidade de backend próprio.

As páginas:

🏠 index.html

Página inicial com informações da hamburgueria e navegação.

🍔 pedido.html

Página onde o cliente visualiza os itens, adiciona ao carrinho e finaliza o pedido.

🛠️ admin.html

Painel administrativo para visualizar e atualizar pedidos.
----------------------------
🗂️ 2. Tecnologias Usadas

HTML5

CSS3

JavaScript

Supabase (banco de dados + API)

Live Server (para rodar localmente)
----------------------------
🧩 3. Como Rodar o Projeto Localmente

O projeto é 100% estático.
Você não precisa instalar Node, npm, Python, nada disso.

A maneira recomendada é usando o Live Server, que atualiza automaticamente o navegador quando você faz alterações.
----------------------------
✔ 3.1 Instalar o Live Server

No VS Code:

Aperte Ctrl + Shift + X (Extensions)

Pesquise por Live Server

Clique em Install
----------------------------
✔ 3.2 Abrir o Projeto

Abra a pasta do projeto no VS Code

Clique com botão direito em index.html

Selecione Open with Live Server

O navegador abrirá algo como:

http://127.0.0.1:5500/


(ou porta 5501, 5502, etc.)
----------------------------
🧪 4. Como Testar o Sistema (IMPORTANTE)

✔ 1. Página Inicial (index.html)

Verifique se tudo carrega normalmente

Clique em Fazer Pedido para ir ao cardápio
----------------------------
✔ 2. Página de Pedido (pedido.html)

Nesta página você pode:

ver todos os itens carregados do Supabase

clicar em Adicionar em qualquer item

ver o contador do carrinho aumentar

abrir o carrinho no canto inferior

preencher:

nome

telefone

endereço

Ao clicar Finalizar Pedido:

os dados são enviados ao banco

o carrinho é limpo

aparece uma mensagem de sucesso
----------------------------
✔ 3. Painel Administrativo (admin.html)

Aqui você vê:

os pedidos enviados

itens do pedido

total

nome do cliente

telefone

endereço

status atual

Também é possível atualizar o status para:

Em preparo

Pronto

O painel atualiza automaticamente a cada ação.
----------------------------
5. Estrutura do Projeto

/css
  style.css          → Estilos globais

/js
  supabase.js        → Configuração da API + funções do banco
  script.js          → Carrinho + modal + envio de pedido
  pedido.js          → Carrega produtos e gera o menu
  admin.js           → Lê e atualiza pedidos

/assets
  *.jpg              → Imagens dos itens

index.html
pedido.html
admin.html
----------------------------
🧵 6. Como os Pedidos Funcionam

O cliente escolhe os itens

O carrinho soma automaticamente

O cliente preenche seus dados

O JavaScript:

monta um JSON do pedido

inclui nome, telefone e endereço

envia tudo para o Supabase

O painel admin recebe instantaneamente

O operador pode atualizar o status em tempo real
----------------------------
🧯 7. Resolvendo Problemas Comuns
Nenhum item aparece no menu

Verifique o console (F12 → Console)

Confirme se o Supabase está configurado corretamente

Erro ao enviar pedido

Verifique se o navegador não bloqueou scripts externos

Confira a internet

Imagens não aparecem

O nome no banco precisa ser igual ao arquivo em /assets

✔ 8. Objetivo do Projeto

O objetivo deste sistema é demonstrar:

integração de front-end com banco remoto

manipulação de JSON

criação de fluxo completo de pedidos

experiência simples e intuitiva para o cliente

painel de gestão rápido e funcional