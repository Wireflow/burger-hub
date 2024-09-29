import { Option } from "@/src/types/product/Customize";
import { Product } from "@/src/types/product/Product";
import { StateCreator } from "zustand";
export type CartType = {
    products: Product[];
    orderType: 'Delivery' | 'Pickup';
    paymentId: number;
    addressId: number |null;
};

export type CartState = {
    cart: CartType;
    addProduct: (product: Product) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    removeProduct: (productId: number) => void;
    removeCart: () => void;
    addOption: (product: Product) => void;
    deleteOption: (productId: number, modifireId: number, modifireOption: number) => void;
    getProductOptions: (productId: number) => Option[] | null;
    getTotalProducts: () => number; // New method to get total unique products
    changeOrderType: (orderType: 'Delivery' | 'Pickup') => void; // New method
    totalPrice: () => number;
    setAddressId: (IdAddress: number) =>void;
    setPaymentId:(IdPayment: number) =>void;
};export const createCartSlice: StateCreator<CartState> = (set, get) => ({
    cart: {
        products: [],
        orderType: 'Delivery', // Default value
        paymentId: 0,
        addressId: null,
    },
    
    addProduct: (product) => {
        const { cart } = get();
        const alreadyInCart = cart.products.find((p) => p.id === product.id);
        if (alreadyInCart) return get().increaseQuantity(product.id);
        
        set({ cart: { ...cart, products: [{ ...product, quantity: 1 }, ...cart.products] } });
    },
    
    increaseQuantity: (productId) => {
        const { cart } = get();
        const updatedProducts = cart.products.map((p) =>
            p.id === productId
                ? { ...p, quantity: (p.quantity || 0) + 1 }
                : p
        );
        set({ cart: { ...cart, products: updatedProducts } });
    },
    
    decreaseQuantity: (productId) => {
        const { cart } = get();
        const updatedProducts = cart.products.reduce((acc, p) => {
            if (p.id === productId) {
                if (p.quantity > 1) {
                    acc.push({ ...p, quantity: p.quantity - 1 });
                }
            } else {
                acc.push(p);
            }
            return acc;
        }, [] as Product[]);

        set({ cart: { ...cart, products: updatedProducts } });
    },
    
    removeProduct: (productId) => {
        const { cart } = get();
        const updatedProducts = cart.products.filter((p) => p.id !== productId);
        set({ cart: { ...cart, products: updatedProducts } });
    },
    
    removeCart: () => set({ cart: { products: [], orderType: 'Delivery', paymentId: 0, addressId: 0 } }),

    addOption: (product: Product) => {
        const { cart } = get();
        const existingProductIndex = cart.products.findIndex(p => p.id === product.id);
        
        if (existingProductIndex !== -1) {
            const existingProduct = cart.products[existingProductIndex];
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

            const updatedProducts = cart.products.map((p, index) => 
                index === existingProductIndex ? updatedProduct : p
            );

            set({ cart: { ...cart, products: updatedProducts } });
            console.log("Updated Cart:", updatedProducts);
        } else {
            const newProduct: Product = {
                ...product,
                options: product.options,
            };

            set({ cart: { ...cart, products: [...cart.products, newProduct] } });
            console.log("Updated Cart:", [...cart.products, newProduct]);
        }
    },
    
    deleteOption: (productId, modifireId, modifireOption) => {
        const { cart } = get();
        const updatedProducts = cart.products.map((p) => {
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
    
        set({ cart: { ...cart, products: updatedProducts } });
    },

    getProductOptions: (productId) => {
        const { cart } = get();
        const product = cart.products.find(p => p.id === productId);
        console.log("im in getProductOptions", product?.options);
        return product ? product.options : null; 
    },

    // New method to get total unique products
    getTotalProducts: () => {
        const { cart } = get();
        return cart.products.length; // Return the count of unique products
    },
    changeOrderType: (orderType) => {
        const { cart } = get();
        set({ cart: { ...cart, orderType } });
    },    totalPrice: () => {
        const { cart } = get();
        return cart.products.reduce((total, product) => {
            const productPrice = product.price || 0; // Ensure price is defined
            const productQuantity = product.quantity || 1; // Default to 1 if quantity is undefined
            return total + productPrice * productQuantity;
        }, 0);
    },
    setAddressId: (idNumber: number) => {
        const { cart } = get();
        set({ cart: { ...cart, addressId: idNumber } });
    },

    setPaymentId: (IdPayment: number) => {
        const { cart } = get();
        set({ cart: { ...cart, paymentId: IdPayment } });
    },
});