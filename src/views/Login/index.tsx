import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Container, Logo, LogoContainer, ButtonContainer, Link } from './style';
import { Form, TextInButton } from '../../assets/global';

import logo from '../../assets/logo.png';
import RTButton from '../../components/Button';
import {  colorGold } from '../../assets/variables';
import { useAuth } from '../../contexts/auth';

const Login: React.FC = ({
    navigation
}) => {
    
    const {signInWithSafra } = useAuth();

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
                <ButtonContainer>
                    <RTButton onPress={handleContinueWithSafra}><TextInButton color={colorGold}>Continuar com o Safra</TextInButton></RTButton>
                </ButtonContainer>

                <Link onPress={handleClickCreateAccount}>Ainda não possuo conta</Link>
            </Form>
        </Container>
    )
}

export default Login;
