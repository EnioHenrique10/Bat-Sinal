import { HStack, Heading,VStack,  IInputProps, ScrollView, Text } from "native-base"
import batmanLgo from "../assets/batmann.png"
import { UserPhoto } from "./UserPhoto"
import { TouchableOpacity } from "react-native"
import React from "react"
import { Input } from "./Input"
import { Button } from "./Butonn"
import { useNavigation } from "@react-navigation/native"
import { AuthNavigatorRoutesProps } from "../Routes/auth.routes"




export function Registrar(){

    const navigation = useNavigation< AuthNavigatorRoutesProps>()

    function handleNewAccount(){
     navigation.navigate('home')
    }
 

    return(

        <>
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false} >
        <HStack bg="blueGray.500" pt={16} pb={5} px={8} mb={20}  alignItems="center">
            <UserPhoto
                source={batmanLgo}
                alt="Log"
                size={16}
                mr={40} />
            <VStack>
                <TouchableOpacity>
                    
                <Heading color="white" onPress={handleNewAccount}>
                    Voltar
                </Heading>
                </TouchableOpacity>
            </VStack>
           </HStack>
             <VStack px={9}>
    
              <Input placeholder="Text" />
              <Input placeholder="Text"/>
               

              <Text color='black'>
               label
              </Text>
              <Input 
               placeholder="Text"
               h={150}
              />
              <Text color="black">
               label
              </Text>
            <Input 
               placeholder="Text"
               h={150}
              />

           <Button 
              
              title="Enviar"
             />
            </VStack>
             
            
            </ScrollView>
            </>

      
    )
}