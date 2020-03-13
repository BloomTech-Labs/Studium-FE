import * as React from 'react';

/**
 * Avatar
 * @component
 *
 * @param props
 */
function Avatar( props ){
  return (
    <svg width={ 37 } height={ 37 } fill="none" { ...props }>
      <circle cx={ 18.5 } cy={ 18.5 } r={ 18.5 } fill="#595959"
              fillOpacity={ 0.44 }/>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.846 32.868c.586-7.01 5.79-12.495 12.122-12.495 6.108 0 11.166 5.102 12.043 11.755-.88.809-1.84 1.534-2.866 2.161v-.1c0-6.34-4.453-10.816-9.177-10.816-4.723 0-9.177 4.476-9.177 10.817 0 .217.005.431.016.644a18.528 18.528 0 01-2.96-1.966z"
        fill="#C4C4C4"
      />
      <circle
        cx={ 18.968 }
        cy={ 11.944 }
        r={ 6.93 }
        stroke="#C4C4C4"
        strokeWidth={ 3 }
      />
    </svg>
  );
}

export default withSvg( Avatar );
