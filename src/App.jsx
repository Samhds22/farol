import { useState } from 'react'
import Semaforo from './components/Semaforo'

const CORES = ['vermelho', 'amarelo', 'verde']

function App() {
  const [ligado, setLigado] = useState(false)
  const VERDE = CORES.length - 1
  const [luzAtiva, setLuzAtiva] = useState(VERDE)

  function alternarEnergia() {
    setLigado(!ligado)
    setLuzAtiva(VERDE)
  }

  // Sobe do verde para o vermelho; depois do vermelho volta para o verde
  function proximaLuz() {
    setLuzAtiva(luzAtiva === 0 ? VERDE : luzAtiva - 1)
  }

  return (
    <main className="app">
      <h1>Semáforo</h1>

      <Semaforo cores={CORES} luzAtiva={luzAtiva} ligado={ligado} />

      <div className="controles">
        <button
          className={ligado ? 'botao botao-on' : 'botao botao-off'}
          onClick={alternarEnergia}
        >
          {ligado ? 'ON' : 'OFF'}
        </button>

        {ligado && (
          <button className="botao" onClick={proximaLuz}>
            Próxima luz
          </button>
        )}
      </div>

      {ligado ? (
        <p className="status">Luz acesa: {CORES[luzAtiva]}</p>
      ) : (
        <p className="status">Semáforo desligado</p>
      )}
    </main>
  )
}

export default App
