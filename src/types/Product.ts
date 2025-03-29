export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
  };

  export type CartItem = Product & {
    quantity: number;
  };