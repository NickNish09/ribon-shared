import Offer from "../entities/Offer";

export default interface PromoterCardGiving {
  id: number;
  crypto_amount: number;
  offer: Offer;
  paid_date: string;
}
