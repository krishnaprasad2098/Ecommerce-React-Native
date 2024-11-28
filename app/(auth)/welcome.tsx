import { Link } from "expo-router";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

const Welcome = () => {
  return (
    <SafeAreaView className="justify-center items-center flex-1 bg-purple-300/30">
      <View className="flex flex-row justify-center items-center gap-2 mb-6">
        <Text className="text-6xl font-bold text-orange-700">MiniKart</Text>
      </View>
      <Image
        source={require("@/assets/images/welcome.png")}
        resizeMode="center"
        style={{ maxWidth: 350, maxHeight: 350 }}
        resizeMethod="auto"
      />
      <View className="grid place-content-stretch items-center mt-10">
        <Link href="/(auth)/sign-in" asChild className="px-20 py-4">
          <TouchableOpacity className="rounded-lg bg-purple-600/75">
            <Text className="text-2xl font-bold text-white">Sign In</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/(auth)/sign-up" asChild className="mt-3 px-20 py-4">
          <TouchableOpacity className="rounded-lg bg-purple-600/75">
            <Text className="text-2xl font-bold text-white">Sign Up</Text>
          </TouchableOpacity>
        </Link>
        <Text className="text-lg font-semibold text-slate-500 text-center underline underline-offset-1">
          Skip to shop
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
