import "./index.css";

const navContent = ["Home", "Contacts", "About", "Join Us"]

const Hero = ({titleContent}) => {
    return (
        <div className="Hero">
            <h1>{titleContent}</h1>
            <nav className="Hero__Navbar">
                {
                    navContent.map(element => (
                        <a href="/">{element}</a>
                    ))
                }
            </nav>
        </div>   
    )
}

export default Hero;