### Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Ética e Conduta e do Manual da Pessoa Estudante da Trybe.

---

# Boas vindas ao repositório do projeto TrybeTunes!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

# Sumário

- [Boas vindas ao repositório do projeto TrybeTunes!](#boas-vindas-ao-repositório-do-projeto-trybetunes)
- [Sumário](#sumário)
- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de Entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
  - [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Como desenvolver](#como-desenvolver)
  - [`userAPI.js`](#userapijs)
  - [`searchAlbumsAPI.js`](#searchalbumsapijs)
  - [`favoriteSongsAPI.js`](#favoritesongsapijs)
  - [`musicsAPI.js`](#musicsapijs)
  - [ESLint e Stylelint](#eslint-e-stylelint)
  - [Execução de testes unitários](#execução-de-testes-unitários)
    - [Dica: desativando testes](#dica-desativando-testes)
- [Requisitos do projeto](#requisitos-do-projeto)

  - [1. Crie as rotas necessárias para a aplicação](#1-crie-as-rotas-necessárias-para-a-aplicação)

  - [2. Crie um formulário para identificação](#2-crie-um-formulário-para-identificação)

  - [3. Crie um componente de cabeçalho](#3-crie-um-componente-de-cabeçalho)

  - [4. Crie os links de navegação no cabeçalho](#4-crie-os-links-de-navegação-no-cabeçalho)

  - [5. Crie o formulário para pesquisar artistas](#5-crie-o-formulário-para-pesquisar-artistas)

  - [6. Faça a requisição para pesquisar artistas](#6-faça-a-requisição-para-pesquisar-artistas)

  - [7. Crie a lista de músicas do álbum selecionado](#7-crie-a-lista-de-músicas-do-álbum-selecionado)

  - [8. Crie o mecanismo para adicionar músicas na lista de músicas favoritas](#8-crie-o-mecanismo-para-adicionar-músicas-na-lista-de-músicas-favoritas)

  - [9. Faça a requisição para recuperar as músicas favoritas ao entrar na página do Álbum](#9-faça-a-requisição-para-recuperar-as-músicas-favoritas-ao-entrar-na-página-do-álbum)

  - [10. Faça a requisição para recuperar as músicas favoritas e atualizar a lista após favoritar uma música](#10-faça-a-requisição-para-recuperar-as-músicas-favoritas-e-atualizar-a-lista-após-favoritar-uma-música)

  - [11. Crie o mecanismo para remover músicas na lista de músicas favoritas](#11-crie-o-mecanismo-para-remover-músicas-na-lista-de-músicas-favoritas)

- [Requisitos bônus](#requisitos-bônus)
  
  - [12. Crie a lista de músicas favoritas](#12-crie-a-lista-de-músicas-favoritas)

  - [13. Crie a exibição de perfil](#13-crie-a-exibição-de-perfil)

  - [14. Crie o formulário de edição de perfil](#14-crie-o-formulário-de-edição-de-perfil)

- [Avisos Finais](#avisos-finais)

---

# Habilidades
Neste projeto, verificamos se voce é capaz de:

  * Fazer requisições e consumir dados vindos de uma `API`;

  * Utilizar os ciclos de vida de um componente React;

  * Utilizar a função `setState` de forma a garantir que um determinado código só é executado após o estado ser atualizado
  
  * Utilizar o componente `BrowserRouter` corretamente;

  * Criar rotas, mapeando o caminho da URL com o componente correspondente, via `Route`;

  * Utilizar o `Switch` do `React Router`

  * Usar o componente `Redirect` pra redirecionar para uma rota específica;

  * Criar links de navegação na aplicação com o componente `Link`;


---

# Entregáveis

## O que deverá ser desenvolvido

Neste projeto você irá criar o TrybeTunes, uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Essa aplicação será capaz de:

  - Fazer login;
  - Pesquisar por uma banda ou artista;
  - Listar os álbuns disponíveis dessa banda ou artista;
  - Visualizar as músicas de um álbum selecionado;
  - Reproduzir uma prévia das músicas deste álbum;
  - Favoritar e desfavoritar músicas;
  - Ver a lista de músicas favoritas;
  - Ver o perfil da pessoa logada;
  - Editar o perfil da pessoa logada;

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

### Protótipo do projeto
Você pode acessar um protótipo no link abaixo:

https://www.figma.com/file/BDQgAJvOe4KNUjmrYh5t68/TrybeTunes-Figma

## Desenvolvimento

Nos últimos projetos, por mais que o app tenha sido desenvolvido utilizando múltiplos componentes, o que é uma boa prática, todas as funcionalidades eram acessadas ao mesmo tempo, no mesmo lugar, utilizando apenas uma URL (`localhost:3000`, normalmente). A medida que seus apps se tornarem maiores e mais complexos, isso se tornará inviável. Desta vez, as funcionalidades do app serão agrupadas e organizadas em rotas.

Uma rota define o que deve ser renderizado na página ao abrí-la. Cada rota está associada a um caminho. O caminho é a parte da URL após o domínio (nome do site, de forma simplificada). Por exemplo, em `www.site.com/projetos/meu-jogo`, o caminho é `/projetos/meu-jogo`. Até agora, todos os apps React que você desenvolveu possuíam somente uma rota, a raíz (`/`).

Outra diferença importante neste projeto em relação aos anteriores é que você irá consumir e enviar dados para APIs para pesquisar a banda ou artista, recuperar as músicas de cada álbum e salvar as músicas favoritas, além de editar as informações da pessoa logada. Dessa forma, você terá que lidar com requisições assíncronas e promises. Também deverá fazer uso dos métodos de ciclo de vida (lifecycle methods) e de estados para controlar o que é renderizado por seus componentes dependendo do momento em que as requisições se encontram.

## Data de Entrega

  - Projeto individual.

  - Serão `X` dias de projeto.
  
  - Data de entrega para avaliação final do projeto: `DD/MM/YYYY - 14:00h`.

---

# Instruções para entregar seu projeto

## Antes de começar a desenvolver

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-0x-project-trybetunes.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-0x-project-trybetunes`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)
  * Verifique que os testes estão executando:
    * `npm test` (os testes devem rodar e falhar)

3. Crie uma branch a partir da branch `master`

  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os commits do seu projeto
---

## Durante o desenvolvimento

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

## Depois de terminar o desenvolvimento (opcional)

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-00`

---

# Como desenvolver

Este repositório já contém um template com um App React criado. Após clonar o projeto e instalar as dependências (mais sobre isso abaixo), você deverá completar este template implementando os requisitos listados na sessão [Requisitos do Projeto](#requisitos-do-projeto).

Também já existe no projeto um diretório `src/services`, que contém os arquivos `favoriteSongsAPI.js`, `searchAlbumsAPI.js`, `userAPI.js` e `musicsAPI.js`. Esses arquivos serão responsáveis por lidar com as requisições simuladas que serão usadas durante o desenvolvimento.

## `userAPI.js`

O arquivo `userAPI.js` será utilizado para manipular as informações da pessoa logada, dentro dele estarão as funções para recuperar e atualizar as informações da pessoa usuária, além de criar um novo perfil. Todas essas funções simulam o funcionamento de uma API.

- Para recuperar as informações da pessoa usuária, utilize a função `getUser`. Ela retornará um objeto com as informações da pessoa logada caso exista.
**Atenção:** caso não encontre nenhuma informação da banda ou artista, a API retornará um objeto vazio.

- Para criar um novo perfil, utilize a função `createUser`, ela recebe como parâmetro o objeto que contém as informações da pessoa usuária. Esse objeto deverá conter a seguinte estrutura:

```
{
  name: '',
  email: '',
  image: '',
  description: '',
}
```

Para atualizar as informações da pessoa logada, utilize a função `updateUser`. Assim como a função anterior, ela também recebe um objeto com as informações que serão atualizadas, esse objeto deve conter a mesma estrutura do anterior.

## `searchAlbumsAPI.js`

O arquivo `searchAlbumsAPI.js` contém uma função que faz uma requisição à uma API e retorna os álbuns de uma banda ou artista. Para essa função funcionar, ela recebe como parâmetro uma string, que deve ser o nome da banda ou artista. O retorno dessa função, quando encontra as informações, é um array com cada álbum dentro de um objeto.
**Atenção:** caso não encontre nenhuma informação da banda ou artista, a API retornará um array vazio.

## `favoriteSongsAPI.js`

O arquivo `favoriteSongsAPI.js` é responsável por manipular as informações das músicas favoritas. Nele há as funções `getFavoriteSongs`, `addSong` e `removeSong`, que recuperam, adicionam e removem músicas dos favoritos, respectivamente. Assim como nos arquivos anteriores, todas as funções simulam o funcionamento de uma API.

A função `getFavoriteSongs` retorna um array com as músicas favoritas ou um array vazio, caso não haja nenhuma música.

A função `addSong` recebe um objeto que representa a música que você quer salvar como favorita e adiciona ao array já existente das músicas que já foram favoritadas.

A função `removeSong` também recebe um objeto que representa a música que você deseja remover da lista de músicas favoritas. 

**Atenção:** os objetos de música precisam ter a chave `trackId` para que as músicas sejam adicionadas e removidas corretamente.

## `musicsAPI.js`

O arquivo `musicsAPI.js` contém uma função que faz uma requisição à uma API e retorna os as músicas de um álbum, ela recebe como parâmetro uma string, que deve ser o id do álbum. O retorno dessa função, quando encontra as informações, é um array onde o primeiro elemento é um objeto com informações do álbum e o restante dos elementos são as músicas do álbum.
**Atenção:** caso não encontre nenhuma informação, a API retornará um array vazio.

## ESLint e Stylelint

Para garantir a qualidade do código, vamos utilizar neste projeto os linters `ESLint` e `Stylelint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! Para rodá-los localmente no projeto, execute os comandos abaixo:

```bash
npm run lint
npm run lint:styles
```

Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/course/real-life-engineer/eslint).

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando pelos **checks** dos **linters**.

---


## Execução de testes unitários

Vamos utilizar [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) para execução dos testes unitários.

Esse _framework_ de testes utiliza algumas marcações no código para verificar a solução proposta, uma dessas marcações é o atributo `data-testid` e faremos uso dele aqui.

Na descrição dos requisitos (logo abaixo) será pedido que seja feita a adição de atributos `data-testid` nos elementos _HTML_. Vamos a um exemplo para deixar essa configuração nítida:

Se o requisito pedir "crie um botão e adicione o id de teste (ou `data-testid`) com o valor `my-action`, você pode criar:

```html
<button data-testid="my-action"></button>
```

ou

```html
<a data-testid="my-action"></a>
```

Ou seja, o atributo `data-testid="my-action"` servirá para o React Testing Library (RTL) identificar o elemento e, dessa forma, conseguiremos realizar testes unitários focados no comportamento da aplicação.

**ATENÇÃO!** Muito cuidado com os nomes especificados nos requisitos! O conteúdo deve ser exatamente igual ao texto descrito no requisito.

Para verificar a solução proposta, você pode executar todos os testes unitários localmente, basta executar:

```bash
npm test
```

### Dica: desativando testes

Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é extensa. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, esta função "pula" um teste:

```js
it.skip('Será validado se existe uma página para rotas não mapeadas', () => {
  renderPath('/not-found');

  expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
});
```
![image](skip-image.png)

Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

Você também pode rodar apenas um arquivo de teste, por exemplo:

```bash
npm test 01.LoginPage.test.js
```

ou

```bash
npm test 01.LoginPage
```

Uma outra forma para driblar esse problema é a utilização da função `.only` após o `it`. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

```js
it.only('Será validado se existe uma página para rotas não mapeadas', () => {
  renderPath('/not-found');

  expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
});
```
![image](only-image.png)

---

# Requisitos do projeto
:warning: **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.** :warning:

## 1. Crie as rotas necessárias para a aplicação
Você deve utilizar o `BrowserRouter` pra criar as rotas da sua aplicação e cada rota deverá renderizar um componente específico. Crie cada componente dentro da pasta `src/pages`, conforme o indicado abaixo:

- a rota `/` deve renderizar um componente chamado `Login`. Este componente deve ter uma `div` com o atributo `data-testid="page-login"` que envolva todo seu conteúdo;

- a rota `/search` deve renderizar um componente chamado `Search`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-search"`;

- a rota `/album/:id` deve renderizar um componente chamado `Album`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-album"`;

- a rota `/favorites` deve renderizar um componente chamado `Favorites`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-favorites"`;

- a rota `/profile` deve renderizar um componente chamado `Profile`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-profile"`;

- a rota `/profile/edit` deve renderizar um componente chamado `ProfileEdit`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-profile-edit"`;

- para qualquer outra rota não mapeada, deve ser renderizado um componente chamado `NotFound`. Este componente deve ter uma `div` que envolva todo seu conteúdo e ter o atributo `data-testid="page-not-found"`;

### O que será verificado
  
  - Será validado se a rota `/` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-login`;
  
  - Será validado se a rota `/search` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-search`;
  
  - Será validado se a rota `/album/:id` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-album`;
  
  - Será validado se a rota `/favorites` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-favorites`;
  
  - Será validado se a rota `/profile` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-profile`;
  
  - Será validado se a rota `/profile/edit` é uma rota existente e que renderiza um componente com o `data-testid` com valor `page-profile-edit`;
  
  - Será validado se existe uma página para rotas não mapeadas e que renderiza um componente com o `data-testid` com valor `page-not-found`;


## 2. Crie um formulário para identificação
Dentro do componente `Login`, que é renderizado na rota `/`, crie um formulário para que a pessoa usuária se identifique com um nome.
  
  * Você deve criar um campo para que a pessoa usuária insira seu nome. Este campo deverá ter o atributo `data-testid="login-name-input"`.

  * Crie um botão com o texto `Entrar`. Este botão deverá ter o atributo `data-testid="login-submit-button"`.

  * O botão para entrar só deve ser habilitado caso o nome digitado tenha mais de 3 caracteres.

  * Ao clicar no botão `Entrar`, utilize a função `createUser` da `userAPI` para salvar o nome digitado. A função `createUser` espera receber como argumento um objeto com as informações da pessoa: 
  ```
  createUser({name: "Nome digitado"});
  ```
  *Obs:* Você verá nos requisitos mais a frente que você poderá passar outras informações para a `createUser`, mas não se preocupe com isso agora. Por enquanto você pode passar somente um objeto com a propriedade `name`.

  * Enquanto a informação da pessoa usuária é salva, uma mensagem com o texto `Carregando...` deve aparecer na tela. **Dica:** Você precisará dessa mensagem várias vezes no futuro, então é uma boa ideia criar um componente para ela ;)

  * Após a informação ter sido salva, faça um redirect para a rota `/search`.

  ![requisito-2](images/requisito2.gif)
  ### O que será verificado

  - Será validado se ao navegar para a rota `/`, o input e o botão especificados estão presentes;

  - Será validado se o botão só é habilitado se o input de nome tiver 3 ou mais caracteres;

  - Será validado se ao clicar no botão habilitado, a função `createUser` da `userAPI` é chamada;

  - Será validado se ao clicar no botão, a mensagem `Carregando...` é exibida e após a resposta da API acontece o redirecionamento para a rota `/search`.
  
## 3. Crie um componente de cabeçalho
Crie um componente chamado `Header`, dentro da pasta `src/components`.

  * Crie esse componente com a tag `header` envolvendo todo seu conteúdo e com o atributo `data-testid="header-component"`;

  * Renderize o componente de cabeçalho nas páginas das rotas `/search`, `/album/:id`, `/favorites`, `/profile` e `/profile/edit`; 

  * Utilize a função `getUser` da `userAPI` para recuperar o nome da pessoa logada e exiba essa informação na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="header-user-name"`.

  * Enquanto estiver aguardando a resposta da `getUser`, exiba apenas a mensagem de `Carregando...`.

### O que será verificado
 
  - Será validado se o componente `Header` é renderizado na página `/search`;

  - Será validado se o componente `Header` é renderizado na página `/album/:id`;

  - Será validado se o componente `Header` é renderizado na página `/favorites`;

  - Será validado se o componente `Header` é renderizado na página `/profile`;

  - Será validado se o componente `Header` é renderizado na página `/profile/edit`;

 - Será validado se a função `getUser` é chamada ao renderizar o componente;

 - Será validado se a mensagem de `Carregando...` é exibida ao renderizar o componente e é removida após o retorno da API;

 - Será validado se o nome da pessoa usuária está presente na tela após o retorno da API;

## 4. Crie os links de navegação no cabeçalho

  * Crie o link que redireciona para a página de pesquisa dentro do componente `Header`. Este link deve ter o atributo `data-testid="link-to-search"`.

  * Crie o link que redireciona para a página de músicas favoritas dentro do componente `Header`. Este link deve ter o atributo `data-testid="link-to-favorites"`.

  * Crie o link que redireciona para a página de exibição de perfil dentro do componente `Header`. Este link deve ter o atributo `data-testid="link-to-profile"`.

### O que será verificado

  - Será validado se os links de navegação são exibidos na página de pesquisa;
  
  - Será validado se a navegação entre a página de pesquisa e a página de músicas favoritas ocorre corretamente;
  
  - Será validado se a navegação entre a página de pesquisa e a página de exibição do perfil ocorre corretamente;
  
  - Será validado se os links de navegação são exibidos na página do álbum;
  
  - Será validado se a navegação entre a página do álbum e a página de pesquisa ocorre corretamente;
  
  - Será validado se a navegação entre a página do álbum e a página de músicas favoritas ocorre corretamente;
  
  - Será validado se a navegação entre a página do álbum e a página de exibição do perfil ocorre corretamente;
  
  - Será validado se os links de navegação são exibidos na página de músicas favoritas;
  
  - Será validado se a navegação entre a página de músicas favoritas e a página de pesquisa ocorre corretamente;
  
  - Será validado se a navegação entre a página de músicas favoritas e a página de exibição perfil ocorre corretamente;
  
  - Será validado se os links de navegação são exibidos na página de exibição do perfil;
  
  - Será validado se a navegação entre a página de exibição do perfil e a página de pesquisa ocorre corretamente;
  
  - Será validado se a navegação entre a página de exibição do perfil e a página de músicas favoritas ocorre corretamente;
  
  - Será validado se os links de navegação são exibidos na página de edição do perfil;
  
  - Será validado se a navegação entre a página de edição do perfil e a página de pesquisa ocorre corretamente;
  
  - Será validado se a navegação entre a página de edição do perfil e a página de músicas favoritas ocorre corretamente;
  
  - Será validado se a navegação entre a página de edição do perfil e a página de exibição do perfil ocorre corretamente.

## 5. Crie o formulário para pesquisar artistas
Este formulário deve conter um input e um botão para que seja possível pesquisar os álbums de uma banda ou artista. Crie o formulário dentro do componente `Search`, que é renderizado na rota `/search`.
    
  * Crie um campo para pessoa digitar o nome da banda ou artista a ser pesquisada. Esse campo deve ter o atributo `data-testid="search-artist-input"`.
  
  * Crie um botão com o texto `Pesquisar`. Esse botão deve ter o atributo `data-testid="search-artist-button"`.

  * O botão só deve estar habilitado caso o nome do artista tenha 2 ou mais caracteres.


  ![requisito-5](images/requisito5.png)
### O que será verificado

  - Será validado se ao navegar para a rota `/search`, o input e o botão estão presentes na tela;

  - Será validado se o botão está habilitado somente se o input de nome tiver 2 ou mais caracteres;

## 6. Faça a requisição para pesquisar artistas
Com a estrutura da tela de pesquisa criada, agora é hora de fazer uma requisição e receber a lista de álbums da banda ou artista pesquisada.

  * Ao clicar no botão de `Pesquisar`, limpe o valor do input e faça uma requisição utilizando a função do arquivo `searchAlbumsAPIs.js`. Lembre-se que essa função espera receber uma string com o nome da banda ou artista.

  * Enquanto aguarda a resposta da API, esconda o input e o botão de pesquisa e exiba a mensagem `Carregando...` na tela.

  * Após receber a resposta da requisição exibir na tela o texto `Resultado de álbuns de: <artista>`, onde `<artista>` é o nome que foi digitado no input.

  * Liste os álbuns retornados. A API irá retorna um *array* de objetos. Cada objeto terá a seguinte estrutura: 
  ```
  [
    {
      artistId: 12,
      artistName: "Artist Name",
      collectionId: 123,
      collectionName: "Collection Name",
      collectionPrice: 12.25,
      artworkUrl100: "https://url-to-image",
      releaseDate: "2012-03-02T08:00:00Z",
      trackCount: 8,
    }
  ]

  ```

  * Ao listar os álbuns, crie um link em cada card para redirecionar para a página do álbum. Este link deve ter o atributo ```data-testid={`link-to-album-${collectionId}`}```. Onde `collectionId` é o valor da propriedade de cada Álbum.

  * Este link deve redirecionar para a rota `/album/:id`, onde `:id` é o valor da propriedade `collectionId` de cada Álbum da lista recebida pela API.

  * Se nenhum álbum for encontrado para o nome pesquisado, a API irá retornar um array vazio. Nesse caso, a mensagem `Nenhum álbum foi encontrado` deverá ser exibida.

  ![requisito-6_1](images/requisito6_1.gif)
  ![requisito-6_2](images/requisito6_2.gif)

### O que será verificado
  - Será validado se ao clicar em `pesquisar`, a requisição é feita usando a `searchAlbumsAPI`;

  - Será validado se ao clicar no botão, o texto `Resultado de álbuns de: <artista>` aparece na tela;

  - Será validado se ao receber o retorno da API, os álbuns são listados na tela;
  
  - Será validado se caso a API não retorne nenhum álbum, a mensagem `Nenhum álbum foi encontrado` é exibida;

  - Será validado se existe um link para cada álbum listado que redirecione para a rota `/album/:id`.

## 7. Crie a lista de músicas do álbum selecionado
Agora que está tudo pronto, você poderá exibir a lista de músicas do álbum selecionado. Crie a lista dentro do componente `Album`, que é renderizado na rota `/album/:id`.
  
  * Ao entrar na página, faça uma requisição utilizando a função `getMusics` do arquivo `musicsAPI.js`. Lembre-se que essa função espera receber uma string com o id do álbum.

  * Exiba o nome da banda ou artista na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="artist-name"`.

  * Exiba o nome do álbum e nome da banda ou artista na tela. Você pode usar qualquer tag HTML que faça sentido, desde que ela tenha o atributo `data-testid="album-name"`.

  * Liste todas as músicas do álbum na tela. Para isso, crie um componente chamado `MusicCard` que deverá exibir o nome da música (propriedade `trackName` no objeto recebido pela API) e um player para tocar o preview da música (propriedade `previewUrl` no objeto recebido pela API).

  Para tocar o preview, você deve usar a tag `audio` do próprio HTML. Sua implementação é assim: 
  ```javascript
  <audio data-testid="audio-component" src={ previewUrl } controls>
    <track kind="captions" />
      O seu navegador não suporta o elemento <code>audio</code>.
  </audio>
  ```
  **Importante:** lembre-se de colocar o atributo `data-testid="audio-component"` na tag `audio` de cada música listada.

![requisito-7](images/requisito7.gif)

### O que será verificado
  
  - Será validado se o serviço de `musicsAPI` está sendo chamado;
  
  - Será validado se o nome da banda ou artista e o nome do álbum são exibidos;
  
  - Será validado se todas músicas retornadas pela API são listadas.

## 8. Crie o mecanismo para adicionar músicas na lista de músicas favoritas
Você já consegue listar as músicas dos álbuns, nessa etapa você poderá marcar quais são as músicas que você mais gosta.

  * No componente `MusicCard`, crie um input do tipo `checkbox` para marcar as músicas favoritas. Esse input deve conter uma `label` com o texto `Favorita` e, o input, deve possuir o atributo ```data-testid={`checkbox-music-${trackId}`}```, onde `trackId` é a propriedade `trackId` do objeto recebido pela API.

  * Para adicionar uma música a lista de favoritas, utilize a função `addSong` da `favoriteSongsAPI`. Você deve passar para essa função um objeto no mesmo formato que você recebe da API `getMusics`.

  * Enquanto aguarda o retorno da função `addSong`, renderize a mensagem de `Carregando...`.


### O que será verificado
- Será validado se existe um checkbox para cada música da lista;

- Será validado se a função `addSong` é chamada quando algum checkbox é clicado;

- Será validado se a mensagem `Carregando...` é exibida após clicar no checkbox e removida depois do retorno da API;

![requisito-8](images/requisito8.gif)


## 9. Faça a requisição para recuperar as músicas favoritas ao entrar na página do Álbum
Ao entrar na página com a lista de músicas de um álbum, na rota `/album/:id`, as músicas que já foram favoritadas anteriormente devem estar com o checkbox marcado.

  * Ao entrar na página, utilize a função `getFavoriteSongs` da `favoriteSongsAPI` para recuperar a lista de músicas favoritas.

  * Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

  * A lista recebida pela função `getFavoriteSongs` deve ser salva no estado da sua aplicação.
  
  * Após receber o retorno da função `getFavoriteSongs`, as músicas que já foram favoritadas devem estar com o checkbox marcado como `checked`.

### O que será verificado
- Será validado se a requisição para `getFavoriteSongs` é feita para recuperar as músicas favoritas;

- Será validado se, ao entrar na página, o número de checkboxes marcados como `checked` é correspondente ao número de músicas que já foram favoritadas;

![requisito-9](images/requisito9.gif)


## 10. Faça a requisição para recuperar as músicas favoritas e atualizar a lista após favoritar uma música
Após adicionar uma música na lista de favoritas usando a função `addSong` (requisito 8), faça uma requisição usando a função `getFavoriteSongs` para atualizar a lista de músicas favoritas.

  * Ao favoritar uma música, aguarde o retorno da função `addSong` (que já foi implementada no requisito 8) e utilize a função `getFavoriteSongs` da `favoriteSongsAPI` para recuperar a lista de músicas favoritas.

  * Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

  * Atualize o estado da aplicação com o valor recebido pelo retorno da função `getFavoriteSongs`.
  
  * Após receber o retorno da função `getFavoriteSongs`, as músicas que já foram favoritadas devem estar com o checkbox marcado como `checked`.

### O que será verificado
- Será validado se a requisição para `getFavoriteSongs` é feita após favoritar uma música;

- Será validado se o número de checkboxes marcados como `checked` aumenta quando um checkbox é clicado;


## 11. Crie o mecanismo para remover músicas na lista de músicas favoritas
Depois de listar e favoritar as músicas de um álbum, você também deve poder remover uma música da lista de favoritas.

  * Ao clicar em uma música que já está marcada como favorita, ela deve ser removida da lista de músicas favoritas. Para isso você deve usar a função `removeSong` da `favoriteSongsAPI`. Essa API espera receber um objeto no mesmo formato que foi passado anteriormente para a função `addSong`.

  * Enquanto aguarda o retorno da função `removeSong`, renderize a mensagem de `Carregando...`.

### O que será verificado

- Será validado se a função `removeSong` é chamada quando algum checkbox que já esteja marcado é clicado;

- Será validado se a mensagem `Carregando...` é exibida após clicar no checkbox e removida depois do retorno da API;

- Será validado se o número de checkboxes marcados como `checked` diminui quando um checkbox marcado é clicado;

![requisito-11](images/requisito11.gif)

# Requisitos bônus

## 12. Crie a lista de músicas favoritas
Crie a lista dentro do componente `Favorites`, que é renderizado na rota `/favorites`.

  * Ao entrar na página, utilize a função `getFavoriteSongs` da `favoriteSongsAPI` para recuperar a lista de músicas favoritas.

  * Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

  * Após receber o retorno da função `getFavoriteSongs`, utilize o  componente `MusicCard` para renderizar a lista de músicas favoritas.

  * Nesta página deve ser possível desfavoritar as músicas. Para isso utilize a função `removeSong` da `favoriteSongsAPI`.

  * Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

  * Após remover a música, atualize a lista usando a função `getFavoriteSongs`. Lembre-se de exibir a mensagem `Carregando...` enquanto aguarda o retorno da API.

### O que será verificado

- Será validado se a requisição para `getFavoriteSongs` é feita para recuperar as músicas favoritas;

- Será validado se é exibida a lista de músicas favoritas;

- Será validado se a lista de músicas favoritas é atualizada ao remover uma música da lista.

![requisito-12](images/requisito12.gif)


## 13. Crie a exibição de perfil
Crie a exibição do perfil dentro do componente `Profile`, que é renderizado na rota `/profile`.

  * Utilize a função `getUser` da `userAPI` para recuperar as informações da pessoa logada.

  * Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

  * Após receber o retorno da `getUser`, exiba o nome, o email, a descrição e a imagem da pessoa logada.

  * Para exibir a imagem, use a tag HTML `img` com o atributo `data-testid="profile-image"`;

  * Crie um link que redirecione para a página de edição de perfil (rota `/profile/edit`). Este link deve ter o texto `Editar perfil`.

![requisito-13](images/requisito13.gif)

### O que será verificado

  - Será validado se a API `getUser` é usada para recuperar as informações da pessoa logada;

  - Será validado se as informações da pessoa logada são exibidas na tela;

  - Será validado se foi criado um link para a rota de edição de perfil com o texto `Editar perfil`;

  - Será validado se ao clicar no link `Editar perfil`, a navegação acontece corretamente.

## 14. Crie o formulário de edição de perfil
Crie o formulário de edição de perfil dentro do componente `ProfileEdit`, que é renderizado na rota `/profile/edit`.

  * Utilize a função `getUser` da `userAPI` para recuperar as informações da pessoa logada.

  * Enquanto aguarda a resposta da API, exiba a mensagem "Carregando...".

  * Após receber as informações da pessoa logada, renderize um formulário já preenchido com os seguintes campos:

    * Um campo para alterar o nome da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-name"`;

    * Um campo para alterar o email da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-email"`;

    * Um campo para alterar a descrição da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-description"`;

    * Um campo para alterar a foto da pessoa usuária. Este campo precisa ter o atributo `data-testid="edit-input-image"`;

    * Um botão para salvar as informações alteradas. Este botão precisa ter o atributo `data-testid="edit-button-save"`.

  * Para poder habilitar o botão de enviar, todos os campos precisam estar preenchidos (não podem estar vazios).

  * O campo de email, além de não estar vazio também precisa verificar que o email tem um formato válido, ou seja, deve seguir o padrão `test@test.com`.
  
  * O botão de salvar as informações só deve ser habilitado quando todos os campos estiverem válidos, ou seja, todos campos preenchidos e o campo de email com um valor em formato válido.

  * Quando o botão estiver habiltado, utilize a função `updateUser` da `userAPI` para atualizar as informações da pessoa usuária. Essa API espera receber um objeto no seguinte formato:
  ```
    {
      name: '',
      email: '',
      image: '',
      description: '',
    }
  ```

  * Enquanto aguarda a resposta da API, exiba a mensagem `Carregando...`.

  * Ao finalizar o processo de edição, redirecione a pessoa logada para a página de exibição de perfil (rota `/profile`).

![requisito-14](images/requisito14.gif)

### O que será verificado

- Será validado se é feita a requisição para `getUser` para recuperar as informações da pessoa logada; 

- Será validado se o formulário é renderizado já preenchido com as informações da pessoa logada;

- Será validado se é possível alterar os valores dos campos;

- Será validado se o botão `salvar` é habilitado somente se todos os campos estiverem válidos;

- Será validado se as informações são enviadas usando a API `updateUser`;

- Será validado se após salvar as informações a pessoa é redirecionada para a página de exibição de perfil.

---

# Avisos Finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://bit.ly/2OfLJPn)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---
