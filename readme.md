# Desafio: Site simples com autenticação

## Requisições
Ao acessar a página inicial do site, o navegador faz uma requisição GET para a rota “/”, que responde com um HTML contendo um formulário. O usuário preenche esse formulário com uma chave de API e envia, o que dispara uma nova requisição GET para a rota “/restrita-query”, agora contendo a chave como parâmetro de query.

Na rota “/restrita-query”, o servidor recebe esse valor e compara a chave enviada pelo usuário com a chave configurada internamente. Caso a chave seja válida, o servidor salva essa informação em um cookie chamado “auth” e retorna uma página com um link para a rota “/restrita-cookie”. Caso a chave esteja incorreta, o usuário é redirecionado para a página “/401”.

Quando o usuário acessa a rota “/restrita-cookie”, o servidor faz outra verificação, dessa vez lendo o cookie “auth” que foi previamente definido. Se o valor do cookie corresponder à chave esperada, a página de sucesso é exibida. Caso contrário, o servidor redireciona novamente para a rota “/401”.

A rota “/401” é responsável por exibir uma página simples informando que ocorreu um erro de autenticação. Essa página pode ser exibida tanto quando a chave enviada pela query é inválida quanto quando o cookie não contém o valor esperado.
## Como rodar
npm install
npm start



