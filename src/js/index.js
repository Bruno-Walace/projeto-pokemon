const botaAlterarTema = document.getElementById("botao-alterar-tema");/*variavel de acesso ao botao de alterar tema */

const body = document.querySelector("body"); /* variavel de acesso ao body */

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao"); /* variavel para alterar a imagem do botao ao ser clicado, como tem classe definida se usa o . para chamar a classe */

botaAlterarTema.addEventListener("click", () => {
    /*definir ação ao click do usuário (escuta por evento de click) */

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro"); /* variavel para condicionar o if caso o modo escuro esteja ativo */
   
    body.classList.toggle("modo-escuro");//comando .toggle serve para alternar (modo escuro e claro)
   
    if (modoEscuroEstaAtivo) {
        //body.classList.remove("modo-escuro");/* condição para remover o modo escuro caso esteja ativo */

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");/*volta a imagem anteria quando clicar o botao novamente */

    } else {
       // body.classList.add("modo-escuro"); /* adicionar a classe modo escuro */

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png"); /* comando para alterar a imagem do botao ao ser clicado, tem que passar o arquivo onde vai ser alterado e o caminho da pasta da nova imagem */

    }





});

