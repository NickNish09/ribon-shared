import impactApi from "services/api/impactApi";
import { useApi } from "hooks/useApi";
import Impact from "types/entities/Impact";

function useImpact(userId: number | undefined) {
  const { data: userImpact } = useApi<Impact[]>({
    key: "impacts",
    fetchMethod: () => {
      const id = userId || null;
      return impactApi.getImpact(id);
    },
    options: {
      enabled: !!userId,
    },
  });

  return {
    userImpact,
  };
}

export default useImpact;
