import Title from "./Title"
import Count from "./Count"
import ResetButton from "./ResetButton"
import ButtonContainer from "./ButtonContainer"
import { useEffect, useState } from "react"
import CountButton from "./CountButton"

export default function Card() {
  const [count, setCount] = useState(0)
  const locked = count === 5 ? true : false

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === "Space") {
        const newCount = count + 1
        if (newCount > 5) {
          setCount(5)
        } else {
          setCount(newCount)
        }
      }
    }
    window.addEventListener("keydown", handleKeydown)
    // clean up function to remove previous event listener
    return () => {
      window.removeEventListener("keydown", handleKeydown)
    }
  }, [count])
  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton locked={locked} setCount={setCount} type="minus" />
        <CountButton locked={locked} setCount={setCount} type="plus" />
      </ButtonContainer>
    </div>
  )
}
