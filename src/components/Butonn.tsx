import {Button as ButtonNativeBase, IButtonProps, Text} from 'native-base'

type Props = IButtonProps & {
    title: string;
}

export function Button({title, ...rest}: Props){
    return(
        <ButtonNativeBase 
         w="80"
         h={20}
         bg="black"
         rounded="sm"
         _pressed={{
            bg: "green.900"
         }}
        {...rest}>

            <Text 
             color="white" 
             fontFamily="heading" 
             fontSize="sm"
             
             >
              {title}
            </Text>

        </ButtonNativeBase>
        
    )
}