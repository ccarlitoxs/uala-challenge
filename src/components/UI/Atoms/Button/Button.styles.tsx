import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const getButtonSize = (size: ButtonProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        padding: 0.8rem 1.6rem;
        font-size: 1.4rem;
      `;
    case 'lg':
      return css`
        padding: 1.2rem 2.4rem;
        font-size: 1.6rem;
      `;
    case 'md':
      return css`
        padding: 1rem 2rem;
        font-size: 1.4rem;
      `;
    default:
      return css`
        padding: 1rem 2rem;
        font-size: 1.4rem;
      `;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ${({ size }) => getButtonSize(size)}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
