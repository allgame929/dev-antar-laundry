import Icons from "@/components/atoms/Icon/Icons";

export type IconName = keyof typeof Icons;

export interface ICard {
    iconName: IconName;
    size?: number;
    width?: number;
    height?: number;
    color?: string;
    className?: string;
}