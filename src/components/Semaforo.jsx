import Luz from './Luz'

function Semaforo({ cores, luzAtiva, ligado }) {
  return (
    <div className="semaforo">
      {cores.map((cor, indice) => (
        <Luz key={cor} cor={cor} acesa={ligado && indice === luzAtiva} />
      ))}
    </div>
  )
}

export default Semaforo
