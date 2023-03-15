import {SafeAreaView, View, Text, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';
import { HeroImage } from '../assets';
import { TouchableOpacity } from 'react-native';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="bg-white flex-1 relative">
            {/* First Section */}
            <View className="flex-row px-6 mt-8 items-center space-x-2">
                <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#00bcc9] text-3xl font-semibold">Go</Text>
                </View>
                <Text className="text-[#2a2b4b]  text-3xl font-semibold">Travel</Text>
            </View>

            {/* Second Section */}
            <View className="px-6 mt-4 space-y-2">
                <Text className="text-[#3c6072] text-[36px] ">Enjoy the trip with</Text>
                <Text className="text-[#00bcc9] text-[32px] font-bold">Good Moments</Text>

                <Text className="text-[#1b2c35]">
                    Hãy cứ vô tư và lạc quan lên em ơi ơi ơi ơi Hãy cứ vô tư và lạc quan lên em ơi ơi ơi ơiHãy cứ vô tư và 
                </Text>
            </View>
            {/* Circle Section */}
            <View className="w-[320px] h-[320px] bg-[#00bcc9] rounded-full absolute bottom-16 -right-24"></View>
            <View className="w-[320px] h-[320px] bg-[#e99265] rounded-full absolute -bottom-28 -left-24"></View>
            {/* Image container */}
            <View className="flex-1 relative items-center justify-center">
                <Animatable.Image
                animation="fadeIn"
                easing="ease-in-out"
                source={HeroImage}
                className="w-[380px] h-[500px] object-cover absolute top-0 mt-4"
                />
            <TouchableOpacity 
            onPress={() => {navigation.navigate("Discover")}}
            className="absolute bottom-20 w-[64px] h-[64px] border-l-2 border-r-2 border-t-4 border-[#00bcc9] rounded-full items-center justify-center">
                    <Animatable.View 
                    animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"}
                    className="w-[54px] h-[54px] items-center justify-center rounded-full bg-[#00bcc9]">
                        <Text className="text-gray-50 text-[28px] font-semibold">Go</Text>
                    </Animatable.View>
            </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen