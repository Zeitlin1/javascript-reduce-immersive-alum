const app = "I don't do much.";

function reduce(collection, callback, initalValue) {
  let finalValue = initalValue;

  collection.forEach((item, index) => {
    finalValue = callback(finalValue, item, index, collection);
  });
  return finalValue;
}

function callback(finalValue, item) {
  if (product.discount >= 0.5) {
    return totalPrice + product.price;
  }
  return totalPrice;
}

function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
}

const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 }
];

// this is our implementation of reduce
reduce(couponLocations, couponCounter, 3);

// this is the array's implementation of reduce
couponLocations.reduce(couponCounter, 3);
