import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerTitle: 'Assignment 1 - Nama dan Nim',
          headerStyle: { backgroundColor: '#000000'},
          headerTitleStyle: { color: 'white'},
          headerTitleAlign: 'center',
        }} 
      />
    </Stack>
  )
}
