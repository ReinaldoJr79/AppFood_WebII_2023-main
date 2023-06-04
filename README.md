# App Food
### Preparação do ambiente de desenvolvimento

 - [ ] `npm i -g yarn`
 - [ ] `yarn init -y`
 - [ ] `yarn add -D typescript`
 Inicializa o Typescript
 - [ ] `yarn tsc`
 Inicializa o arquivo de configurações
 - [ ] `yarn tsc --init`
Criar a pasta src
 - [ ] `yarn tsc`
  Compila e cria os arquivos .js na mesma raiz, alterar o outDir no tsconfig altero para a pasta de saída dist.
 - [ ] `node index.js`
  Inicializa o Git e adicionamso o .gitignore e adicionamso as pastas para não serem adicionadas
 - [ ] `git init`
Instalar o eslint e editorconfig, para manter um padrão de codificação
 - [ ] Clicar botao direito e Generate .editorconfig
 - [ ] `npm init @eslint/config`
	 - [ ] style
	 - [ ] esm
	 - [ ] none
	 - [ ] Yes
	 - [ ] node
	 - [ ] prompt
	 - [ ] JSON
	 - [ ] tab
	 - [ ] single
	 - [ ] unix
	 - [ ] Yes
	 - [ ] Yes
	 - [ ] yarn
 - [ ] `yarn add express`
 Da erro na tipagem ai pprecisamos instalar o types/express
 - [ ] `yarn add -D @types/express`
Instalar as ferramentas para rodar o servidor com as alterações
 - [ ] `yarn add -D ts-node `
 - [ ] `npm i --save-dev -D nodemon`

#### Iniciando o sistema

Passo 1<br>

Abra um terminal com o diretorio do arquivo digite os comandos
npm instal
npm i -g yarn
Abra outro terminal com o diretorio do arquivo e digite o comando
docker run -p 27017:27017 mongo
Volte ao primeiro terminal e digite o comando
yarn devl<br>

Passo 2<br>

Abra o Insomnia em seu computador e crie um novo espaço de trabalho ou utilize um existente.
Clique em "Create" e selecione "New Request" para criar uma nova requisição.
Selecione o método POST na barra de seleção de método.
No campo de URL, insira
https://localhost:300/categories
Na seção "Body", selecione o tipo de corpo "JSON".
No corpo da requisição, insira os campos necessários para criar uma nova categoria. Por exemplo: {
"icon": "🍔",
"name": "comida"
}
Clique no botão "Send" para enviar a requisição POST e criar uma nova categoria. Verifique a resposta para confirmar que a categoria foi criada com sucesso.
Clique novamente em "Create" e selecione "New Request" para criar uma nova requisição.
Selecione o método GET na barra de seleção de método.
No campo de URL, insira
https://localhost:300/categories
Clique no botão "Send" para enviar a requisição GET e verifique se as categorias estão listadas corretamente.<br>

Passo 3<br>

Clique novamente em "Create" e selecione "New Request" para criar uma nova requisição.
Selecione o método POST na barra de seleção de método.
No campo de URL, insira
https://localhost:300/products Na seção "Body", selecione o tipo de corpo Multipart Form
Clique no botão "Add Field" para adicionar os campos do Multipart um por um. Insira os seguintes campos:
name: Insira o nome do produto
descrição: Insira a descrição do produto.
price: Insira o preço do produto
categoria: Insira o ID da categoria obtida anteriormente, que consta no get de categories.
imagem: Selecione o tipo de campo "Arquivo" e escolha o arquivo de imagem para enviar.
Clique no botão "Send" para enviar a requisição POST. Verifique a resposta para confirmar que foi criado com sucesso.
Crie uma nova requisição GET como feito anteriormente.
No campo de URL, insira novamente a forma Multipast Form
https://localhost:300/products
Clique no botão "Send" para enviar a requisição GET e obter a lista de produtos<br>

Passo 4<br>

Retorne ao terminal com o diretorio do projeto e digite o comando npm multer
