import styled from 'styled-components';

interface SkeletonProps {
    width?: string;
    height?: string;
    borderRadius?: string;
    color?: string;
}

const Skeleton = styled.div<SkeletonProps>`
    display: inline-block;
    background: linear-gradient(90deg, ${({ color }) => color || 'var(--skeleton-color)'} 25%, rgba(255, 255, 255, 0.2) 50%, ${({ color }) => color || 'var(--skeleton-color)'} 75%);
    background-size: 200% 100%;
    animation: shimmer 3s infinite ease-in-out;
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
    border-radius: ${({ borderRadius }) => borderRadius || '0.8rem'};

    @keyframes shimmer {
        0% {
            background-position: -200% 0;
        }
        50% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`;

export default Skeleton;
