import React from 'react';
import { Container, ButtonHamburguer, DivInfo, Title, DivInline, TextInfo, Price } from './styles';
import { Feather } from '@expo/vector-icons'; 
import { colorWhite } from '../../assets/variables';
import { useAuth } from '../../contexts/auth';

const AuthHeader: React.FC = () => {
    const { user, signOut } = useAuth();

  return <Container>
      <ButtonHamburguer activeOpacity={0}>
        <Feather name="menu" size={50} color={colorWhite} />
      </ButtonHamburguer>
      <DivInfo>
            <Title>Bem vindo, {user?.name}</Title>
            <DivInline>
                <TextInfo>Saldo disponível: <Price>R$ 1.500,00</Price></TextInfo>

                <TextInfo onPress={signOut}>Sair</TextInfo>
            </DivInline>
        </DivInfo>
    </Container>
}

export default AuthHeader;

