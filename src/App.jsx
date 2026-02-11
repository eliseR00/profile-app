import { useState } from 'react'
import './App.css'

import PageContainer from './components/PageContainer.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Card from './components/Card.jsx';
import women from "./assets/women.png";
import man from "./assets/man.png";
import Wrapper from './components/Wrapper.jsx';
import Filters from './components/Filters.jsx';
import AddProfileForm from './components/AddProfileForm.jsx';
import './components/toggleBtn.module.css';
import './components/pageContainer.module.css';
import FetchedProfiles from './components/FetchedProfiles.jsx';


import { HashRouter, Routes, Route, Link} from "react-router-dom";

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import AddProfilePage from './pages/AddProfilePage.jsx';
import OtherProfilesPage from './pages/OtherProfilesPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import styles from "./pages/AddProfilePage.module.css";



function App() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Ava", title: "UX Designer", email: "", bio: "", image: women},
    { id: 2, name: "Bradley", title: "Web Designer", email: "", bio: "", image: man},
    { id: 3, name: "Chris", title: "Software Engineer", email: "", bio: "", image: man},
    { id: 4, name: "Diana", title: "Product Manager", email: "", bio: "", image: women}
  ]);

  const titles = [...new Set (profiles.map(profile => profile.title))];  //creates title array with unique values

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(prev => !prev);
    console.log(clicked);
  };

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");


  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  }

  const handleSearch = (event) => {
    setName(event.target.value);
    console.log(event.target.value === "");
  }

  const handleClear = () => {
    setTitle("");
    setName("");
  };

  const filteredProfiles = profiles.filter(profile => (
    (profile.title === title || !title) && (profile.name.toLowerCase().includes(name.toLowerCase()) || !name)
  ));

   const [styles, setStyles] = useState("light-mode");
   const toggleStyles = () => {
      setStyles(styles === "light-mode" ? "dark-mode" : "light-mode");
   }

   const updateProfiles = (profile) => {
    setProfiles(pre => [...pre, profile]);
   }

   const onAddProfile = (profile) => {
    setProfiles(pre => [...pre, profile]);
   }


  return (

    <PageContainer toggleStyles={toggleStyles} styles={styles}> 
      <HashRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutpage">About</Link></li>
            <li><Link to="/add-profile">Add Profile</Link></li>
            <li><Link to="/other-profiles">Other Profiles</Link></li>
          </ul>
        </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/add-profile" element={<AddProfilePage />} />
        <Route path="/other-profiles" element={<OtherProfilesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  </PageContainer>

    
          
    );
}

export default App
