import styled, { css } from 'styled-components';

interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {
   variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption';
   size?: 'sm' | 'md' | 'lg';
   weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
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
      font-size: 22px;
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
   sm: css`
      font-size: 12px;
   `,
   md: css`
      font-size: 14px;
   `,
   lg: css`
      font-size: 22px;
   `,
   xl: css`
      font-size: 34px;
   `,
};

const weightStyles = {
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

const TypographyBase = styled.span<TypographyProps>`
   font-family: 'Public Sans', sans-serif;
   color: ${({ color }) => color || 'var(--Typography-primary)'};

   ${({ size }) => sizeStyles[size || 'md']}
   ${({ weight }) => weightStyles[weight || 'regular']}
  ${({ variant }) => variant && variantStyles[variant]}
`;

export const Typography = ({
   variant,
   color,
   children,
   size,
   weight,
   ...props
}: TypographyProps) => {
   return (
      <TypographyBase variant={variant} color={color} size={size} weight={weight} {...props}>
         {children}
      </TypographyBase>
   );
};
