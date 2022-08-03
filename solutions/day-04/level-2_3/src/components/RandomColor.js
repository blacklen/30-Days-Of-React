import { hexaColor } from "../utils/generateColor";

export default function RandomColor({ length }) {
  const colors = Array.from({ length }, () => hexaColor());

  return (
    <div className="random-color">
      {
        colors.map(color => (
          <div
            className="color"
            style={{ backgroundColor: color }}
            key={color}
          > {color}
          </div>
        ))
      }
    </div>
  )
}
