import MeuComponente from "./components/MeuComponente"

function App() {
 

  return (
    <div>

      <h1>Olá Mundo, React!</h1>
      <MeuComponente />
      

      <MeuBotao conteudo='clique aqui' />
      
      <MeuBotao conteudo='agora aqui' />
      
      <MeuBotao conteudo='enfim aqui' />

      
    </div>
  )
}

function MeuBotao (props) {
  console.log()
  return (
    <button>{props.conteudo}</button>
  )
}



export default App
