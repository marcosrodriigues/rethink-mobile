import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Container, Logo, LogoContainer, ButtonContainer, Link } from './style';
import { Form, TextInButton } from '../../assets/global';

import logo from '../../assets/logo.png';
import RTInput from '../../components/Input';
import RTButton from '../../components/Button';
import { colorWhite, backgroundMeBallon, colorGold } from '../../assets/variables';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';

const Login: React.FC = () => {
    const [agency, setAgency] = useState('');
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, signInWithSafra } = useAuth();

    const navigation = useNavigation();

    const handleEnterButton = async () => {
        try {
            await signIn(agency, account, password);
        } catch (err) {
            Alert.alert("Hey", "Verifique suas credenciais.")
        }
    }

    const handleContinueWithSafra = async () => {
        try {
            await signInWithSafra();
        } catch (err) {
            Alert.alert("Hey", "Tente novamente.")
        }
    }

    const handleClickCreateAccount = () => {
        navigation.navigate('CreateAccount')
    }

    return (
        <Container>
            <LogoContainer>
                <Logo source={logo} />
            </LogoContainer>
            <Form>
                {/* <RTInput placeholder="Agência" value={agency} onChangeText={setAgency} />
                <RTInput placeholder="Conta" value={account} onChangeText={setAccount} />
                <RTInput placeholder="Senha eletrônica" value={password} onChangeText={setPassword} secureTextEntry /> */}

                <ButtonContainer>
                    {/* <RTButton onPress={handleEnterButton}><TextInButton>Entrar</TextInButton></RTButton> */}
                    <RTButton onPress={handleContinueWithSafra}><TextInButton color={colorGold}>Continuar com o Safra</TextInButton></RTButton>
                </ButtonContainer>

                {/* <Link onPress={handleForgotPassword}>Esqueci minha senha</Link> */}
                <Link onPress={handleClickCreateAccount}>Ainda não possuo conta</Link>
            </Form>
        </Container>
    )
}

export default Login;
