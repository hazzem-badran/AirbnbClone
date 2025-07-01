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
          title: "Search",
          tabBarActiveTintColor: "#f15454",
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
        name="guests"
        options={{
          title: "Guests",
          tabBarActiveTintColor: "#f15454",

          tabBarIcon({ focused }: { focused: boolean }) {
            return (
              <Ionicons
                name="people"
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
