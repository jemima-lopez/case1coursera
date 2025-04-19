function List2(props) {

  const styles = {
    color: "tomato",
    fontSice: "4px",
    fontWeight: "bold",
    fontFamily: "tahoma",
    textTransform: "uppercase",
    textAlign: "center",
  };//passing styles object to h2 element

  return (
    <div className="list-intro">
      <h2 style={styles}>I love front-end web development</h2>
      <div>
        <p>
          {props.tittle}
        </p>
        <p className="link">Read more about...</p>
      </div>
    </div>
  );
}
export default List2;
