const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
  },
  {
    id: "bluejean",
    description: "Blue Jean",
    price: 55.55,
  },
];

export const getAllProducts = () => {
  return products;
};

export const getProductByPrice = (minPrice: number, maxPrice: number) => {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};
