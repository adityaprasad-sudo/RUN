import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* This hides the default top header bar so you can build your own */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}