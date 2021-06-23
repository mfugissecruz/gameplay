import React from 'react';
import { ImageBackground, View, Text, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import {styles} from './styles';
import BannerImg from '../../assets/banner.png';
import { theme } from '../../global/styles/theme';


import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { ButtonIcon } from '../../components/buttonIcon';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';



export function AppointmentDetails(){
    const members =[
        {
            id: '1',
            username: 'Marcelo',
            avatar_url: 'https://github.com/marcelofcruz.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Angel',
            avatar_url: 'https://github.com/marcelofcruz.png',
            status: 'offline'
        },
        {
            id: '3',
            username: 'Nathan',
            avatar_url: 'https://github.com/marcelofcruz.png',
            status: 'online'
        },
        {
            id: '4',
            username: 'Elisa',
            avatar_url: 'https://github.com/marcelofcruz.png',
            status: 'offline'
        },
    ]
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto 
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
        <ImageBackground 
            source={BannerImg}
            style={styles.banner}
        >
            <View style={styles.bannerContent}>
                <Text style={styles.title}> 
                    Lendários 
                </Text>
                <Text style={styles.subtitle}> 
                    É hoje que vamos chegar ao challenger sem perder uma partida da m10
                </Text>
            </View>
        </ImageBackground>
        <ListHeader 
            title="Jogadores"
            subtitle={"Total " + members.length}
        />
        <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida"/>
      </View>
        </Background>
    );
};