import React from "react";
import { 
    View, 
    Text,
    Image,
} from "react-native";

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from "../../components/buttonIcon";
import { styles } from './styles';

export function SignIn(){
  return(
      <View style={styles.container}>
        <Image 
            source={IllustrationImg}
            style={styles.image}
        />

        <View style={styles.content}>
            <Text style={styles.title}>
                Organize{'\n'} 
                suas jogatinas{'\n'} 
                facilmente
            </Text>
            <Text style={styles.subtitle}>
                Crie grupos para jogar games{'\n'}
                favoritos com seus amigos
            </Text>

            <ButtonIcon 
                title="Entrar com Discord"
                activeOpacity={0.80}
            />
        </View>
      </View>
  )
}