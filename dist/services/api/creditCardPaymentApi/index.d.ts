import { AxiosResponse } from "axios";
import CreditCardPayment from "types/entities/CreditCardPayment";
declare const creditCardPaymentApi: {
    postCreditCardPayment: (paymentInformation: CreditCardPayment) => Promise<AxiosResponse<CreditCardPayment>>;
};
export default creditCardPaymentApi;
