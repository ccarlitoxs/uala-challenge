import { Text } from '../Typography/Text';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'default' | 'lg' | 'md';
  fullWidth?: boolean;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  if (typeof children === 'string') {
    return (
      <StyledButton {...props}>
        <Text variant="body1">
          {children}
        </Text>
      </StyledButton>
    );
  }
  return <StyledButton {...props}>{children}</StyledButton>;
};
