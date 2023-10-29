export const orders = [
  {
    date: "2023-05-05",
    subtotal: 90.22,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Amazing shoe that happened to be red",
          price: 66.66,
        },
        quantity: 3,
      },
      {
        product: {
          id: "bluejean",
        },
        quantity: 1,
      },
    ],
  },
];

export const getAllOrders = async () => {
  return orders;
};
