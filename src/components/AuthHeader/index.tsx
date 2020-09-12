import React from 'react';
import * as Style from './styles';
import { Feather } from '@expo/vector-icons'; 
import { colorWhite } from '../../assets/variables';
import { useAuth } from '../../contexts/auth';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const AuthHeader: React.FC = () => {
    const { user, signOut } = useAuth();

    const navigation = useNavigation();
    const route = useRoute();

    function handleClickMenu(navigateTo: string) {
        navigation.navigate(navigateTo);
    }

    return <View>
      <Style.Container>
        <Style.ButtonHamburguer activeOpacity={0}>
            <Feather name="menu" size={50} color={colorWhite} />
        </Style.ButtonHamburguer>
        <Style.DivInfo>
                <Style.Title>Bem vindo, {user?.name}</Style.Title>
                <Style.DivInline>
                    <Style.TextInfo>Saldo disponível: <Style.Price>R$ 1.500,00</Style.Price></Style.TextInfo>

                    <Style.TextInfo onPress={signOut}>Sair</Style.TextInfo>
                </Style.DivInline>
            </Style.DivInfo>
        </Style.Container>
        <Style.MenuOption>
            <Style.MenuItem active={route.name === "Dashboard"} activeOpacity={1} onPress={() => handleClickMenu('Dashboard')}><Style.Text>Objetivos</Style.Text></Style.MenuItem>
            <Style.MenuItem active={route.name === "Investir"} activeOpacity={1} onPress={() => handleClickMenu('Investir')}><Style.Text>Investir</Style.Text></Style.MenuItem>
            <Style.MenuItem active={route.name === "Assistente"} activeOpacity={1} onPress={() => handleClickMenu('Assistente')}><Style.Text>Assistente</Style.Text></Style.MenuItem>
        </Style.MenuOption>
    </View>
}

export default AuthHeader;

