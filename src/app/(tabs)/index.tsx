import { theme } from '@/theme'
import { StyleSheet, Text, View } from 'react-native'

import { FILTERS } from "@/utils/filtes";
import { useState } from 'react';
import { Filters } from '@/components/filters';
import { Posts } from '@/components/posts';
import { POSTS } from "@/utils/posts";


export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>(FILTERS[0])
  return (
    <View style={styles.container}>
      <Filters
        filters={FILTERS}
        selectedFilter={selectedFilter}
        onChange={(filter) => setSelectedFilter(filter)}
      />
      <Posts posts={POSTS}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    padding: 12,
    paddingTop: 52
  },
  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold
  }
})