import styled from 'styled-components';

export const SwitchContainer = styled.label`
    position: relative;
    display: inline-block;
    width: 4.4rem;
    height: 2.4rem;
    cursor: pointer;
`;

export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
        background-color: var(--primary);
    }

    &:checked + span:before {
        transform: translateX(2rem);
    }

    &:disabled + span {
        background-color: var(--disabled);
        cursor: not-allowed;
    }
`;

export const SwitchSlider = styled.span<{ checked: boolean; disabled: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ checked }) => checked ? 'var(--primary)' : 'var(--neutral)'};
    transition: 0.3s;
    border-radius: 2.4rem;
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};

    &:before {
        position: absolute;
        content: "";
        height: 1.6rem;
        width: 1.6rem;
        left: 0.4rem;
        bottom: 0.4rem;
        background-color: white;
        transition: 0.3s;
        border-radius: 50%;
    }
`; 