import { StyleSheet, View ,Text} from 'react-native';
import React,{useState} from 'react';
 import NotFound from '../notFound/NotFound';
import CardWrapper from '../ui/card/CardWrapper';

const Favorite = () => {
    const [s,SetS]=useState(false)
    const handlePress = () => {
        console.log('Button Pressed');
      };
    if (s){
        return (
            <View style={styles.container}>
            <Text style={styles.t}>Favorite</Text>
              <View style={styles.row}>
                <CardWrapper
                  height={190}
                  width={160}
                  title='Burger'
                  price='$99.90'
                  imageSource={require('@/assets/images/dd.jpeg')}
                  id={1}
                />
                <CardWrapper
                  height={190}
                  width={160}
                  title='Burger'
                  price='$99.90'
                  imageSource={require('@/assets/images/dd.jpeg')}
                  id={1}

                />
              </View>
              <View style={styles.row}>
                <CardWrapper
                  height={190}
                  width={160}
                  title='Burger'
                  price='$99.90'
                  imageSource={require('@/assets/images/dd.jpeg')}
                  id={1}

                />
                <CardWrapper
                  height={190}
                  width={160}
                  title='Burger'
                  price='$99.90'
                  imageSource={require('@/assets/images/dd.jpeg')}
                  id={1}

                />
              </View>
            </View>
          );
    }else {
        return <NotFound
        
        icon="heart-o" 
        message1="No favorites"
        message2="Choose your favorite items by hitting the heart"
        buttonTitle="Start browsing"
        onButtonPress={handlePress} 
    
        />
    }

};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    padding: 10, 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 10, 
  },
  t:{
    fontSize:40
  }
});