import { Stack } from "expo-router";

export default function RootLayout() {
  return(
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerTitle: 'Assignment 6 - Student Biodata',
          headerStyle: { backgroundColor: '#ffffff'},
          headerTitleStyle: { color: 'black'},
          headerTitleAlign: 'center',
        }} 
      />
    </Stack>
  )
}
