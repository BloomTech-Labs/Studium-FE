import * as React from "react"

export const RightCard = (props) =>{
    return (
        <svg width={26} height={28} viewBox="0 0 26 28" fill="none" {...props}>
        <g filter="url(#prefix__filter0_i)">
            <path
            fill="#399682"
            d="M12.351 0l13.634 8.726-11.78 18.405L.57 18.405z"
            />
        </g>
        <path
            stroke="#F6F5F3"
            d="M12.503.69l12.791 8.188-11.241 17.563-12.791-8.187z"
        />
        <defs>
            <filter
            id="prefix__filter0_i"
            x={0.571}
            y={0}
            width={29.413}
            height={31.131}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
            >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
            />
            <feOffset dx={5} dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect1_innerShadow" />
            </filter>
        </defs>
        </svg>
    )
}
