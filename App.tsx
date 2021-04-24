import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import * as Notifications from 'expo-notifications';
import Routes from './src/routes';
import { PlantProps } from './src/libs/storage';

//executar: json-server ./src/services/server.json --host 192.168.0.116 --port 3333 //para que a fakeAPI esteja acessível
//executar: expo start

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      });

    return () => subscription.remove();

    //Recupera todas as notificações que estão agendadas
    //async function notifications() {
    //  const data = await Notifications.getAllScheduledNotificationsAsync();
    //  console.log("NOTIFICAÇÕES AGENDADAS ##########");
    //  console.log(data);
    //}

    //Cancela todas as notificações que estão agendadas
    //async function notifications() {
    //  await Notifications.cancelAllScheduledNotificationsAsync();
    //}

    //notifications();
  }, [])

  //Enquanto a fonte não for carregada, dá uma segurada com a splash screen
  if (!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  )
}