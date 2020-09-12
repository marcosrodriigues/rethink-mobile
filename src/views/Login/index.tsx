import React from 'react';
import { Alert } from 'react-native';

import { Container, Logo, LogoContainer, ButtonContainer, Link } from './style';
import { Form, TextInButton } from '../../assets/global';

import logo from '../../assets/logo.png';
import RTInput from '../../components/Input';
import RTButton from '../../components/Button';
import { colorWhite, backgroundMeBallon } from '../../assets/variables';
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {

    const navigation = useNavigation();

    const handleEnterButton = () => {
        Alert.alert("Hey", "Acessando com formulário")
    }

    const handleContinueWithSafra = () => {
        Alert.alert("Hey", "Acessando API do Safra")
    }

    const handleForgotPassword = () => {
        navigation.navigate('Forgot')
    }

    return (
        <Container>
            <LogoContainer>
                <Logo source={logo} />
            </LogoContainer>
            <Form>
                <RTInput placeholder="Digite seu e-mail" />
                <RTInput placeholder="Digite sua senha" secureTextEntry />

                <ButtonContainer>
                    <RTButton onPress={handleEnterButton}><TextInButton>Entrar</TextInButton></RTButton>
                    <RTButton bgColor={colorWhite} onPress={handleContinueWithSafra}><TextInButton color={backgroundMeBallon}>Continuar com o Safra</TextInButton></RTButton>
                </ButtonContainer>

                <Link onPress={handleForgotPassword}>Forgot password?</Link>
            </Form>
        </Container>
    )
}

export default Login;