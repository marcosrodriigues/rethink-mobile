import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Container, Logo, LogoContainer, ButtonContainer, Link } from './style';
import { Form, TextInButton } from '../../assets/global';

import logo from '../../assets/logo.png';
import RTInput from '../../components/Input';
import RTButton from '../../components/Button';
import { colorWhite, backgroundMeBallon } from '../../assets/variables';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, signInWithSafra } = useAuth();

    const navigation = useNavigation();

    const handleEnterButton = async () => {
        try {
            await signIn(email, password);
        } catch (err) {
            Alert.alert("Hey", "Verifique suas credenciais.")
        }
    }

    const handleContinueWithSafra = async () => {
        try {
            await signInWithSafra({ email, password });
        } catch (err) {
            Alert.alert("Hey", "Tente novamente.")
        }
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
                <RTInput placeholder="Digite seu e-mail" value={email} onChangeText={setEmail} />
                <RTInput placeholder="Digite sua senha" value={password} onChangeText={setPassword} secureTextEntry />

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