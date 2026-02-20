import FetchedProfiles from "../components/FetchedProfiles";
import styles from "./AddProfilePage.module.css";

function OtherProfilesPage({}) {

    return (
        <div>
            <h1>Other Profiles Page</h1>
            <p>This is the other profiles page of our profile app. Here you can view all the profiles in the collection.</p>
            <FetchedProfiles />
        </div>
    )
}

export default OtherProfilesPage;