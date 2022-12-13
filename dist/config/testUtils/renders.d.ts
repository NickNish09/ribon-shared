import { RenderHookResult } from "@testing-library/react-hooks";
export declare type RenderComponentProps = {
    locationState?: Record<any, any>;
};
declare type RenderHookReturn = {
    hook: RenderHookResult<any, any>;
};
export declare function renderHook(hook: (props: any) => any, renderComponentProps?: RenderComponentProps): RenderHookReturn;
export {};
