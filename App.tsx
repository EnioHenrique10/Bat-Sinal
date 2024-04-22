import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';


import { Routes } from './src/Routes';


export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar 
        barStyle="light-content"
       backgroundColor='transparent'
       translucent
      />
      <Routes />
      
      
    </NativeBaseProvider>
  );
}
