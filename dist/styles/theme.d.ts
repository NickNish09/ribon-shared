export interface Breakpoint {
    mobile: string;
    mobileMedium: string;
    pad: string;
    desktop: string;
}
interface ThemeType {
    breakpoints: Breakpoint;
    [key: string]: any;
}
declare const theme: ThemeType;
export default theme;
