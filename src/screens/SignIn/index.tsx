import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  Image,  
  StatusBar,
  Animated,
  Easing
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

export function SignIn(){
  const [position, setPosition] = useState(new Animated.Value(0));

  const mooveLR = () => {
    Animated.timing(position, {
      toValue: 100,
      duration: 3000, 
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }
  
  const mooveRL = () => {
    Animated.timing(position, {
      toValue: 0,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true
    }).start();
  }
  

  useEffect(() => {
    mooveLR()
  });

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content"backgroundColor="transparent"translucent />
      <Animated.Image  source={IllustrationImg} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>

        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {`\n`}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`} 
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />

      </View>
    </View>
  );
}