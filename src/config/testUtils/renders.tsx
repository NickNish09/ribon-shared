import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  renderHook as renderTestingLibraryHook,
  RenderHookResult,
} from "@testing-library/react-hooks";

export type RenderComponentProps = {
  locationState?: Record<any, any>;
};

function renderAllProviders(
  children: any,
  {}: RenderComponentProps = {},
) {
  const queryClient = new QueryClient();

  return {
    component: (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
    ),
  };
}

type RenderHookReturn = {
  hook: RenderHookResult<any, any>;
};
export function renderHook(
  hook: (props: any) => any,
  renderComponentProps: RenderComponentProps = {},
): RenderHookReturn {
  const wrapper = ({ children }: any) => {
    const { component } = renderAllProviders(
      children,
      renderComponentProps,
    );
    return component;
  };

  return {
    hook: renderTestingLibraryHook(hook, { wrapper }),
  };
}
