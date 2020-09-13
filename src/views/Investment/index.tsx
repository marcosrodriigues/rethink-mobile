import React, { useState } from 'react';
import ScrollContainer from '../../components/ScrollContainer';
import { InvestmentType } from '../../interface/InvestmentType';
import CardInvestment from '../../components/CardInvestment';
import { CardInvestmentContainer } from './styles';

const Investment: React.FC = () => {
    const [investment, setInvestment] = useState<InvestmentType[]>([
        { id: 1, title: 'Tesouro Direto' },
        { id: 2, title: 'CBD e LC' },
        { id: 3, title: 'LCI e LCA' },
        { id: 4, title: 'Fundos Imobiliários' },
        { id: 5, title: 'Ações' },
        { id: 6, title: 'Opções' },
        { id: 7, title: 'Mini de Dólar' },
        { id: 8, title: 'Previdência Privada' },
        { id: 9, title: 'Debêntures' },
        { id: 10, title: 'Fundos de Índices' },
        { id: 11, title: 'Investimento X' },
        { id: 12, title: 'Investimento X' },
        { id: 13, title: 'Investimento X' },
        { id: 14, title: 'Investimento X' },
        { id: 15, title: 'Investimento X' },
        { id: 16, title: 'Investimento X' }
    ]);

  return (
      <ScrollContainer title="Escolha o tipo de investimento">
        <CardInvestmentContainer>
            {investment && investment.map(i => <CardInvestment key={i.id} investmentType={i} />)}
        </CardInvestmentContainer>
      </ScrollContainer>
  )
}

export default Investment;