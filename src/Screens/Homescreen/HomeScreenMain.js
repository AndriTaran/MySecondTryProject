import React, { useState } from "react";
import { FlatList, LayoutAnimation, Platform, UIManager } from "react-native";
import SwipeableItem from "react-native-swipeable-item";
import { Block, Text, DeleteButton, Button, SafeAreaView } from "../../common/simpleComponents/index";
import { DATA } from "../../assets/data";
import { Item, Footer, Header, ButtonGroup, WarehouseInfo, ListTitle } from "../../common/combinedComponents/index";

if (Platform.OS === "android") {
   UIManager.setLayoutAnimationEnabledExperimental &&
   UIManager.setLayoutAnimationEnabledExperimental(true);
}

const HomeScreenMain = () => {

   const [data, setData] = useState(DATA);

   const deleteData = (item) => {
      const updateData = data.filter((i) => i !== item);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      setData(updateData);
   };

   const renderUnderlayLeft = ({ item }) => (
      <DeleteButton>
         <Button onPressOut={() => deleteData(item)}>
            <Text color={"white"} pr={"25px"}>{`DELETE`}</Text>
         </Button>
      </DeleteButton>
   );

   const itemRef = new Map();
   const renderItem = ({ item, drag }) => (
      <SwipeableItem
         key={item.name}
         item={item}
         ref={(ref) => {
            if (ref && itemRef.get(item.key)) {
               itemRef.set(item.key, ref);
            }
         }}
         overSwipe={20}
         renderUnderlayLeft={renderUnderlayLeft}
         snapPointsLeft={[100]}
      >
         <Item picture={item.picture}
               amount={item.amount}
               brand={item.brand}
               color={item.color}
               name={item.name}
               size={item.size}
               drag={drag}
               key={item.name} />
      </SwipeableItem>
   );

   return (
      <SafeAreaView>
         <Block flexDirection={"column"} flex={1}>
            <Header />
            <ButtonGroup text={"Articles In Carton"} />
            <WarehouseInfo number={246542123579} label={9} />
            <ListTitle leftText={"ARTICLE"} rightText={"ACT"} />
            <Block flexDirection={"row"}>
               <FlatList data={data}
                         renderItem={renderItem}
                         keyExtractor={(item) => `draggable-item-${item.name}`}
               />
            </Block>
         </Block>
         <Footer text={"Pull the trigger to start reading"} />
      </SafeAreaView>
   );
};

export default HomeScreenMain;

