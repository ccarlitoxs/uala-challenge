import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
    gap: 1.6rem;

    .SliderRoot {
        position: relative;
        display: flex;
        align-items: center;
        user-select: none;
        touch-action: none;
        width: 100%;
        height: 4rem;
        margin-top: 1.6rem;
    }

    .SliderTrack {
        background-color: var(--background-slider-track);
        position: relative;
        flex-grow: 1;
        height: 0.4rem;
        border-radius: 9999px;
    }

    .SliderRange {
        position: absolute;
        background-color: var(--primary);
        height: 100%;
        border-radius: 9999px;
    }

    .SliderThumb {
        display: block;
        width: 2rem;
        height: 2rem;
        background-color: var(--primary);
        box-shadow: 0 0 0 2px white;
        border-radius: 50%;
        cursor: pointer;
        position: relative;

        &:hover {
            background-color: var(--primary-hover);
        }

        &:focus {
            outline: none;
            box-shadow:
                0 0 0 2px white,
                0 0 0 4px var(--primary);
        }

        &::before {
            content: attr(data-value);
            position: absolute;
            top: -2.4rem;
            left: 50%;
            transform: translateX(-50%);
            font-size: 1.2rem;
            color: var(--primary);
            white-space: nowrap;
        }
    }

    .SliderValues {
        display: none;
    }
`;
