import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({title, color}) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile;


const styles = new StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150
  }
});