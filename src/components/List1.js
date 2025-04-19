<<<<<<< Updated upstream
function List1() {
=======
function List1(props) {
>>>>>>> Stashed changes
  return (
    <div className="list-intro">
      <h2>Ive become a React developer!!</h2>
      <div>
<<<<<<< Updated upstream
        <p>I'm happy to take that course and learn on Coursera and Meta</p>
        <p className="link">Read more...</p>
=======
        <p>
          I'm happy to take that course and learn on Coursera and Meta
          {props.color}
        </p>
        <p className="link">Read more about...</p>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default List1;
