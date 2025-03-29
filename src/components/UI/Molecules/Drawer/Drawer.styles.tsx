import styled from 'styled-components';

export const Overlay = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 997;

    @media (min-width: 768px) {
        display: block;
        z-index: 1499;
    }
`;

export const DrawerContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    background-color: var(--background-main);
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease-in-out;
    z-index: 998;
    display: flex;
    flex-direction: column;

    /* Mobile styles - exclude AppBar height (56px) */
    top: 56px;
    height: calc(100% - 56px);

    /* Desktop styles - full screen */
    @media (min-width: 768px) {
        top: 0;
        height: 100%;
        width: 545px;
        z-index: 1500;
    }
`;

export const DrawerHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 2.4rem;
    border-bottom: 1px solid var(--border);
`;

export const BackButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.8;
    }
`;

export const DrawerContent = styled.div`
    flex: 1;
    padding: 2.4rem;
    overflow-y: auto;
`;

export const DrawerFooter = styled.div`
    padding: 2.4rem;
    border-top: 1px solid var(--border);
`;
