

function List3(props) {

  return (
    <div className="list-intro">
      <h2>My journey to become a React developer</h2>

      <div>
        <h4 >{props.tittle}</h4>
        <br />
        orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <h4>{props.color}</h4>
      <p className="link">Read more...</p>
    </div>
  );
}
export default List3;
