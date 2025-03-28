import { SVGProps } from 'react';

export const ChevronIcon = ({ width = '24', height = '24', color = 'currentColor', collapsed, ...props }: SVGProps<SVGSVGElement> & { collapsed: boolean }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${collapsed ? 180 : 0}deg)` }} {...props}>
        <path d="M15 18l-6-6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
