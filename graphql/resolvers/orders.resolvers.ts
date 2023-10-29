import { getAllOrders } from "../../models/orders";

module.exports = {
  Query: {
    orders: () => {
      return getAllOrders();
    },
  },
};
