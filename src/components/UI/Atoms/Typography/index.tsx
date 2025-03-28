import styled, { css } from 'styled-components';

interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  color?: string;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

const variantStyles = {
  h1: css`
    font-size: 2.4rem;
    font-weight: 700;
  `,
  h2: css`
    font-size: 1.6rem;
    font-weight: 600;
  `,
  h3: css`
    font-size: 1.8rem;
    font-weight: 600;
  `,
  body1: css`
    font-size: 1.6rem;
    font-weight: 400;
  `,
  body2: css`
    font-size: 1.4rem;
    font-weight: 400;
  `,
  caption: css`
    font-size: 1.2rem;
    font-weight: 400;
  `,
};

const sizeStyles = {
  sm: css`
    font-size: 1.2rem;
  `,
  md: css`
    font-size: 1.4rem;
  `,
  lg: css`
    font-size: 1.6rem;
  `,
  xl: css`
    font-size: 2.4rem;
  `,
};

const weightStyles = {
  thin: css`
    font-weight: 100;
  `,
  light: css`
    font-weight: 300;
  `,
  regular: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  semibold: css`
    font-weight: 600;
  `,
  bold: css`
    font-weight: 700;
  `,
};

const alignStyles = {
  left: css`
    text-align: left;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `,
};


const TypographyBase = styled.span<TypographyProps>`
  font-family: 'Public Sans', sans-serif;
  line-height: 1;
  color: ${({ color }) => color || 'var(--Typography-primary)'};

  ${({ variant }) => variantStyles[variant || 'body2']}
  ${({ size }) => size && sizeStyles[size]}
  ${({ weight }) => weight && weightStyles[weight]}
  ${({ align }) => align && alignStyles[align]}
`;

export const Typography = ({
  variant,
  color,
  children,
  size,
  weight,
  align,
  ...props
}: TypographyProps) => {
  return (
    <TypographyBase variant={variant} color={color} size={size} weight={weight} align={align} {...props}>
      {children}
    </TypographyBase>
  );
};
