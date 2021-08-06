import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  LayoutAnimation,
  TouchableOpacity,
  Platform,
  UIManager,
} from 'react-native';
import Animated from 'react-native-reanimated';
import SwipeableItem, { UnderlayParams } from 'react-native-swipeable-item';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
const { multiply, sub } = Animated;

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const OVERSWIPE_DIST = 20;
const NUM_ITEMS = 20;
function getColor(i: number) {
  const multiplier = 255 / (NUM_ITEMS - 1);
  const colorVal = i * multiplier;
  return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

type Item = {
  key: string;
  text: string;
  backgroundColor: string;
  height: number;
};

const initialData: Item[] = [...Array(NUM_ITEMS)].fill(0).map((d, index) => {
  const backgroundColor = getColor(index);
  return {
    text: `ROW ${index}`,
    key: `key-${backgroundColor}`,
    backgroundColor,
    height: 100,
  };
});

class Test extends React.Component {
  state = {
    data: initialData,
  };

  itemRefs = new Map();

  deleteItem = (item: Item) => {
    const updatedData = this.state.data.filter((d) => d !== item);
    // Animate list to close gap when item is deleted
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ data: updatedData });
  };

  renderUnderlayLeft = ({ item, percentOpen }: UnderlayParams<Item>) => (
    <Animated.View
      style={[styles.underlayLeft,{ opacity: percentOpen }]} // Fade in on open
    >
      <TouchableOpacity  onPressOut={() => this.deleteItem(item)}>
        <Text style={styles.red}>{`[x]`}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPressOut={() => this.deleteItem(item)}>
        <Text style={styles.blue}>{`[Y]`}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPressOut={() => this.deleteItem(item)}>
        <Text style={styles.red}>{`[Z]`}</Text>
      </TouchableOpacity>
    </Animated.View>
  );


  renderItem = ({ item, index, drag }: RenderItemParams<Item>) => {
    return (
      <SwipeableItem
        key={item.key}
        item={item}
        ref={(ref) => {
          if (ref && !this.itemRefs.get(item.key)) {
            this.itemRefs.set(item.key, ref);
          }
        }}
        overSwipe={100}
        renderUnderlayLeft={this.renderUnderlayLeft}
        snapPointsLeft={[50, 100, 150]}
      >
        <View
          style={[
            styles.row,
            { backgroundColor: item.backgroundColor, height: item.height },
          ]}>
          <TouchableOpacity onPressIn={drag}>
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
        </View>
      </SwipeableItem>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <DraggableFlatList
          scrollEnabled={false}
          keyExtractor={(item) => item.key}
          data={this.state.data}
          renderItem={this.renderItem}
          onDragEnd={({ data }) => this.setState({ data })}
          activationDistance={20}
        />
      </View>
    );
  }
}

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 32,
  },
  red: {
    color: 'white',
    backgroundColor: 'red',
    width: 50,
    height: '100%'
  },
  blue: {
    color: 'white',
    backgroundColor: 'blue',
    width: 50,
    height: '100%'
  },
  underlayLeft: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  },
});
