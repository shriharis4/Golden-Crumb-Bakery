export const generateOrderNumber = () => {
  return `GC${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
};