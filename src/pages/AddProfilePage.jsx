
import AddProfileForm from "../components/AddProfileForm";
import styles from "./AddProfilePage.module.css";
function AddProfilePage({onAddProfile}) {
    
    return (
        <div className={styles.pageContainer}>
            <h1>Add Profile Page</h1>
            <p>This is the add profile page of our profile app. Here you can add new profiles to the collection.</p>
            <AddProfileForm onAddProfile={onAddProfile} />
        </div>
    )
}

export default AddProfilePage;