import React from 'react';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text } from 'react-native';
import { styles } from './styles';

import PlayerSvg from "../../assets/player.svg";

import { GuildIcon } from "../GuildIcon";
import { categories } from '../../utils/categories';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
  // id: number,
  name: string,
  // icon?: string,
  owner: boolean
}

export type AppointmentProps = {
  id: number;
  guild: GuildProps;
  category: number;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props){
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return(
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
            <Text style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on } />
            </Text>
          </View>
        </View>
      </View>
    </RectButton>
  );
}