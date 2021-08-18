import { processColor } from "react-native";

export const DATA = [
   {
      name: "HGHj",
      color: "White",
      size: "XS",
      brand: "Longsleeve Women",
      amount: 3,
      picture: "https://images.ua.prom.st/1613912342_kofta-zhenskaya-trikotazhnaya.jpg",
   },
   {
      name: "123SDS",
      color: "White",
      size: "S",
      brand: "Longsleeve Women",
      amount: 3,
      picture: "https://images.ua.prom.st/1613912342_kofta-zhenskaya-trikotazhnaya.jpg",
   },
   {
      name: "BFD23",
      color: "White",
      size: "XL",
      brand: "Longsleeve Women",
      amount: 3,
      picture: "https://images.ua.prom.st/1613912342_kofta-zhenskaya-trikotazhnaya.jpg",
   },
];

export const CHART_DATA = {
   dataSets: [{
      values: [{ y: 100 }, { y: 105 }, { y: 102 }, { y: 110 }, { y: 114 }, { y: 109 }, { y: 105 }, { y: 99 }, { y: 95 }],

      config: {
         color: processColor("#ff955f"),
         barShadowColor: processColor("lightgrey"),
         highlightAlpha: 90,
         highlightColor: processColor("red"),
      },
      label: "Bar dataSet",
   }],
};
