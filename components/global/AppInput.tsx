import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Platform,
  Keyboard,
} from "react-native";

import { InputFieldProps } from "@/lib/types";

const AppInput = ({
  label,
  labelStyle,
  inputStyle,
  icon,
  iconStyle,
  containerStyle,
  secureTextEntry = false,
  placeholder,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text
            className={`text-lg font-serif font-semibold mb-1 ${labelStyle}`}
          >
            {label}
          </Text>
          <View
            className={`flex flex-row items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 justify-start ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              className={`rounded-full p-4 font-sans font-semibold text-[15px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AppInput;