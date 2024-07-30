import { FlatList } from "react-native";
import { Filter } from "../filter";
import { styles } from "./style";
import { FilterProps } from "./filters";

export function Filters({ filters, selectedFilter, onChange }: FilterProps) {
  return (
    <FlatList
      data={filters}
      keyExtractor={
        item => item
      }
      renderItem={
        ({ item: filter }) => (
          <Filter
            filter={filter}
            selected={filter === selectedFilter}
            onPress={() => onChange(filter)}
          /> 
        )
      }
      horizontal
      style={styles.list}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  )
}
