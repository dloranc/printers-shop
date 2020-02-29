const rules = {
  guest: {
    static: [
      "home-page:visit",
      '404-page:visit',
  ]
  },
  customer: {
    static: [
      "shop-page:visit",
      "product-page:visit",
      "cart-page:visit",
      "orders-page:visit",
      '404-page:visit',
    ],
  },
  admin: {
    static: [
      "shop-page:visit",
      "product-page:visit",
      "cart-page:visit",
      "orders-page:visit",
      "inventory-page:visit",
      '404-page:visit',
    ]
  }
};

export default rules;
