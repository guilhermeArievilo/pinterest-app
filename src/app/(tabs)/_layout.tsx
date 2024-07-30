import { Avatar } from "@/components/avatar";
import { theme } from "@/theme";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Menu } from "@/components/menu"
import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";

export default function TabLayout() {
  const buttomSheetRef = useRef<BottomSheet>(null)

  const handleBottomSheetOpen = () => buttomSheetRef?.current?.expand()
  const handleBottomSheetClose = () => buttomSheetRef?.current?.snapToIndex(0)

  return (
    <View style={{ flex: 1 }}>
      <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderColor: theme.colors.black,
        },
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray[600]
      }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              if (focused) {
                return (
                  <Ionicons name="home" size={size} color={color}/>
                )
              }
              return (
                <Ionicons name="home-outline" size={size} color={color}/>
              )
            }
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              if (focused) {
                return (
                  <Ionicons name="search" size={size} color={color}/>
                )
              }
              return (
                <Ionicons name="search-outline" size={size} color={color}/>
              )
            }
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              return (
                <FontAwesome5 name="plus" size={size} color={color}/>
              )
            }
          }}
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault()
              handleBottomSheetOpen()
            }
          })}
        />
        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({ size, color, focused }) => {
              if (focused) {
                return (
                  <Ionicons name="chatbubble-ellipses" size={size} color={color}/>
                )
              }

              return (
                <Ionicons name="chatbubble-ellipses-outline" size={size} color={color}/>
              )
            }
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => (
              <Avatar
                selected={color === theme.colors.white}
                source={{
                  uri: 'https://github.com/guilhermeArievilo.png'
                }}
              />
            )
          }}
        />
      </Tabs>
      <Menu ref={buttomSheetRef} toggleMenu={() => handleBottomSheetClose()}/>
    </View>
  )
}

const style = StyleSheet.create({

})