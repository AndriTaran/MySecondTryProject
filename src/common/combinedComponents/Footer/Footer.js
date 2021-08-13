import {Block} from "../../simpleComponents/Block";
import {Button} from "../../simpleComponents/Button";
import React from "react";
import {Text} from "../../simpleComponents/Text";


const Footer = ({text, err}) => {
    return (
        <Block justifyContent={'center'}
               flexDirection={'row'}
               width={'100%'}
               pt={'20px'}
               pb={'40px'}>
            <Block justifyContent={'center'}
                   pt={'15px'}
                   pb={'15px'}
                   bc={err?"#B51B44":null}
                   borderBottomCollor={'#618296'}
                   borderTopCollor={'#618296'}
                   borderLeftCollor={'#618296'}
                   borderRightCollor={'#618296'}
                   borderBottomWidth={'1px'}
                   borderTopWidth={'1px'}
                   borderRightWidth={'1px'}
                   borderLeftWidth={'1px'}
                   width={'85%'}
                   borderRadius={'5px'}>
                <Button>
                    <Text fontSize={'18px'} color={err?"white":'#315B75'}>{text}</Text>
                </Button>
            </Block>
        </Block>
    )
}

export default Footer
