
const About = ({toggleStyles, styles}) => {
    const title = "About Us";
    const description = "Welcome to our profile app! We showcase talented individuals in the design industry.";
    return (
        <div className="about-section" id={styles['mode-toggle']}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
export default About;