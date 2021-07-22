import Category from './Category';

export default interface Product {
  id: string;
  image: string;
  brand: string;
  price: number;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
  name: string;
  description: string;
  category: Category;
  countInStock: number;
  quantity: number;
}
