function List1(props) {
  return (
    <div className="list-intro">
      <h2>Ive become a React developer!!</h2>
      <div>
        <p>
          I'm happy to take that course and learn on Coursera and Meta
          {props.color}
        </p>
        <p className="link">Read more about...</p>
      </div>
    </div>
  );
}

export default List1;
