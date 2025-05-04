

export default function Logo(props) {
    return (
        <div className="logo">
            <img src={props.src} height={props.height} width={props.width} />
            <h4>{props.description}</h4>
        </div>
    );
}
