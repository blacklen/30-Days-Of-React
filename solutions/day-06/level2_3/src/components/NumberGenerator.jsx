import { isPrime, hexaColor } from "../utils/helper";

export default function numberGenerator({ length, isHexa }) {
  return (
    <div className="number-generator">
      <h1> 30 Days of React</h1>
      <h3> Number Generator </h3>
      <div className="number-box">
        {Array.from({ length }).map((_, index) => {
          const color = isHexa ? hexaColor() : isPrime(index) ? '#FD5E53' : index % 2 ? '#FCDB3A' : '#20BF73';
          return (
            <div
              className="number"
              key={index}
              style={{ backgroundColor: color }}
            >
              <h3>{isHexa ? color : index}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}
