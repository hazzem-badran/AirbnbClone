import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarActiveTintColor: "#f15454",
          headerShown: false, 
          tabBarIcon({ focused }: { focused: boolean }) {
            return (
              <Ionicons
                name="home"
                size={25}
                color={focused ? "#f15454" : "gray"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Explore",
          tabBarActiveTintColor: "#f15454",
          headerShown: false,
          tabBarIcon({ focused }: { focused: boolean }) {
            return (
              <Ionicons
                name="search"
                size={25}
                color={focused ? "#f15454" : "gray"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          title: "Save",
          tabBarActiveTintColor: "#f15454",
          headerShown: false,
          tabBarIcon({ focused }: { focused: boolean }) {
            return (
              <Ionicons
                name="save"
                size={25}
                color={focused ? "#f15454" : "gray"}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
