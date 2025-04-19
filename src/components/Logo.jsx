

<<<<<<< HEAD
function Logo(props) {
    return (
        <div className="logo">
            <img src={props.src} height={props.height} alt={props.Logo} />
            <h4>{props.description}</h4>
        </div>
        );
}

export default Logo;
=======
export default function Logo(props) {
   // const logos = </>;
    return (
        <div className="logo">
            <img src={props.src} alt="Logo" height={props.height} description={props.description}/>
            <h2></h2>
        </div>
        );
}
>>>>>>> db068ebfcb06110b2294639ed34e9635b075bd2a
