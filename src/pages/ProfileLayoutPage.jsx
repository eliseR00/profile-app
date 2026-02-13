import {Outlet, Link} from "react-router-dom"
import Wrapper from "../components/Wrapper"

const ProfileLayoutPage = () => {
    return(
        <>
        <Wrapper>
        <Outlet />
        <Link to="/fetched-profiles" className="back-btn">Go Back</Link>
        </Wrapper>
        </>
    )
}

export default ProfileLayoutPage;