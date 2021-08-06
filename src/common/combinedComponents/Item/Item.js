import React from "react";
import {Block, Image, Text, Button} from "../../simpleComponents/";

const Item = ({color, size, brand, amount, picture, name, drag}) => (
    <Button onPressIn={drag} flex={1} flexDirection={'row'} bc={'white'} activeOpacity={1} >
        <Block flexDirection={'row'}
               width={'100%'}
               borderBottomCollor={'grey'}
               pt={'20px'}
               pb={'20px'}
               pl={'10px'}
               borderBottomWidth={'1px'}
        >
            <Image source={{uri: picture}}
                   height={'70px'} width={'50px'}/>
            <Block flexDirection={'column'} alignItm={'flex-start'} pl={'10px'} flex={1}>
                <Text pt={'3px'} pb={'3px'} color={'black'}>{name}</Text>
                <Text pt={'3px'} pb={'3px'} color={'black'}>{color} {size}</Text>
                <Text pt={'3px'} pb={'3px'} color={'black'}>{brand}</Text>
            </Block>
            <Block flexDirection={'row'}>
                <Block bc={'green'} width={'100px'} justifyContent={'center'} borderRadius={'10px'} flexDirection={'row'}>
                    <Text color={'white'}>{amount}</Text>
                </Block>
                <Text color={'black'}> > </Text>
            </Block>
        </Block>
    </Button>
)

export default Item
