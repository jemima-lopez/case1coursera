function List2(props) {
  const styles = {
    backgroundColor: "pink",
    height: "50px",
    width: "100%",
    border: "1px solid tomato",
    color: "tomato",
    fontSize: "30px",
    borderRadius: "10px",
    fontWeight: "bold",
    fontFamily: "tahoma",
    textTransform: "uppercase",
    textAlign: "center",
  }; 

  return (
    <div className="list-intro">
      <h2 style={styles}>I love front-end web development</h2>
      <p>{props.tittle}</p>
      <p className="link">Read more about this...</p>
    </div>

  );
}
export default List2;
