const data = [
  { name: 'Item 1', id: 1, },
  { name: 'Item 2', id: 2, },
  { name: 'Item 3', id: 3, },
  { name: 'Item 4', id: 4, },
  { name: 'Item 5', id: 5, },
  { name: 'Item 6', id: 6, },
  { name: 'Item 7', id: 7, },
  { name: 'Item 8', id: 8, },
  { name: 'Item 9', id: 9, },
  { name: 'Item 10', id: 10, },
  { name: 'Item 11', id: 11, },
];
export const getListItem = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1000);
  });
};
