import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';
import PaymentCard from './PaymentCard';
import PayPalCard from './PayPalCard';
import LoadingIndicator from './LoadingIndicator';
import ErrorText from './ErrorText';
import { useGetUserPaymentMethods } from '../../../../../queries/products/gitAllPayment';
import { useGetUserPayPalPaymentMethods } from '../../../../../queries/products/getAllPayPalPaymentMethods';
import { deleteVisaOrSuperVisaPayment, deletePayPalPayment } from '../../../../../queries/products/deletePayment';
import styles from '../../../../ui/styles';

const PaymentMethodsScreen: React.FC = () => {
    const { data: paymentMethods, error: paymentError, isLoading: paymentLoading, refetch: refetchPaymentMethods } = useGetUserPaymentMethods();
    const { data: paypalPaymentMethods, error: paypalError, isLoading: paypalLoading, refetch: refetchPayPalMethods } = useGetUserPayPalPaymentMethods();

    const [translateX] = useState<{ [key: number]: Animated.Value }>({});
    const [isSwiped, setIsSwiped] = useState<{ [key: number]: boolean }>({});

    const handleSwipe = (id: number, translationX: number) => {
        if (!translateX[id]) {
            translateX[id] = new Animated.Value(0);
        }

        if (translationX < -100) {
            Animated.timing(translateX[id], {
                toValue: -100,
                duration: 200,
                useNativeDriver: true,
            }).start(() => setIsSwiped((prev) => ({ ...prev, [id]: true })));
        } else {
            Animated.spring(translateX[id], {
                toValue: 0,
                useNativeDriver: true,
            }).start(() => setIsSwiped((prev) => ({ ...prev, [id]: false })));
        }
    };

    const handleDelete = async (id: number, methodType?: string) => {
        try {
            console.log(`Payment method ID: ${id}`);
            if (methodType === 'Visa' || methodType === 'Super Visa') {
                await deleteVisaOrSuperVisaPayment(id);
            } else if (methodType === 'PayPal') {
                await deletePayPalPayment(id);
            }

            refetchPaymentMethods();
            refetchPayPalMethods();
        } catch (error) {
            console.error('Error deleting payment method:', error);
        }
    };

    if (paymentLoading || paypalLoading) {
        return <LoadingIndicator />;
    }

    if (paymentError) {
        return <ErrorText message={paymentError.message} />;
    }

    if (paypalError) {
        return <ErrorText message={paypalError.message} />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>paymentMethods</Text>

            {paymentMethods?.map((method) => (
                <PaymentCard
                    key={method.id}
                    method={method}
                    translateX={translateX}
                    isSwiped={isSwiped}
                    handleSwipe={handleSwipe}
                    handleDelete={handleDelete}
                />
            ))}

            {paypalPaymentMethods?.map((method) => (
                <PayPalCard
                    key={method.id}
                    method={method}
                    translateX={translateX}
                    isSwiped={isSwiped}
                    handleSwipe={handleSwipe}
                    handleDelete={() => handleDelete(method.id, 'PayPal')}
                />
            ))}
        </View>
    );
};

export default PaymentMethodsScreen;
