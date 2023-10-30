import {
  addNewProduct,
  getAllProducts,
  getProductById,
  getProductByPrice,
} from "../../models/products";

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
    productsByPrice: (_: any, args: any) => {
      return getProductByPrice(args.minPrice, args.maxPrice);
    },
    productById: (_: any, args: any) => {
      return getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_: any, args: any) => {
      addNewProduct(args.id, args.description, args.price);
    },
  },
};
