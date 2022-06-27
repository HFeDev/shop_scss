const Grid = ({ gap, col, mdCol, smCol, children }) => {
  const style = {
    gap: gap ? `${gap}px` : "0"
  };

  const Col = col ? `grid-col-${col}` : "";
  const MdCol = mdCol ? `grid-col-md-${mdCol}` : "";
  const SmCol = smCol ? `grid-col-sm-${smCol}` : "";

  return (
    <div className={`grid ${Col} ${MdCol} ${SmCol}`} style={style}>
      {children}
    </div>
  );
};

export default Grid;
