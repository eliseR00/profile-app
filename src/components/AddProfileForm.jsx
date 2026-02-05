import {useState} from "react";
const stripTags = (s) => String(s ?? "").replace(/<\/?[^>]+>/g, "");
//remove tags
const trimCollapse = (s) => String(s ?? "").trim().replace(/\s+/g, " ");
//collapse all whitespace (spaces, tabs, newlines)


const AddProfileForm = ({onAddProfile}) => {
    const [values, setValues] = useState({name: "", title: "", email: "", bio: "", image: null})
    const [errors, setErrors] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const {name, title, email, bio, image} = values;

    const isDisabled =
  !stripTags(trimCollapse(name)) ||
  !stripTags(trimCollapse(title)) ||
  !stripTags(trimCollapse(email)) ||
  !stripTags(trimCollapse(bio)) ||
  !image ||
  isSubmitting ||
  !!errors;

    const handleChange = (event) => {
  const { name, value } = event.target;

  if (name === "image") {
    const file = event.target.files[0];

    if (file && file.size <= 1024 * 1024) {
      setValues(pre => ({ ...pre, image: file }));
      setErrors("");
    } else {
      setErrors("Image size must be less than 1MB");
      setValues(pre => ({ ...pre, image: null }));
    }
    return;
  }

  setValues(pre => ({ ...pre, [name]: value }));
};

    const handleSubmit = (event) => {
  event.preventDefault();
  setIsSubmitting(true);

  try {
    if (
      !stripTags(trimCollapse(name)) ||
      !stripTags(trimCollapse(title)) ||
      !stripTags(trimCollapse(email)) ||
      !stripTags(trimCollapse(bio)) ||
      !image
    ) {
      setErrors("All fields are required");
      return;
    }

    const cleanedData = {
      id: Date.now(),
      name: stripTags(trimCollapse(name)),
      title: stripTags(trimCollapse(title)),
      email: stripTags(trimCollapse(email)),
      bio: stripTags(bio),
      image: URL.createObjectURL(image),
    };

    onAddProfile(cleanedData);

    setValues({ name: "", title: "", email: "", bio: "", image: null });
    setErrors("");
    setSuccess("Profile added successfully!");
    setTimeout(() => setSuccess(""), 1000);
  } finally {
    setIsSubmitting(false);
  }
};

return (
        <form onSubmit={handleSubmit} className="">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required value = {name} onChange={handleChange} />

            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" required value = {title} onChange={handleChange} />

            <label htmlFor="email">Email</label>  
            <input id="email" name="email" type="email" required value = {email} onChange={handleChange} />

            <label htmlFor="bio">Bio</label>
            <textarea id="bio" name="bio" required value = {bio} maxLength={200}onChange={handleChange} />

            <label htmlFor="image">Upload Image URL</label>
            <input id="image" name="image" type="file" accept="image/*" required onChange={handleChange} />

            <button disabled={isDisabled}>Submit</button>
            {errors && <p>{errors}</p>}
            {success && <p>{success}</p>}

        </form>
    )
}

export default AddProfileForm;
