import {SafeAreaView, View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Avatar } from '../assets';


const Discover = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);


    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-row items-center justify-between px-6 mt-8">
                <View>
                    <Text className="text-[40px] text-[#0b646B] font-bold">Discover</Text>
                    <Text className="text-[#527283] text-[36px]">the beauty today</Text>
                </View>
                <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
                    <Image 
                    className="h-full w-full object-cover rounded-md"
                    source={Avatar}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Discover