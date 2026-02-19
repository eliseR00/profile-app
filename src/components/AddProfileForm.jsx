import { useReducer, useRef } from "react";
import formReducer from "../reducers/formReducer.js";
import { useNavigate } from "react-router-dom";


const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
//remove tags
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");
//collapse all whitespace (spaces, tabs, newlines)

const initialState = {
  values: {
    name: "",
    title: "",
    email: "", 
    bio: "",
    image: null
  },
  errors: "",
  isSubmitting: false,
  success: ""
  }





const AddProfileForm = ({ onAddProfile }) => {
  // const [values, setValues] = useState({
  //   name: "",
  //   title: "",
  //   email: "",
  //   bio: "",
  //   image: null
  // });
  // const [errors, setErrors] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [success, setSuccess] = useState(false);
  const [state, dispatch] = useReducer(formReducer, initialState);

  const {values, errors, isSubmitting, success} = state;

  const { name, title, email, bio, image } = values;
  const navigate = useNavigate();

  const fieldRef = useRef(null);
  console.log(fieldRef.current);

  //useEffect renders after everythng is rendered
  useEffect(() => {
    fieldRef.current.focus();
  }, [])


  const handleChange = (event) => {
    const { name, value } = event.target;
     if (name === "image") {
       const file = event.target.files[0];
       dispatch({type: "SET_IMG", payload: file})
    //   if (file && file.size < 1024 * 1024) {
    //     setValues((pre) => ({ ...pre, image: file }));
    //     setErrors("");
    //   } else {
    //     setErrors("Image should be less than 1 MB");
    //     setValues((pre) => ({ ...pre, image: null }));
    //   }
     } else {
      dispatch ({type: "SET_VALUES", payload: {name, value}})
      setValues((pre) => ({ ...pre, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: "START_SUBMITTING"})
    //setIsSubmitting(true);

    try {
      if (
        !stripTags(trimCollapse(name)) ||
        !stripTags(trimCollapse(title)) ||
        !stripTags(trimCollapse(email)) ||
        !trimCollapse(bio)
      ) {
        dispatch({type: "SET_ERRORS"});
        //setErrors("All fields are required");
        return;
      }

      const cleanedData = {
        id: Date.now(),
        name: stripTags(trimCollapse(name)),
        title: stripTags(trimCollapse(title)),
        email: stripTags(trimCollapse(email)),
        bio: trimCollapse(bio),
        image: URL.createObjectURL(image),
      };

      onAddProfile(cleanedData);

      dispatch ({type: "ON_SUBMIT"})
      // setValues({ name: "", title: "", email: "", bio: "", image: null });
      // setErrors("");
      // setSuccess("Profile added successfully!");
      setTimeout(() => {
        dispatch({type: "SUBMIT_SUCCESS"})
        //setSuccess("")
        navigate("/")
      }
        , 1000);
    } catch (errors) {
      dispatch({type: "SET_ERRORS", payload: errors.message})
      //setErrors(errors.message);
    } finally {
      dispatch({type: "AFTER_SUBMIT"})
      //setIsSubmitting(false);
    }
  };

  const disabled =
    !stripTags(trimCollapse(name)) ||
    !stripTags(trimCollapse(title)) ||
    !stripTags(trimCollapse(email)) ||
    !trimCollapse(bio) ||
    isSubmitting ||
    errors !== "";

  return (
    <form onSubmit={handleSubmit} className="">
      <label htmlFor="name">Name</label>
      <input ref={fieldRef} id="name" name="name" type="text" required value={name} onChange={handleChange} />

      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" required value={title} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required value={email} onChange={handleChange} />

      <label htmlFor="bio">Bio</label>
      <textarea id="bio" name="bio" required value={bio} maxLength={200} onChange={handleChange} />

      <label htmlFor="image">Upload Image URL</label>
      <input id="image" name="image" type="file" accept="image/*" required onChange={handleChange} />

      <button disabled={disabled}>Submit</button>
      {errors && <p>{errors}</p>}
      {success && <p>{success}</p>}

    </form>
  )
}

export default AddProfileForm;
