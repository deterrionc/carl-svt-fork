import React from "react";

export interface Props {
  name: string
  enthusiasmLevel?: number
}

const Hello: React.FC<Props> = ({ name, enthusiasmLevel = 1}) => {
  const [currentEnthusiasm, setCurrentEnthusiasm] = React.useState(enthusiasmLevel)

  const updateEnthusiasm = (change: number) => {
    setCurrentEnthusiasm(currentEnthusiasm + change)
  }

  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D")
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(currentEnthusiasm)}
      </div>
      <button onClick={() => updateEnthusiasm(-1)}>-</button>
      <button onClick={() => updateEnthusiasm(1)}>+</button>
    </div>
  )
}

export default Hello

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!")
}