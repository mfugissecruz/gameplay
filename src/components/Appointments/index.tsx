import React from "react" /*'react-native/node_modules/@types/react';*/
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { GuildProps } from '../Guild';
import { GuildIcon } from '../GuildIcon';
import { categories } from '../../utils/categories';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props) {
    const [category] = categories.filter(category => category.id === data.category);
    const {secondary50, secondary70} = theme.colors;
    const { owner } = data.guild;
    const { primary, on } = theme.colors;

    return (
        <RectButton {...rest}>
            <View style={styles.container}>
                <LinearGradient
                    style={styles.guildIconContainer}
                    colors = {[secondary50, secondary70]}
                >
                    <GuildIcon guildId={data.guild.id} iconId={data.guild.icon}/>
                </LinearGradient>

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>

                        <Text style={styles.categories}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />

                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>

                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={owner ? primary : on} />

                            <Text style={[
                                styles.player,
                                { color: owner ? primary : on }
                            ]}>
                                {owner ? 'Anfitri??o' : 'Visitante'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    )

}