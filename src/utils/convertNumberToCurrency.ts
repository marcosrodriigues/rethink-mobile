import { localeString } from "../assets/variables"

export const convertNumberToCurrency = (value : number, options?: Intl.NumberFormatOptions) => {
    const defaultOption = options || { 
        style: "currency", 
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    };

    return new Intl.NumberFormat(localeString, { ...defaultOption }).format(value);
}