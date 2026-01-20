import women from "../assets/women.png";
const Card = () => {
    const name = "Ava";
    const title = "UX Designer"

    return (
        <div className="profile-card">
            <img src={women} alt={name}/>
            <p>{name}</p>
            <p>{title}</p>
        </div>
    );
}
export default Card;