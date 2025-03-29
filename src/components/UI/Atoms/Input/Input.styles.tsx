import styled from 'styled-components';

export const Styles = styled.div`
    color: var(--text-color);

    & .Container {
        display: flex;
        flex-direction: column;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;

        & .Label {
            font-family: inherit;
            font-size: 1rem;
            font-weight: 300;
            color: var(--neutral);
            margin-bottom: 0.5rem;
        }

        & .Input {
            width: 100%;
            border: none;
            outline: none;
            padding: 0;
            line-height: 1.6rem;
            font-size: 1.4rem;
            font-family: inherit;
            border-radius: 0.9rem;
            background-color: transparent;

            &:focus-within {
                border-color: var(--primary);
            }

            &::placeholder {
                font-family: inherit;
            }

            &-Wrapper {
                display: flex;
                align-items: center;
                border-radius: 0.9rem;
                background-color: transparent;
                border: 1px solid var(--background-color);
                background-color: var(--background-color);
            }
        }

        & .TextArea {
            line-height: 2rem;
            resize: vertical;
        }
    }

    & .Error {
        display: inline-block;
        color: var(--error);
        padding: 0.5rem 0;
        font-size: 1.2rem;
        word-wrap: break-word;
    }
`;
