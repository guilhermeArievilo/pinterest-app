import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pressable: {
    paddingBottom: 8
  },
  pressableSelected: {
    borderBottomWidth: 4,
    borderBottomColor: theme.colors.white
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fontFamily.medium
  }
})