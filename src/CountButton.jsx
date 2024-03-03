import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

export default function CountButton({ locked, setCount, type }) {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1
        if (newCount < 0) {
          return 0
        } else {
          return newCount
        }
      } else if (type === "plus") {
        const newCount = prev + 1
        if (newCount > 50) {
          return 50
        } else {
          return newCount
        }
      }
    })
    event.currentTarget.blur()
  }
  return (
    <button className="count-btn" disabled={locked} onClick={handleClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  )
}
