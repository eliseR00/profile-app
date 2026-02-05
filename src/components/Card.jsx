import './pageContainer.module.css';
const Card = (props) => {
    const { name, title, image } = props;

    return (
        <div className="profile-card">
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.title}</p>
        </div>
    );
}
export default Card;