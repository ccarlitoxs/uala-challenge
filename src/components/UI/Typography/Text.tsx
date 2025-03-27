import styled, { css } from 'styled-components';

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption';
  size?: 'sm' | 'md' | 'lg';
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  color?: string;
  children: React.ReactNode;
}

const variantStyles = {
  h1: css`
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  `,
  h2: css`
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
  `,
  h3: css`
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  `,
  body1: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  `,
  body2: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  `,
  caption: css`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  `,
};

const sizeStyles = {
  sm: css`font-size: 12px;`,
  md: css`font-size: 16px;`,
  lg: css`font-size: 24px;`,
};

const weightStyles = {
  light: css`font-weight: 300;`,
  regular: css`font-weight: 400;`,
  medium: css`font-weight: 500;`,
  bold: css`font-weight: 700;`,
};

const TextBase = styled.span<TextProps>`
  font-family: 'Public Sans', sans-serif;
  color: ${({ color }) => color || 'var(--text-primary)'};

  ${({ variant }) => variantStyles[variant || 'body1']}
  ${({ size }) => sizeStyles[size || 'md']}
  ${({ weight }) => weightStyles[weight || 'regular']}
`;

export const Text = ({ variant, color, children, size, weight, ...props }: TextProps) => {
  return (
    <TextBase variant={variant} color={color} size={size} weight={weight} {...props}>
      {children}
    </TextBase>
  );
}; 