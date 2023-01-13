import { useState } from 'react';

export const useLoader = () => {
  const [loading, setloading] = useState(false);

  return {
    loading,
    setloading,
  };
};
