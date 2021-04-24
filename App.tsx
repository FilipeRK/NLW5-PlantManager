import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import Routes from './src/routes';

//executar: json-server ./src/services/server.json --host 192.168.0.116 --port 3333 //para que a fakeAPI esteja acessível
//executar: expo start

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });
  
  //Enquanto a fonte não for carregada, dá uma segurada com a splash screen
  if (!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  )
}