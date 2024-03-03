export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? <span>Limit reached!</span> : "Smiley's Counter"}
    </h1>
  )
}
