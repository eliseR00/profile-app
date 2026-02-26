const useFilteredProfiles = (profiles, title, name) => {
  return profiles.filter(
    (profile) =>
      (profile.title === title || !title) &&
        profile.name.toLowerCase().includes(name.toLowerCase()),
    );
};

export default useFilteredProfiles;