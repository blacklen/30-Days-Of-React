import { getWorldPopulationData } from "../utils/helper";

export default function WorldPopulation() {
  const data = getWorldPopulationData();

  return (
    <div className="world-population">
      <h1> 30 Days of React </h1>
      <h3> World Population </h3>
      <i> Ten most populated countries </i>
      <div className="chart">
        {data.map((item, index) => (
          <div className="chart-item" key={item.country}>
            <strong className="label">{item.country.toUpperCase()}</strong>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${parseInt(item.population / data[0].population * 100)}%` }}
              ></div>
            </div>
            <strong className="population">{item.population.toLocaleString('en-US')}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
