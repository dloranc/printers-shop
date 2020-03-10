const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type User {
    id: String!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Product {
    id: String!
    type: String!
    name: String!
    price: Int!
    inStock: Int!
  }

  type Order {
    id: String!
    user: User!
    orderPositions: OrderPosition!
    status: String!
    totalPrice: String!
  }

  type OrderPosition {
    id: String!
    product: Product!
    amount: Int!
    pricePerUnit: Int!
    totalPrice: Int!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "products" query returns an array of zero or more Products (defined above).
  type Query {
    users: [User]
    products: [Product]
    orders: [Order]
    orderPositions: [OrderPosition]
    userById(id: String!): User
    productById(id: String!): Product
    orderById(id: String!): Order
    orderPositionById(id: String!): OrderPosition
  }
`;

const users = [
  {
    id: "user-1",
    firstName: "John",
    lastName: "Smith",
    email: "john.s@ibm.com",
  },
  {
    id: "user-2",
    firstName: "Tom",
    lastName: "Johns",
    email: "tom.j@ibm.com",
  },
  {
    id: "user-3",
    firstName: "Ben",
    lastName: "Morrison",
    email: "ben.m@apple.com",
  }
];

const products = [
  {
    id: "product-1",
    type: "Printer",
    name: "ZX3",
    price: "400",
    inStock: "30"
  },
  {
    id: "product-2",
    type: "Printer",
    name: "ZX5",
    price: "600",
    inStock: "5"
  },
  {
    id: "product-3",
    type: "Printer",
    name: "ZX1",
    price: "200",
    inStock: "50"
  },
  {
    id: "product-4",
    type: "Fax",
    name: "F2",
    price: "45",
    inStock: "250"
  },
  {
    id: "product-5",
    type: "Fax",
    name: "F4",
    price: "50",
    inStock: "180"
  }
];

const orderPositions = [
  {
    id: "orderPosition-1",
    product: products[1],
    amount: "3",
    pricePerUnit: "600",
    totalPrice: "1800"
  },
  {
    id: "orderPosition-2",
    product: products[4],
    amount: "10",
    pricePerUnit: "50",
    totalPrice: "500"
  },
  {
    id: "orderPosition-3",
    product: products[0],
    amount: "5",
    pricePerUnit: "400",
    totalPrice: "2000"
  }
];

const orders = [
  {
    id: "order-1",
    user: users[1],
    orderPositions: [
      orderPositions[0],
      orderPositions[1],
    ],
    status: "realized",
    totalPrice: "2300"
  },
  {
    id: "order-2",
    user: users[2],
    orderPositions: [
      orderPositions[2],
    ],
    status: "in-progress",
    totalPrice: "2000"
  }
];

// Resolvers define the technique for fetching the types defined in the schema.
const resolvers = {
  Query: {
    users: () => users,
    products: () => products,
    orders: () => orders,
    orderPositions: () => orderPositions,
    userById: (_, { id }) => users.filter(user => user.id === id)[0],
    productById: (_, { id }) => products.filter(product => product.id === id)[0],
    orderById: (_, { id }) => orders.filter(order => order.id === id)[0],
    orderPositionById: (_, { id }) => orderPositions.filter(orderPosition => orderPosition.id === id)[0],
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
