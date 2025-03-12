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