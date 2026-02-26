import {useState, useEffect} from 'react';
import Filters from './Filters.jsx';
import Card from './Card.jsx';
import {Link} from "react-router-dom";
import useFilters from '../hooks/useFilters.js';


const FetchedProfiles = () => {
  
    const [titles, setTitles] = useState([]);
    //give intitialy value as empty array because we will be passing in arrays

    const [profiles, setProfiles] = useState([]);
    
    // const handleChangeTitle = (event) => {
    //     setTitle(event.target.value);
    //     console.log(event.target.value);
    // };

    // const handleSearch = (event) => {
    //     setName(event.target.value);
    //     console.log(event.target.value === "");
    // }

    // const handleClear = () => {
    //     setTitle("");
    //     setName("");
    // }; 

    const {title, name, handleChangeTitle, handleSearch, handleClear} = useFilters();

    //fetch titles
    useEffect(() => {
        fetch("https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php")
        //data is written as string, so we need to convert it to json
        .then((res) => res.json())
        .then((res) => setTitles(res.titles));
    },[]);

    //fetch profiles
    //when title or search changes, we want to refetch the data
    useEffect(() => {
        fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${title}&name=${name}`)
        .then((res) => res.json())
        .then((res) => setProfiles(res.profiles));
    }, [title, name]);  


    return (
        <>
        <Filters 
        titles={titles} 
        title={title} 
        name={name}
        handleChange={handleChangeTitle} 
        handleSearch={handleSearch}
        handleClick={handleClear}/>

        <div className="cards-container">
          {profiles.length>0? (
            profiles.map((profile) => (
            <Link key={profile.id} to={`/fetched-profiles/profile/${profile.id}`}> 
            <Card
              key={profile.id}
              name={profile.name}
              title={profile.title}
              image={profile.image_url}
              /> 
              </Link> 
            ))
          ) : (
            <p>No profiles found</p>
          )}

        </div>      
        </>

    );
};

export default FetchedProfiles;