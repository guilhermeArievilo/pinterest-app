import { Text, View } from "react-native";
import { styles } from "./styles";
import BottomSheet from "@gorhom/bottom-sheet";
import { forwardRef } from "react";
import { MenuProps } from "./type";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { theme } from "@/theme";
import { MenuButton } from "../menuButton";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ toggleMenu }, ref) => {
  return (
    <BottomSheet
      ref={ref}
      index={0}
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={() => null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome
            color={theme.colors.white}
            name="close"
            size={24}
            onPress={toggleMenu}
          />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>

        <View style={styles.options}>
          <MenuButton title="Pin">
            <FontAwesome name="thumb-tack" size={32} color={theme.colors.white}/>
          </MenuButton>
          
          <MenuButton title="Colagem">
            <FontAwesome name="paste" size={32} color={theme.colors.white}/>
          </MenuButton>
          
          <MenuButton title="Pasta">
            <FontAwesome name="folder" size={32} color={theme.colors.white}/>
          </MenuButton>
        </View>
      </View>
    </BottomSheet>
  )
})