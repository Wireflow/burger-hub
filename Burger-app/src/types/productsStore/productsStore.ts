// types.ts
export interface Option {
    modifireId: string;
    ModifieerOption: string;
  }
  
  export interface Product {
    id: string;
    quantity: string | number; 
    price: string | number;  
    options: Option[];
  }
  
  export interface StoreState {
    products: Product[];
    addProduct: (product: Product) => void;
    addOption: (productId: string, modifireId: string, modifireOption: string) => void;
    updateProduct: (id: string, updatedData: Partial<Product>) => void;
    removeProduct: (id: string) => void;
  }