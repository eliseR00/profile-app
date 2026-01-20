import man from "../assets/man.png";
const Card2 = () => {
    const name = "Bradley";
    const title = "Web Designer"

    return (
        <div className="profile-card">
            <img src={man} alt={name}/>
            <p>{name}</p>
            <p>{title}</p>
        </div>
    );
}
export default Card2;