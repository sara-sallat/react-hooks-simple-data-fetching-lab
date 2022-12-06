// create your App component here
import React, { useEffect, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [randomDog, setRandomDog] = useState(null);

  useEffect(() => {
    getRandomDog();
  }, []);

  const getRandomDog = async () => {
    const request = await fetch("https://dog.ceo/api/breeds/image/random");
    if (request.ok) {
      const data = await request.json();
      setIsLoading(false);
      setRandomDog(data.message);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <img src={randomDog} alt="A Random Dog" />
    </div>
  );
};

export default App;
