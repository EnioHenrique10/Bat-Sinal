import {VStack, Image, Center} from 'native-base'

import batLogo from '../assets/batmanLogo.png'
import { Button } from '../components/Butonn'


import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '../Routes/auth.routes'



export function Home(){

  const navigation = useNavigation< AuthNavigatorRoutesProps>()

   function handleNewAccount(){
    navigation.navigate('registrar')
   }


    return(
        <VStack flex={1} bg="coolGray.700">
            <Center>
                
           <Image 
            source={batLogo}
            alt='Logo'
            my={24}

           />
            
           <Button 
            title='Active bat signal'
            onPress={handleNewAccount}
            />
            
            </Center>

        </VStack>
       
    )
}