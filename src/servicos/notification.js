import messaging from '@react-native-firebase/messaging';
import { auth } from "../config/firebase";
import { salvarDados } from './firestore';

export async function permissoesDoUsuario() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

export async function pegarToken(){
    const token = await messaging().getToken()
    const userId = auth.currentUser.uid
    await salvarDados('tokens',{
        userId: userId,
        token: token
    })
    console.log(token)
}


export async function iniciarNotificacao(setNotifications){
  permissoesDoUsuario();
  pegarToken();

  messaging().onMessage( async mensagem => {
    console.log(mensagem)
    setNotifications((notifications) => [
        ...notifications, mensagem.notification
    ])
  })

  messaging().setBackgroundMessageHandler( async mensagem => {
      console.log('Mensagem em background: ', mensagem)
      setNotifications((notifications) => [
          ...notifications, mensagem.notification
      ])
  })
}