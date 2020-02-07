const rules = {
  visitor: {
    static: [
      "home-page:visit",
      'sign-up-page:visit',
      'sign-in-page:visit',
      '404-page:visit',
  ]
  },
  user: {
    static: [
      "shop-page:visit",
      "cart-page:visit",
      "orders-page:visit",
      '404-page:visit',
    ],
  //   dynamic: {
  //     "posts:edit": ({userId, postOwnerId}) => {
  //       if (!userId || !postOwnerId) return false;
  //       return userId === postOwnerId;
  //     }
  //   }
  },
  admin: {
    static: [
      "shop-page:visit",
      "cart-page:visit",
      "orders-page:visit",
      "inventory-page:visit",
      '404-page:visit',
    ]
  }
};

export default rules;
