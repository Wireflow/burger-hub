import { insertroductFavorite } from '@/src/mutations/product/insertroductFavorite';
import { useSessionStore } from '@/src/store/useSessionStore';
import { EvilIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useGetFavoriteProductsByUserIdWithProductId } from '@/src/queries/products/getProductFavoriteById';
import { deleteProductFavorite } from '@/src/mutations/product/deleteProductFavorite';
import { useCustomToast } from '@/src/hooks/useCustomToast';

function AddProductFavorite() {
    const { id } = useLocalSearchParams();
    const { session } = useSessionStore();
    const showToast = useCustomToast();

    const { data: favorite, refetch, isFetched, isFetching, isFetchedAfterMount } = 
        useGetFavoriteProductsByUserIdWithProductId(Number(id), session?.id || '');

    const insertToFavorite = async () => {
        try {
            await insertroductFavorite(Number(id), session?.id || '');
            await refetch();
            showToast("Added successfully!", { type: "success" });

        } catch (error) {
            console.error("Error adding to favorites:", error);
        }
    };

    const newFavorite = () => {
        Alert.alert(
            'Confirmation',
            'Do you want to add this to your favorites?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
                { text: 'OK', onPress: insertToFavorite }, 
            ],
        );
    };

    const deleteToFavorite = async () => {
        try {
            console.log("in deleteToFavorite");
            await deleteProductFavorite(Number(id), session?.id || '');
            await refetch();
            showToast("Deleted Successfully", { type: "warning" });

        } catch (error) {
            console.error("Error deleting from favorites:", error);
        }
    };

    const deleteFavorite = () => {
        Alert.alert(
            'Confirmation',
            'Do you want to delete this from your favorites?',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
                { text: 'OK', onPress: deleteToFavorite },  
            ],
        );
    };

    useEffect(() => {
        refetch();
    }, [id]);

    return (
        <>
            {isFetching && ( <ActivityIndicator size="small" color="#AF042C" />)}

            {   isFetchedAfterMount && (
                favorite?.length === 0 ? (
                    <EvilIcons name="heart" size={40} color="black" onPress={newFavorite} />
                ) : (
                    <AntDesign name="heart" size={30} onPress={deleteFavorite} color="#AF042C" />
                )
            )}
            
         </>
    );
}

export default AddProductFavorite;