import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { LoadingIndicatorProps } from '../../../types/types';

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ color = 'red' }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={color} />
        </View>
    );
};

export default LoadingIndicator;
