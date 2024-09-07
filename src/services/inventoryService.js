export const fetchInventoryItems = () => {
    return fetch('/api/inventory').then((res) => res.json());
  };
  
  export const addInventoryItem = (item) => {
    return fetch('/api/inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then((res) => res.json());
  };
  