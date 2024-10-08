import { Option } from "./Customize";

export type Product = {
    id: number;
    imageUrl: string | null;
    name: string;
    price: number;
    quantity: number;
    options: Option[];
};