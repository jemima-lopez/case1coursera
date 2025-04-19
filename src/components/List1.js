<<<<<<< HEAD
<<<<<<< Updated upstream
function List1() {
=======
function List1(props) {
>>>>>>> Stashed changes
=======
function List1(props) {
  console.log(props);
>>>>>>> db068ebfcb06110b2294639ed34e9635b075bd2a
  return (
    <div className="list-intro">
      <h2>Ive become a React developer!!</h2>
      <div>
<<<<<<< HEAD
<<<<<<< Updated upstream
        <p>I'm happy to take that course and learn on Coursera and Meta</p>
=======
        <p>I'm happy to take that course and learn on Coursera and Meta  {props.color}</p>{/*types of props*/}
>>>>>>> db068ebfcb06110b2294639ed34e9635b075bd2a
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
