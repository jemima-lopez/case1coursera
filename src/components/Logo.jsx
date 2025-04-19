

function Logo(props) {
    return (
        <div className="logo">
            <img src={props.src} height={props.height} alt={props.Logo} />
            <h4>{props.description}</h4>
        </div>
        );
}

export default Logo;