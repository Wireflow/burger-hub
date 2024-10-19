import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
<<<<<<< HEAD:Burger-app/app/(drawer)/FavoriteScreen.tsx
import Favorites from '@/src/components/Favorite/Favorite'
import Header from '@/src/components/ui/Header'

const FavoriteScreen = () => {
=======
 import CardWrapper from '../../src/components/ui/card/CardWrapper'; 
import NotFound from '@/src/components/notFound/NotFound';
import { useGetFavoriteProductsByUserId } from '@/src/queries/products/getFavorite';
import { useSessionStore } from '@/src/store/useSessionStore';
import { router } from 'expo-router';
const FavoriteScreen = () => {
  const {  session } = useSessionStore();

  const { data: favoriteProducts, isLoading, error } = useGetFavoriteProductsByUserId(session?.id || ' ');

  if (isLoading) {
    return <ActivityIndicator size="large" color="red" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
    const handlePress =() =>{
      router.replace('/(drawer)/main')
    }
>>>>>>> bb7ac8131e927eb0a19d35508835ee6b8d36e4e6:app/(drawer)/FavoriteScreen.tsx
  return (
    <>
    <Header title='Favorites' backgroundColorCode='#ffffff'/>
    <Favorites/>
    </>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({})