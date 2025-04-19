function List3(props) {
  return (
    <div className="list-intro">
      <h2>My journey to become a React developer</h2>
      <div>
        <p>
          <div>{props.title}</div>
          <br />
          orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>{props.color}</div>
        <p className="link">Read more...</p>
      </div>
    </div>
  );
}
export default List3;
