import "./Card.scss";

const Card = ({
  title,
  value,
  color,
}: {
  title: string;
  value: string | number;
  color: string;
}) => {
  return (
    <div className="card-bg">
      <p className={`card-title ${color}`}>{title}</p>
      <h1 className={`value ${color}`}>{value}</h1>
    </div>
  );
};

export default Card;
