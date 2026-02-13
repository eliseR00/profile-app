
import AddProfileForm from "../components/AddProfileForm";
import styles from "./AddProfilePage.module.css";
import Wrapper from "../components/Wrapper";


const AddProfilePage = ({ updateProfiles }) => {

    return (
        <Wrapper>
            <h1>Add Profile Page</h1>
            <p>This is the add profile page of our profile app. Here you can add new profiles to the collection.</p>
            <AddProfileForm onAddProfile={updateProfiles} />
        </Wrapper> 
            
    )
}

export default AddProfilePage;