import { Option } from "@/src/types/product/Customize";
import { Product } from "@/src/types/product/Product";
import { StateCreator } from "zustand";

export type CartState = {
    cart: Product[];
    addProduct: (product: Product) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    removeProduct: (productId: number) => void;
    removeCart: () => void;
    addOption: (product: Product) => void;
    deleteOption: (productId: number, modifireId: number, modifireOption: number) => void;
    getProductOptions: (productId: number) => Option[] | null;  
    getTotalProducts: () => number; // New method to get total unique products
};

export const createCartSlice: StateCreator<CartState> = (set, get) => ({
    cart: [],
    
    addProduct: (product) => {
        const { cart } = get();
        const alreadyInCart = cart.find((p) => p.id === product.id);
        if (alreadyInCart) return get().increaseQuantity(product.id);
        set({ cart: [{ ...product, quantity: 1 }, ...cart] });
    },
    
    increaseQuantity: (productId) => {
        const { cart } = get();
        const updatedCart = cart.map((p) =>
            p.id === productId
                ? { ...p, quantity: (p.quantity || 0) + 1 }
                : p
        );
        set({ cart: updatedCart });
    },
    
    decreaseQuantity: (productId) => {
        const { cart } = get();
        const updatedCart = cart.reduce((acc, p) => {
            if (p.id === productId) {
                if (p.quantity > 1) {
                    acc.push({ ...p, quantity: p.quantity - 1 });
                }
            } else {
                acc.push(p);
            }
            return acc;
        }, [] as Product[]);

        set({ cart: updatedCart });
    },
    
    removeProduct: (productId) => {
        const { cart } = get();
        const updatedCart = cart.filter((p) => p.id !== productId);
        set({ cart: updatedCart });
    },
    
    removeCart: () => set({ cart: [] }),

    addOption: (product: Product) => {
        const { cart } = get();
        const existingProductIndex = cart.findIndex(p => p.id === product.id);
        
        if (existingProductIndex !== -1) {
            const existingProduct = cart[existingProductIndex];
            const updatedOptions = existingProduct.options.map(option => {
                const newOptions = product.options.filter(o => o.modifireId === option.modifireId);
                return {
                    ...option,
                    modifireOptions: [
                        ...option.modifireOptions,
                        ...newOptions.flatMap(opt => 
                            opt.modifireOptions.map(modOpt => ({
                                modifierOptionId: modOpt.modifierOptionId,
                                modifierOptionName: modOpt.modifierOptionName,
                                modifierOptionPrice: modOpt.modifierOptionPrice
                            }))
                        )
                    ].filter((opt, index, self) => 
                        index === self.findIndex(o => o.modifierOptionId === opt.modifierOptionId)
                    )
                };
            });

            const updatedProduct: Product = {
                ...existingProduct,
                options: updatedOptions,
            };

            const updatedCart = cart.map((p, index) => 
                index === existingProductIndex ? updatedProduct : p
            );

            set({ cart: updatedCart });
            console.log("Updated Cart:", updatedCart);
        } else {
            const newProduct: Product = {
                ...product,
                options: product.options,  
            };

            set({ cart: [...cart, newProduct] });
            console.log("Updated Cart:", [...cart, newProduct]);
        }
    },
    
    deleteOption: (productId, modifireId, modifireOption) => {
        const { cart } = get();
        const updatedCart = cart.map((p) => {
            if (p.id === productId) {
                const updatedOptions = p.options.map((option) => {
                    if (option.modifireId === modifireId) {
                        return {
                            ...option,
                            modifireOptions: option.modifireOptions.filter(
                                (o) => o.modifierOptionId !== modifireOption
                            )
                        };
                    }
                    return option;
                }).filter(option => option.modifireOptions.length > 0);
                return { ...p, options: updatedOptions };
            }
            return p;  
        });
    
        set({ cart: updatedCart });
    },

    getProductOptions: (productId) => {
        const { cart } = get();
        const product = cart.find(p => p.id === productId);
        console.log("im in getProductOptions", product?.options);
        return product ? product.options : null; 
    },

    // New method to get total unique products
    getTotalProducts: () => {
        const { cart } = get();
        return cart.length; // Return the count of unique products
    },
});