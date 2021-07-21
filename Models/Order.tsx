import Product from "./Product";

export default interface Order {
  id?: string;
  city: string;
  country: string;
  dateOfOrder: number;
  orderItems: Product[];
  phone: string;
  shippingAddress1: string;
  shippingAddress2: string;
  zip: string;
}
