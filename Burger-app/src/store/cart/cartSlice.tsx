import { StateCreator } from "zustand";

export type Option = {
    modifireId: number;
    modifireOption: number;
};

export type Product = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
    options: Option[];
};

export type CartState = {
    cart: Product[];
    addProduc: (product: Product) => void;
    increasQuantity: (product: Product) => void;
    decreasQuantity: (product: Product) => void;
    removeProduct: (product: Product) => void;
    removeCart: () => void;
    addOption: (productId: number, modifireId: number, modifireOption: number) => void;
    deleteOption: (productId: number, modifireId: number, modifireOption: number) => void; // New method
};

export const createCartSlice: StateCreator<CartState> = (set, get) => ({
    cart: [],
    addProduc: (product) => {
        const { cart } = get();

        const alreadyInCart = cart.find((p) => p.id === product.id);

        if (alreadyInCart) return get().increasQuantity(product);

        set({ cart: [product, ...cart] });
    },
    increasQuantity: (product) => {
        const { cart } = get();
        const updatedCart = cart.map((p) =>
            p.id === product.id
                ? { ...p, quantity: (p.quantity || 0) + 1 }
                : p
        );
        set({ cart: updatedCart });
    },
    decreasQuantity: (product) => {
        const { cart } = get();
        const updatedCart = cart.map((p) =>
            p.id === product.id && (p.quantity || 0) > 0
                ? { ...p, quantity: (p.quantity || 0) - 1 }
                : p
        );

        set({ cart: updatedCart });
    },
    removeProduct: (product) => {
        const { cart } = get();
        const updatedCart = cart.filter((p) => p.id !== product.id);
        set({ cart: updatedCart });
    },
    removeCart: () => set({ cart: [] }),

    addOption: (productId, modifireId, modifireOption) => {
        const { cart } = get();
        const updatedCart = cart.map((p) => {
            if (p.id === productId) {
                 const existingOptionIndex = p.options.findIndex(
                    (option) => option.modifireId === modifireId && option.modifireOption === modifireOption
                );

                if (existingOptionIndex !== -1) {
                     const updatedOptions = p.options.filter((_, index) => index !== existingOptionIndex);
                    return { ...p, options: updatedOptions };
                } else {
                     return {
                        ...p,
                        options: [...p.options, { modifireId, modifireOption }],
                    };
                }
            }
            return p;  
        });

        set({ cart: updatedCart });
    },

    deleteOption: (productId, modifireId, modifireOption) => {
        const { cart } = get();
        const updatedCart = cart.map((p) => {
            if (p.id === productId) {
                 const updatedOptions = p.options.filter(
                    (option) => !(option.modifireId === modifireId && option.modifireOption === modifireOption)
                );
                return { ...p, options: updatedOptions };
            }
            return p;  
        });

        set({ cart: updatedCart });
    },
});