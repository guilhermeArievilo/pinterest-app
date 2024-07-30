import { Pressable, PressableProps, Text } from "react-native";
import { FilterProps } from "./filter";
import { styles } from "./style";

export function Filter({ selected, filter, ...rest }: PressableProps & FilterProps) {
  return (
    <Pressable {...rest} style={[styles.pressable, selected && styles.pressableSelected]}>
      <Text style={styles.text}>{filter}</Text>
    </Pressable>
  )
}
