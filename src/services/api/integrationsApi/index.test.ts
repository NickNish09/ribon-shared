import integrationsApi from ".";
import api from "..";

describe("integrationsApi", () => {
  describe("#getIntegration", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, id and headers", () => {
      integrationsApi.getIntegration(1);

      expect(api.get).toHaveBeenCalledWith("/api/v1/integrations/1");
    });

    it("expects to send a get request with the correct info: url, uuid and headers", () => {
      const uuid = "64a3a5af-c249-4815-b89a-43986efb0de7";
      integrationsApi.getIntegration(uuid);

      expect(api.get).toHaveBeenCalledWith(`/api/v1/integrations/${uuid}`);
    });
  });

  describe("#getIntegrationImpact", () => {
    beforeEach(() => {
      api.get = jest.fn();
    });
    const startDate = "2020-01-01";
    const endDate = "2020-01-02";

    it("expects to send a get request with the correct info: url, id and headers", () => {
      integrationsApi.getIntegrationImpact(1, startDate, endDate);

      expect(api.get).toHaveBeenCalledWith("/api/v1/integrations/1/impacts", {
        params: {
          start_date: startDate,
          end_date: endDate,
        },
      });
    });

    it("expects to send a get request with the correct info: url, uuid and headers", () => {
      const uuid = "64a3a5af-c249-4815-b89a-43986efb0de7";
      integrationsApi.getIntegrationImpact(uuid, startDate, endDate);

      expect(api.get).toHaveBeenCalledWith(`/api/v1/integrations/${uuid}/impacts`, {
        params: {
          start_date: startDate,
          end_date: endDate,
        },
      });
    });
  });
});
