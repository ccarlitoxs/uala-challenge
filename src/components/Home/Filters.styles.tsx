import styled from 'styled-components';
import { ButtonPresets } from '../UI/Atoms/Button';

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`;

export const FiltersHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.6rem;
`;

export const ClearButton = styled(ButtonPresets.TextPrimaryButton)`
    font-size: 1.6rem;
    padding: 1rem 0;
`;

export const OptionIcon = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`;
