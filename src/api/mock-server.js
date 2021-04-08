import { createServer, Model, RestSerializer } from "miragejs";

export const mockServer = () => {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      product: Model
    },

    routes() {
      this.timing = 1500;

      this.get("/api/products", (schema, request) => {
        return schema.products.all();
      });
    },

    seeds(server) {
      server.create("product", {
        name: "Helmet",
        price: "5999",
        url:
          "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/49-326-74-04_1024x1024_bea86405-ecf1-4cf7-8840-8d81e63dae12_400x400.png?v=1617879667"
      });

      server.create("product", {
        name: "gloves",
        price: "999",
        url:
          "https://cdn.shopify.com/s/files/1/0049/4226/6483/products/stx_fluo_double_400x400.jpg?v=1578648469"
      });
    }
  });
};
