import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

function SimpleChatbot() {
    const [showChatbot, setShowChatbot] = useState(false);

    const [userInput, setUserInput] = useState('');

  const handleToggleChatbot = () => {
    setShowChatbot((prevState) => !prevState);
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleUserMessage = () => {
    console.log('User Message:', userInput);
    // Handle user message logic here
    setUserInput('');
  };
    useEffect(() => {
      // Open the chatbot automatically when the component mounts
      setShowChatbot(true);
    }, []); 
    const steps = [
      {
        id: '1',
        message: "👋 Welcome to Sparrow Cart! I’m Edi, your tech-savvy guide. What's your name?",
        trigger: 'name',
      },
      {
        id: 'name',
        user: true,
        trigger: 'categories',
      },
      {
        id: 'categories',
        message: 'Hi {previousValue}! Ready to explore the latest in technology? Pick a category:',
        trigger: 'categoryOptions',
      },
      {
        id: 'categoryOptions',
        options: [
          { value: 'phones', label: 'Phones', trigger: 'phones' },
          { value: 'watches', label: 'Watches', trigger: 'watches' },
          { value: 'laptops', label: 'Laptops', trigger: 'laptops' },
          { value: 'tablets', label: 'Tablets', trigger: 'tablets' },
          { value: 'smartHomeDevices', label: 'Smart Home Devices', trigger: 'smartHomeDevices' },
          { value: 'gamingConsoles', label: 'Gaming Consoles', trigger: 'gamingConsoles' },
          { value: 'audioEquipment', label: 'Audio Equipment', trigger: 'audioEquipment' },
          { value: 'wearableFitnessTrackers', label: 'Wearable Fitness Trackers', trigger: 'wearableFitnessTrackers' },
          { value: 'computerAccessories', label: 'Computer Accessories', trigger: 'computerAccessories' },
          { value: 'virtualRealityHeadsets', label: 'Virtual Reality Headsets', trigger: 'virtualRealityHeadsets' },
          { value: 'Contact', label: 'Contact Support', trigger: 'Contact' },
        ],
      },
      {
        id: 'phones',
        message: '📱 Dive into our collection of phones! From the latest models to budget-friendly options, we have something for everyone.',
        trigger: 'categoryOptions',
      },
      {
        id: 'watches',
        message: '⌚ Discover our range of smart watches! Stay connected, track your health, and make a style statement.',
        trigger: 'categoryOptions',
      },
      {
        id: 'laptops',
        message: '💻 Upgrade your tech game with our laptops! Perfect for gaming, work, or casual browsing, find your next powerhouse here.',
        trigger: 'categoryOptions',
      },
      {
        id: 'tablets',
        message: '📲 Explore the versatility of our tablets! Great for entertainment, productivity, and everything in between.',
        trigger: 'categoryOptions',
      },
      {
        id: 'smartHomeDevices',
        message: '🏠 Make your home smarter with our smart home devices! Enhance security, convenience, and comfort at the touch of a button.',
        trigger: 'categoryOptions',
      },
      {
        id: 'gamingConsoles',
        message: '🎮 Enter a new world of gaming with our consoles! From the latest releases to classic favorites, level up your gaming experience.',
        trigger: 'categoryOptions',
      },
      {
        id: 'audioEquipment',
        message: '🎧 Elevate your sound experience with our audio equipment! Enjoy crystal-clear sound whether you’re at home or on the go.',
        trigger: 'categoryOptions',
      },
      {
        id: 'wearableFitnessTrackers',
        message: '🏃‍♂️ Track your fitness goals with our wearable fitness trackers! Stay motivated and monitor your progress with ease.',
        trigger: 'categoryOptions',
      },
      {
        id: 'computerAccessories',
        message: '💻 Optimize your setup with our computer accessories! From keyboards to external drives, enhance your productivity.',
        trigger: 'categoryOptions',
      },
      {
        id: 'virtualRealityHeadsets',
        message: '🕶️ Step into virtual reality with our VR headsets! Experience immersive worlds and cutting-edge technology like never before.',
        trigger: 'categoryOptions',
      },
      {
        id: 'Contact',
        message: 'Thank you for exploring Sparrow Cart! For any queries, reach us at support@techworld.com or call +123 4567890.',
        end: true,
      }
    ];
    
      
  

  const handleEnd = ({ steps }) => {
    // Custom logic to handle end of the chat
    console.log('Chatbot ended:', steps);
  };

  const theme = {
    background: '#FFFFFF',
    fontFamily: 'Arial, sans-serif',
    headerBgColor: '#3f51b5',
    headerFontColor: '#FFFFFF',
    headerFontSize: '18px',
    botBubbleColor: '#3f51b5',
    botFontColor: '#FFFFFF',
    userBubbleColor: '#F5F5F5',
    userFontColor: '#4A4A4A',
  };
// ... (previous code)

const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: '1000',
  background: '#3f51b5',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background 0.3s, transform 0.2s',
  outline: 'none',
};

const iconStyle = {
  fontSize: '24px',
  color: 'black',
};

const buttonHover = {
  background: '#5567FF',
  transform: 'scale(1.05)',
};

// CSS media query for mobile responsiveness
const mobileButtonStyle = {
  // Update the button styles for mobile view
  position: 'fixed',
  bottom: '10px',
  right: '10px',
  zIndex: '1000',
  background: '#3f51b5',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background 0.3s, transform 0.2s',
  outline: 'none',
};

const mobileIconStyle = {
  fontSize: '20px',
  color: 'black',
};

// Adjust the button and icon styles based on the screen width
const isMobile = window.innerWidth <= 768;

// Use the appropriate styles based on the screen width
const buttonStyles = isMobile ? mobileButtonStyle : buttonStyle;
const iconStyles = isMobile ? mobileIconStyle : iconStyle;
return (
  <ThemeProvider theme={theme}>
    <div>
      {showChatbot && (
        <div style={{ position: 'fixed', bottom: '55px', right: '20px', zIndex: '1000' }}>
          <ChatBot steps={steps} handleEnd={handleEnd} />
        </div>
      )}
      <button
        onClick={handleToggleChatbot}
        style={showChatbot ? { ...buttonStyles, ...buttonHover } : buttonStyles}
        aria-label="Toggle Chatbot"
      >
        <i className="fa fa-android fa-lg" style={iconStyles}></i>
      </button>
    </div>
  </ThemeProvider>
);
}

export default SimpleChatbot;