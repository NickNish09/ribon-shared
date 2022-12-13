export declare function expectTextToBeInTheDocument(text: string): void;
export declare function expectTextNotToBeInTheDocument(text: string): void;
export declare function expectImageToBeInTheDocument(alt: string): void;
export declare function expectImageNotToBeInTheDocument(alt: string): void;
export declare function expectDisplayValueToBeInTheDocument(value: string): void;
export declare function expectInputToHaveValue(label: string, value: any): void;
export declare function expectLogErrorToHaveBeenCalled(error?: any): void;
export declare function expectLogEventToHaveBeenCalledWith(event: string, params?: Record<any, any>): void;
declare type expectPageToNavigateToType = {
    state?: Record<any, any>;
};
export declare function expectPageToNavigateTo(pathname: string, { state }?: expectPageToNavigateToType): void;
export declare function expectPageToNavigateBack(): void;
export {};
