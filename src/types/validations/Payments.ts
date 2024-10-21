import { PaymentType } from "@/src/store/cart/cartSlice";

export interface PaymentMethodPayPal {
    account_name: string;
    created_at: string;  
    deletedAt: string | null;
    email: string;
    id: number;
    is_deleted: boolean | null;
    method_type: PaymentType;
    phone_number: string;
    updatedAt: string | null;
    user_id: string;
}

export interface PaymentMethodVisa {
    card_cvc: number;
    card_number: string;
    created_at: string;  
    deletedAt: string | null;
    expire_date: string;  
    id: number;
    is_deleted: boolean | null;
    method_type: PaymentType;
    updatedAt: string | null;
    user_id: string;
}

 export interface PaymentMethodsResponse {
    payment_method_paypal: PaymentMethodPayPal[] | null; 
    payment_method_visa_super_visa: PaymentMethodVisa[] | null;  
}