export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: "men's clothing" | "jewelery" | "electronics" | "women's clothing";
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type FormState = {
  success: boolean;
  error: string | null;
};

export type ActionResult = {
  success: boolean;
  error?: string | null;
  product?: Product;
};
