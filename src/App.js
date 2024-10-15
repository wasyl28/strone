import React from 'react';
import ImageCard from './ImageCard';
import './App.css';


const images = [
  {
    id: 1,
    src: 'https://th.bing.com/th/id/OIP.YHeyWW3_DmbK-EboyJ2IQQHaE9?w=241&h=180&c=7&r=0&o=5&pid=1.7',
    name: 'Laptop',
    description: 'do grania',
    price: '10 000',
  },
  {
    id: 2,
    src: 'https://th.bing.com/th/id/OIP.wdkKSBMy5Ju0G0Y488hPSQHaGk?w=206&h=183&c=7&r=0&o=5&pid=1.7',
    name: 'laptop',
    description: 'Do nauki',
    price: '1 002',
  },
  {
    id: 3,
    src: 'https://th.bing.com/th/id/OIP.569N7PYF3M7oNBpx9gpxBwHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7',
    name: 'Sluchawki',
    description: 'Do sluchania',
    price: '575,65',
  },
  {
    id: 4,
    src: 'https://th.bing.com/th/id/OIP.KKl8u4UDN1wAJbCK0O53TAHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7',
    name: 'lambo',
    description: 'Zabrane buddzie B)',
    price: '10 000 000',
  },
];

const App = () => {
  return (
      <div className="app">
        <header className="app-header">
          <h1>Galeria obrazów</h1>
        </header>
        <div className="image-gallery">
          {images.map((image) => (
              <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </div>
  );
};

export default App;
