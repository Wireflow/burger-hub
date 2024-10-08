import React from 'react'
import { Text } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';

const SkeletonProductDetails = () => {
    return (
        <SkeletonContent
          containerStyle={{ flex: 1, width: 300,height:200 }}
          isLoading={false}
          layout={[
            { key: 'someId', width: 220, height: 20, marginBottom: 6 },
            { key: 'someOtherId', width: 180, height: 20, marginBottom: 6 }
          ]}
        >
          <Text style={{height:50,width:50,backgroundColor:'red'}}>Your content</Text>
          <Text  >Other content</Text>
        </SkeletonContent>
      );
}

export default SkeletonProductDetails