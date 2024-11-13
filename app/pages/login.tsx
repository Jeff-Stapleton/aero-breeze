import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';


export function FuelLoadSheetLoginPage() {
  const navigation = useNavigation();

  const handleLogin = async () => {
    navigation.navigate('Search');
  };

  return (
    <View className="flex-1 justify-between items-center bg-white">
      <View className="flex-1" />
      <View className="flex-row items-center justify-center w-11/12 m-6">
        <Image
          source={{ uri: 'https://example.com/airplane-outline-icon.png' }}
          className="h-10 w-10 mr-2"
        />
        <Text className="text-center text-5xl font-bold">
          Welcome to Fuel Load Sheet
        </Text>
      </View>
      <View className="flex-row items-center justify-center w-11/12 m-6">
        <TouchableOpacity
          className="mb-5 w-1/2 max-w-xs bg-blue-600 rounded-lg h-10 justify-center items-center"
          onPress={handleLogin}
        >
          <Text className="text-white text-lg">Sign In</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1" />
      <Text className="font-medium text-gray-600 text-base text-center mb-3">
        1.0.0
      </Text>
      <View className="flex-1" />
    </View>
  );
}

export default FuelLoadSheetLoginPage;
