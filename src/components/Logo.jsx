

export default function Logo(props) {
   // const logos = </>;
    return (
        <div className="logo">
            <img src={props.src} alt="Logo" height={props.height} description={props.description}/>
            <h2></h2>
        </div>
        );
}