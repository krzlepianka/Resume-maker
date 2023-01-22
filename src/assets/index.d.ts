
declare module '*.svg' {
    import React from 'react';
    const src: string;
    export const ReactComponent: React.FC<React.SVGAttributes<SVGElement>>;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export const ReactComponent: React.FC<React.SVGAttributes<SVGElement>>;
    export default src;
}


declare module '*.png' {
    const src: string;
    export const ReactComponent: React.FC<React.SVGAttributes<SVGElement>>;
    export default src;
}