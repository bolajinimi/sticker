import { Stack  } from "expo-router";
import { StatusBar } from "expo-status-bar";


export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{
          title: "",
        }} />
        <Stack.Screen name="NotFound" options={{ title: "Page Not Found" }} />
      </Stack>
    </>
  );
}
