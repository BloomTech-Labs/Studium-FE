import * as React from 'react';

function SvgComponent( props ){
  return (
    <svg width={ 44 } height={ 28 } viewBox="0 0 44 28"
         fill="none" { ...props }>
      <g filter="url(#prefix__filter0_i)">
        <path
          d="M43.984 8.726L30.351 0l-11.78 18.405 13.633 8.726 11.78-18.405z"
          fill="#399682"
        />
      </g>
      <path
        d="M43.294 8.878L30.503.69 19.262 18.253l12.79 8.187L43.295 8.878z"
        stroke="#F6F5F3"
      />
      <g filter="url(#prefix__filter1_i)">
        <path
          d="M13.889 0L0 8.331l11.25 18.75 13.888-8.333L13.888 0z"
          fill="#399682"
        />
      </g>
      <path
        d="M13.717.685L.686 8.503l10.735 17.893 13.03-7.819L13.718.686z"
        stroke="#F6F5F3"
      />
      <path d="M31.5.5h-19v26h19V.5z" fill="#4CB69F" stroke="#F6F5F3"/>
      <defs>
        <filter
          id="prefix__filter0_i"
          x={ 18.571 }
          y={ 0 }
          width={ 29.413 }
          height={ 31.131 }
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={ 0 } result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={ 5 } dy={ 4 }/>
          <feGaussianBlur stdDeviation={ 2 }/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2={ -1 }
                       k3={ 1 }/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
        <filter
          id="prefix__filter1_i"
          x={ -4 }
          y={ -0.001 }
          width={ 29.138 }
          height={ 31.082 }
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={ 0 } result="BackgroundImageFix"/>
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={ -6 } dy={ 5 }/>
          <feGaussianBlur stdDeviation={ 2 }/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2={ -1 }
                       k3={ 1 }/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend in2="shape" result="effect1_innerShadow"/>
        </filter>
      </defs>
    </svg>
  );
}

export default SvgComponent;
