import { View, Text, SafeAreaView } from "react-native";

const Welcome = () => {
  return (
    <SafeAreaView className="justify-center items-center flex-1">
      <View className="">
        <Text className="text-2xl text-blue-800">Welcome Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
