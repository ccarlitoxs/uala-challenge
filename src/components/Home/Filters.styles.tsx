import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`;

export const ClearButton = styled.button`
    color: var(--primary);
    background: none;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
    padding: 0.4rem;
    
    &:hover {
        opacity: 0.8;
    }
`;

export const OptionIcon = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`;
