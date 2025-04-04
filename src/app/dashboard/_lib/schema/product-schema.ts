import { z } from "zod";

export const productSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(3, "Title must be at least 3 characters"),
  price: z.coerce.number().positive("Price must be a positive number"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.enum(
    ["men's clothing", "jewelery", "electronics", "women's clothing"],
    {
      errorMap: () => ({ message: "Please select a valid category" }),
    }
  ),
  image: z.string().url("Please enter a valid image URL"),
  rating: z
    .object({
      rate: z.number().min(0).max(5).optional(),
      count: z.number().nonnegative().optional(),
    })
    .optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;
