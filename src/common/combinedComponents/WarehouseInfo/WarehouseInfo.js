import {Block} from "../../simpleComponents/Block";
import BoxIcon from "../../../assets/icons/closed-cardboard-box.svg";
import {Text} from "../../simpleComponents/Text";
import LabelIcon from "../../../assets/icons/price-label-svgrepo-com.svg";
import React from "react";

const WarehouseInfo = ({number, label}) =>(
    <Block pt={'10px'}
           pb={'10px'}
           bc={'#E5E5E5'}
           borderBottomCollor={'grey'}
           borderTopCollor={'grey'}
           flexDirection={'row'}
           width={'100%'}
           borderBottomWidth={'1px'}
           borderTopWidth={'1px'}>
        <Block width={"50%"}
               justifyContent={'flex-start'}
               pl={'10px'}
               flexDirection={'row'}>
            <BoxIcon width={20}
                     height={20}
                     fill={'black'}/>
            <Text pl={'5px'} color={'black'}>{number}</Text>
        </Block>
        <Block width={'50%'}
               justifyContent={'flex-end'}
               pr={'10px'}
               flexDirection={'row'}>
            <LabelIcon width={"20px"}
                       height={"20px"}
                       fill={'black'}/>
            <Text pl={'5px'} color={'black'}>{label}</Text>
        </Block>
    </Block>
)

export default WarehouseInfo
