import * as React from "react"

export const LeftCard = (props) =>  {
    return (
        <svg width={26} height={28} viewBox="0 0 26 28" fill="none" {...props}>
        <g filter="url(#prefix__filter0_i)">
            <path
            fill="#399682"
            d="M0 8.332L13.889-.001l11.25 18.75-13.89 8.333z"
            />
        </g>
        <path
            stroke="#F6F5F3"
            d="M.686 8.504L13.718.685l10.735 17.893-13.032 7.819z"
        />
        <defs>
            <filter
            id="prefix__filter0_i"
            x={-4}
            y={0}
            width={29.138}
            height={31.082}
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
            <feOffset dx={-6} dy={5} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect1_innerShadow" />
            </filter>
        </defs>
        </svg>
    )
}
