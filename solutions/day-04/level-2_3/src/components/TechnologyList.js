export default function TechnologyList({ list }) {
  return (
    <div className="technology-list">
      <strong> Front End Technologies </strong>
      <div className="logos">
        {
          list.map((item, index) => (
            <img src={item} alt="item" key={index} />
          ))
        }
      </div>
    </div>
  );
}
