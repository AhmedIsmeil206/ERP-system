export const login = async (email, password) => {
    // API request to log in a user
    return fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => response.json());
  };
  
  export const logout = () => {
    // Logic for logging out a user
    return Promise.resolve();
  };
  