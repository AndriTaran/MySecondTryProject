import {Text} from "../../simpleComponents/Text";
import {Block} from "../../simpleComponents/Block";
import React from "react";

const ListTitle = ({leftText, rightText}) =>(
    <Block pt={'15px'}
           pb={'15px'}
           borderBottomCollor={'grey'}
           flexDirection={'row'}
           width={'100%'}
           borderBottomWidth={'1px'}
           justifyContent={'space-between'}>
        <Text pl={'40px'} color={'black'}>{leftText}</Text>
        <Text pr={'40px'} color={'black'}>{rightText}</Text>
    </Block>
)

export default ListTitle
