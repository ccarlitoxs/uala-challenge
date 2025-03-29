import styled from 'styled-components';

export const ChipsSelectContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

interface ChipButtonProps {
    selected: boolean;
}

export const ChipButton = styled.button<ChipButtonProps>`
    padding: 1rem 1.8rem;
    border-radius: 1.6rem;
    border: 1px solid var(--primary-dark);
    background-color: ${({ selected }) => (selected ? 'var(--background-chips-select)' : 'white')};
    color: var(--primary-dark);
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s ease;
    outline: none;
    font-weight: ${({ selected }) => (selected ? 600 : 400)};
    display: flex;
    align-items: center;
    gap: 0.4rem;

    &:hover {
        background-color: var(--primary-light-hover);
        border: 1px solid var(--primary-dark);
        font-weight: 600;
    }

    &:active {
        transform: scale(0.98);
    }

    &:focus {
        outline: none;
        border: 1px solid var(--primary-dark);
    }
`;

export const CloseIcon = styled.img`
    width: 0.85rem;
    height: 0.85rem;
`;
