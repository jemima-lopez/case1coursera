function List1(props) {
  console.log(props);
  return (
    <div className="list-intro">
      <h2>Ive become a React developer!!</h2>
      <div>
        <p>I'm happy to take that course and learn on Coursera and Meta  {props.color}</p>{/*types of props*/}
        <p className="link">Read more...</p>
      </div>
    </div>
  );
}

export default List1;
