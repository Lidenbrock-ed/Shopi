/**
 * Calculates the total price of all products in the cart
 * @param {Array} products - Array of product objects with price property
 * @returns {number} The sum of all product prices
 */
export const totalPrice = (products) => {
  let sum = 0
  products.forEach(product => sum += product.price)
  sum = sum.toFixed(2)
  return sum
}

/**
 * Returns current date and time in a formatted string
 * Format: YYYY-MM-DD HH:mm:ss
 * @returns {string} Formatted date and time
 */
export const dateTime = () => {
  const today = new Date();
  
  // Get date components
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  
  // Get time components
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');
  
  // Create formatted string
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}