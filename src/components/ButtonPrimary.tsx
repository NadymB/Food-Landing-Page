import Link from "next/link"
import { CSSProperties, ReactNode, useState } from "react";

interface IButtonPrimary {
    title: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    containerStyle?: string;
    prioritizeContainerStyle?: CSSProperties | undefined;
    onMouseMoveIcon?: () => void;
    onMouseLeaveIcon?: () => void;
}

export const ButtonPrimary = ({title, leftIcon, rightIcon, containerStyle, prioritizeContainerStyle, onMouseMoveIcon, onMouseLeaveIcon} : IButtonPrimary) => {

    return (
        <Link
            href={"/"}
            className={`flex gap-2 px-8 py-4 bg-white hover:bg-secondary hover:text-white hover:shadow-[0_0_20px_0_#fff] w-fit h-fit font-notoSerif text-base text-secondary font-bold ${containerStyle}`}
            style={prioritizeContainerStyle}
            onMouseMove={onMouseMoveIcon}
            onMouseLeave={onMouseLeaveIcon}
        >
            {leftIcon && leftIcon}
            {title}
            {rightIcon && rightIcon}
        </Link>
    )
}