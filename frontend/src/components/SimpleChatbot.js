import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

function SimpleChatbot() {
    const [showChatbot, setShowChatbot] = useState(false);

    const handleToggleChatbot = () => {
      setShowChatbot(prevState => !prevState);
    };
  
    useEffect(() => {
      // Open the chatbot automatically when the component mounts
      setShowChatbot(true);
    }, []); 
  const steps = [
    {
        id: '1',
        message: "👋 Welcome to Bab Sindh! I’m your culinary guide my name Edi. What's your name?",
        trigger: 'name',
      },
      {
        id: 'name',
        user: true,
        trigger: 'categories',
      },
      {
        id: 'categories',
        message: 'Hi {previousValue}! Let’s tantalize your taste buds! Pick a category:',
        trigger: 'categoryOptions',
      },
      {
        id: 'categoryOptions',
        options: [
          { value: 'dairyProducts', label: 'Dairy Products', trigger: 'dairyProducts' },
          { value: 'cannedFoods', label: 'Canned Foods', trigger: 'cannedFoods' },
          { value: 'chocolates', label: 'Chocolates', trigger: 'chocolates' },
          { value: 'cereals', label: 'Breakfast Cereals', trigger: 'cereals' },
          { value: 'saucesAndSpreads', label: 'Sauces and Spreads', trigger: 'saucesAndSpreads' },
          { value: 'juicesAndDrinks', label: 'Juices and Drinks', trigger: 'juicesAndDrinks' },
          { value: 'candyAndMints', label: 'Candy and Mints', trigger: 'candyAndMints' },
          { value: 'cookingIngredients', label: 'Cooking Ingredients', trigger: 'cookingIngredients' },
          { value: 'bakeryItems', label: 'Bakery Items', trigger: 'bakeryItems' },
          { value: 'Contact', label: 'Contact Support', trigger: 'Contact' },
        ],
      },
      {
        id: 'dairyProducts',
        message: '🥛 Ah, the world of creamy delights! Explore our range of dairy products.',
        trigger: 'categoryOptions',
      },
      {
        id: 'cannedFoods',
        message: '🥫 Deliciousness sealed in every can! Check out our variety of canned foods.',
        trigger: 'categoryOptions',
      },
      {
        id: 'chocolates',
        message: '🍫 Indulge in the sweetness of our chocolates!',
        trigger: 'categoryOptions',
      },
      {
        id: 'cereals',
        message: '🥣 Start your day right with our assortment of breakfast cereals!',
        trigger: 'categoryOptions',
      },
      {
        id: 'saucesAndSpreads',
        message: '🍝 Enhance your dishes with our range of sauces and spreads!',
        trigger: 'categoryOptions',
      },
      {
        id: 'juicesAndDrinks',
        message: '🥤 Quench your thirst with our refreshing juices and drinks!',
        trigger: 'categoryOptions',
      },
      {
        id: 'candyAndMints',
        message: '🍬 Satisfy your sweet cravings with our candy and mints collection!',
        trigger: 'categoryOptions',
      },
      {
        id: 'cookingIngredients',
        message: '🌿 Explore our high-quality cooking ingredients for your culinary creations!',
        trigger: 'categoryOptions',
      },
      {
        id: 'bakeryItems',
        message: '🥐 Dive into the world of freshly baked bakery items!',
        trigger: 'categoryOptions',
      },    
      {
        id: 'Contact',
        message: 'Thank you for exploring Bab Sindh! For any queries, contact us at sales@babsindh.com or call +971 502084514.',
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

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '1000',
    background: '#3f51b5',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
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
  };
  
  const buttonHover = {
    background: '#5567FF',
    transform: 'scale(1.05)',
  };
  
  return (
    <ThemeProvider theme={theme}>
      <div>
        {showChatbot && (
          <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
            <ChatBot steps={steps} handleEnd={handleEnd} />
          </div>
        )}
        <button
          onClick={handleToggleChatbot}
          style={showChatbot ? { ...buttonStyle, ...buttonHover } : buttonStyle}
        >
          <FontAwesomeIcon icon={faRobot} style={iconStyle} />
        </button>
      </div>
    </ThemeProvider>
  );
}

export default SimpleChatbot;