const formReducer = (state, action) => {
    //the variable name doesnt matter, its just a convention to use state and action
    switch (action.type) {
        //set uppercase because its constant
        case "SET_IMG":
            const isFileOK = action.payload && action.payload.size < 1024 * 1024;
            return {
                //spread the state
                ...state,
                //update the values object with the new image, check if the file is less than 1MB
                values: { ...state.values, image: action.payload && action.payload.size < 1024 * 1024 ? action.payload : null },
                //set the error message if the file is too large
                errors: action.payload && action.payload.size < 1024 * 1024 ? "" : "Image should be less than 1 MB"

            }
        case "SET_VALUES":
            return {
                ...state,
                values: { ...state.values, [action.payload.name]: action.payload.value }
            }
        case "START_SUBMITTING":
            return {
                ...state,
                isSubmitting: true
            }
        case "SET_ERRORS":
            return {
                ...state,
                errors: "Please fill in name, title, email, and bio"
            }
        case "ON_SUBMIT":
            return {
                ...state,
                values: { name: "", title: "", email: "", bio: "", image: null },
                errors: "",
                success: "Profile added successfully!"
            }
        case "SUBMIT_SUCCESS":
            return {
                ...state,
                success: ""
            }   
        case "AFTER_SUBMIT":
            return {
                ...state,
                isSubmitting: false
            }   

        case "SYSTEM_ERROR":
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;   
    }

}
export default formReducer;