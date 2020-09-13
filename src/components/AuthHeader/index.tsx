import React, { useState, useEffect } from 'react';
import * as Style from './styles';
import { Feather } from '@expo/vector-icons'; 
import { colorWhite } from '../../assets/variables';
import { useAuth } from '../../contexts/auth';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { convertNumberToCurrency } from '../../utils/convertNumberToCurrency';
import safraService from '../../services/safra/safra';

const AuthHeader: React.FC = () => {
    const { user, signOut } = useAuth();
    const [balance, setBalance] = useState(0);

    const menuItems = [
        { text: "Objetivos", route: "Dashboard"},
        { text: "Investir", route: "Investment"},
        { text: "Safira", route: "Assistant"},
    ]

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        (async function () {
            if (user) {
                const safraBalance = await safraService.balance(user.accountId);
                setBalance(Number(safraBalance.Amount.Amount));
            }
        })()
    }, [user])

    const handleClickMenu = (navigateTo: string) => {
        navigation.navigate(navigateTo);
    }

    return <View>
      <Style.Container>
        <Style.ButtonHamburger activeOpacity={0}>
            <Feather name="menu" size={50} color={colorWhite} />
        </Style.ButtonHamburger>
        <Style.DivInfo>
                <Style.Title>Bem vindo, {user?.nickname || user?.name}</Style.Title>
                <Style.DivInline>
                    <Style.TextInfo>Saldo disponível: <Style.Price>{convertNumberToCurrency(balance)}</Style.Price></Style.TextInfo>

                    <Style.TextInfo onPress={signOut}>Sair</Style.TextInfo>
                </Style.DivInline>
            </Style.DivInfo>
        </Style.Container>
        <Style.MenuOption>
            {menuItems.map(item => (
                <Style.MenuItem 
                    key={item.route}
                    active={route.name === item.route} 
                    activeOpacity={1} 
                    onPress={() => handleClickMenu(item.route)}
                >
                    <Style.Text>{item.text}</Style.Text>
                </Style.MenuItem>
            ))}
            
        </Style.MenuOption>
    </View>
}

export default AuthHeader;

