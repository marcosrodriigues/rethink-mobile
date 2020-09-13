import React from 'react';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';
import { colorGold } from '../../assets/variables';

// import { Container } from './styles';

interface RTCurrencyInput {
    onRawText: (value: number) => void,
    value: string
}
const RTCurrencyInput: React.FC<RTCurrencyInput> = ({
    onRawText,
    value,
 }) => {
    
    const handleOnChangeText = (text: string, rawText?: string) => {
        if (text.substr(text.length - 1, text.length) === "0") {

        }
        const rawValue = Number(rawText);
        onRawText(rawValue);
    }

    return (
        <TextInputMask 
            type={"money"}
            value={value}
            options={{
                precision: 2,
                separator: ',',
                delimiter: '.',
                unit: "R$ ",
                suffixUnit: ""
            }}
            includeRawValueInChangeText={true}
            onChangeText={handleOnChangeText}
            style={{
                borderBottomWidth: 1,
                borderBottomColor: colorGold,
                width: "100%",
                padding: 5,
                fontSize: 20
            }}
        />
    );
}

export default RTCurrencyInput;