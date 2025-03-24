function List2() {

  const styles = {
    color: "pink",  
  };//passing styles object to h2 element

  return (
    <div className="list-intro">
      <h2 style={styles}>I love front-end web development</h2>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum magnam
          tenetur excepturi obcaecati asperiores voluptates neque dolor mollitia
          hic adipisci ducimus praesentium odit, eos deserunt quibusdam ipsam
          tempora repudiandae modi.
        </p>
        <p className="link">Read more...</p>
      </div>
    </div>
  );
}
export default List2;
