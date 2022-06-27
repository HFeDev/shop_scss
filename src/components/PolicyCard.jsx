const PolicyCard = ({ name, description, icon }) => {
  return (
    <div className="policy-card">
      <div className="policy-card__icon">
        <i className={icon}>icon</i>
      </div>
      <div className="policy-card__infor">
        <div className="policy-card__infor__name">{name}</div>
        <div className="policy-card__infor__description">{description}</div>
      </div>
    </div>
  );
};

export default PolicyCard;
