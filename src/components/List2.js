<<<<<<< HEAD
<<<<<<< Updated upstream
function List2() {
=======
function List2(props) {

  const styles = {
    color: "tomato",
    fontSice: "4px",
    fontWeight: "bold",
    fontFamily: "tahoma",
    textTransform: "uppercase",
    textAlign: "center",
  };//passing styles object to h2 element

>>>>>>> db068ebfcb06110b2294639ed34e9635b075bd2a
  return (
    <div className="list-intro">
      <h2 style={styles}>I love front-end web development</h2>
      <div>
        <p>
          {props.tittle}
        </p>
        <p className="link">Read more about...</p>
      </div>
=======
function List2(props) {
  const styles = {
    color: "tomato",
    fontSice: "4px",
    fontWeight: "bold",
    fontFamily: "tahoma",
    textTransform: "uppercase",
    textAlign: "center",
  }; //passing styles object to h2 element

  return (
    <div className="list-intro">
      <h2 style={styles}>I love front-end web development</h2>
      <p>{props.tittle}</p>
      <p className="link">Read more about this...</p>
>>>>>>> Stashed changes
    </div>
  );
}
export default List2;
