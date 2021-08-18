import React from "react";
import { processColor } from "react-native";
import { BarChart } from "react-native-charts-wrapper";
import { Block, SafeAreaView } from "../../common/simpleComponents/index";
import { CHART_DATA } from "../../assets/data";
import { Header, ButtonGroup } from "../../common/combinedComponents/index";

const HomeScreenMain = () => {
const data = CHART_DATA
   console.log(data)
   return (
      <SafeAreaView>
         <Block flex={1}>
            <Header />
            <ButtonGroup text={"CHARTS"} />
            <Block flex={1} width={"100%"}>
               <BarChart
                  style={{ flex: 1, width: "100%"}}
                  data={data}
                  xAxis={{
                     valueFormatter: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
                     granularityEnabled: true,
                     granularity: 1,
                  }}
                  animation={{ durationX: 2000 }}
                  legend={{
                     enabled: true,
                     textSize: 14,
                     form: "SQUARE",
                     formSize: 14,
                     xEntrySpace: 10,
                     yEntrySpace: 5,
                     formToTextSpace: 5,
                     wordWrapEnabled: true,
                     maxSizePercent: 0.5,
                  }}
                  gridBackgroundColor={processColor("#ffffff")}
                  visibleRange={{ x: { min: 5, max: 5 } }}
                  drawBarShadow={false}
                  drawValueAboveBar={true}
                  drawHighlightArrow={true}
                  highlights={[{ x: 3 }, { x: 6 }]}
                  onChange={(event) => console.log(event.nativeEvent)}
               />
            </Block>
         </Block>
      </SafeAreaView>
   );
};

export default HomeScreenMain;
