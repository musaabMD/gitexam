// data/featuretext.js

// Define the components for your feature sections
const ChatFeature = () => {
    return <div>Chat feature component content goes here</div>;
  };
  
  const GroupCollaborationFeature = () => {
    return <div>Group collaboration feature component content goes here</div>;
  };
  
  const featureSections = [
    {
      title: 'DMs and group chat for everything else',
      subtitle: 'Stay connected with personal and work conversations',
      Component: ChatFeature, // Pass the component here
    },
    {
      title: 'Group collaboration made easy',
      subtitle: 'Efficient collaboration for teams',
      Component: GroupCollaborationFeature, // Another component here
    },
    // Add more feature sections as needed...
  ];
  
  export default featureSections;
  