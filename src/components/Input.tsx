import {Input as NativeBaseInput, IInputProps, Text} from "native-base"

export function Input({...rest}: IInputProps){
    return(
        <>
       <NativeBaseInput 
         bg="gray.700"
         h={12}
         px={4}
         borderWidth={0}
         fontSize="md"
         color="white"
         fontFamily="body"
         mb={6}
         {...rest}
       />
        
    
      
       </>
    )
}