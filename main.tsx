import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './lib/apollo'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)


// Essa Aplicação esta usando o GrapQL que é um Headless CMS

// Headless --> somente a parte de ADMIN do conteudo
// CMS ==> Content Manegement System (gerencia de conteudo da aplicação)
// Um Headless CMS (GraphCMS): Painel de ADMIN (dados fornecidos atraves de uma API REST ou GrapQL)

// Utilizar o React que consome essa API do CMS

// * WordPress --> Não é Headless, ou seja entao ele traz tanto a parte de ADMIN do conteudo quantoa a parte visual do front-end (temas)
// O BackEnd e o FrontEnd são o mesmo sistema

// Dois Tipos de Operações em GraphQL:
// query / mutation

// query = buscar dados
// mutation = criar, alterar e deletar dados