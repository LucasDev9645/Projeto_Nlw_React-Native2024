import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";

import { Loading } from "@/components/loading";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

export default function Layout() {
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoader) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-900 pt-10">
      <Slot />
    </SafeAreaView>
  );
}
