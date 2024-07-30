import { Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { MenuButtonProps } from "./menuButton";

export function MenuButton({ title, children }: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.iconContainer}>
        {
          children
        }
      </View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}