function Luz({ cor, acesa }) {
  return <div className={acesa ? `luz ${cor} acesa` : `luz ${cor}`} />
}

export default Luz
