function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i += 1) {
    // Пиши код ниже этой строки
    total = total + order[i];
  }
  // Пиши код выше этой строки
  return total;
}
consol.log(calculateTotalPrice([12, 85, 37, 4]));
