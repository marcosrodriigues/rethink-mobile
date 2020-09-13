import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Container, LogoContainer, Logo, ButtonContainer, Link } from './styles';
import RTButton from '../../components/Button';
import { Form, TextInButton } from '../../assets/global';

import logo from '../../assets/logo.png';
import RTInput from '../../components/Input';
import { colorGold } from '../../assets/variables';
import { useNavigation } from '@react-navigation/native';
import safraService from '../../services/safra/safra' 
import { useAuth } from '../../contexts/auth';

const CreateAccount: React.FC = () => {

    const { signIn } = useAuth();

    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Phone: ''
    })

    const navigation = useNavigation();

    const handleOpenAccount = async () => {
        try {
            await signIn();
            await safraService.createAccount(formData);
            Alert.alert("Quase pronto!", "Você vai receber um e-mail com as informações pra criar sua conta!");
        } catch (error) {
            Alert.alert("Hey", "Verifique seus dados");
        }
    }

    const handleClickGoBack = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <LogoContainer>
                <Logo source={logo} />
            </LogoContainer>
            <Form>
                <RTInput 
                    placeholder="Nome" 
                    value={formData.Name} 
                    onChangeText={txt => setFormData(form => ({...form, Name: txt}))} 
                />
                <RTInput 
                    placeholder="Email" 
                    value={formData.Email} 
                    onChangeText={txt => setFormData(form => ({...form, Email: txt}))} 
                />
                <RTInput 
                    placeholder="Telefone" 
                    value={formData.Phone} 
                    onChangeText={txt => setFormData(form => ({...form, Phone: txt}))} 
                    secureTextEntry
                 /> 

                <ButtonContainer>
                    <RTButton onPress={handleOpenAccount}><TextInButton color={colorGold}>Abrir conta</TextInButton></RTButton>
                </ButtonContainer>

                <Link onPress={handleClickGoBack}>Voltar</Link>
            </Form>
        </Container>
    )
}

export default CreateAccount;