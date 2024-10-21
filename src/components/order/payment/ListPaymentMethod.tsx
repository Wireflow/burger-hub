import React from 'react';
import { PaymentMethodsResponse, PaymentMethodVisa } from '@/src/types/validations/Payments';
import { PaymentType } from '@/src/store/cart/cartSlice';
import { useCartStore } from '@/src/store/cart/cartStore';
import Paypal from '../../ui/PaymentCard/Paypal';
import Visa from '../../ui/PaymentCard/Visa';
import SuperVisa from '../../ui/PaymentCard/SuperVisa';
import { View } from 'react-native';

type Prop = {
    dataPayments: PaymentMethodsResponse;
}

const ListPaymentMethod = ({ dataPayments }: Prop) => {
    const { setPayment, cart } = useCartStore();

    const handlePaymentSelect = (id: number, paymentType: PaymentType) => {
        setPayment(id, paymentType);
    };

    const renderPaymentMethod = (payment: PaymentMethodVisa) => {
        const { id, method_type } = payment;

        switch (method_type) {
            case PaymentType.Visa:
                return (
                    <Visa
                        key={id}
                        onClick={() => handlePaymentSelect(id, method_type)}
                        selectedPaymentType={cart?.paymentType}
                        paymentMethode={payment}
                        selectedPaymentID={cart?.paymentId}
                    />
                );
            case PaymentType.SuperVisa:
                return (
                    <SuperVisa
                        key={id}
                        onClick={() => handlePaymentSelect(id, method_type)}
                        selectedPaymentType={cart?.paymentType}
                        paymentMethode={payment}
                        selectedPaymentID={cart?.paymentId}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <View>


            {dataPayments.payment_method_paypal?.map(payment => (
                <Paypal
                    key={payment.id}
                    onClick={() => handlePaymentSelect(payment.id, payment.method_type)}
                    selectedPaymentType={cart?.paymentType}
                    paymentMethode={payment}
                    selectedPaymentID={cart?.paymentId}
                />
            ))}
           {dataPayments.payment_method_visa_super_visa?.map(renderPaymentMethod)}

        </View>
    );
}

export default ListPaymentMethod;