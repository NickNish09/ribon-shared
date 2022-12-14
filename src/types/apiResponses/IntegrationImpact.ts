import { NonProfit } from "../entities";

export default interface IntegrationImpact {
  totalDonations: number;
  totalDonors: number;
  impactPerNonProfit: {
    nonProfit: NonProfit;
    impact: number;
  };
}
