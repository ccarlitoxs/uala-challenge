import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
`;

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2.4rem;
  padding: 0.8rem 0;
`;

export const Track = styled.div`
  position: absolute;
  border-radius: 999px;
  height: 0.4rem;
  background-color: #E5E7EB;
  width: 100%;
  z-index: 1;
`;

export const Range = styled.div`
  position: absolute;
  border-radius: 999px;
  height: 0.4rem;
  background-color: var(--primary);
  z-index: 2;
`;

export const ValueLabel = styled.div<{ position: 'left' | 'right'; value: number; min: number; max: number }>`
  position: absolute;
  color: var(--text);
  font-size: 1.2rem;
  font-weight: 500;
  top: -2rem;
  transform: translateX(-50%);
  left: ${({ value, min, max }) => ((value - min) / (max - min)) * 100}%;
  white-space: nowrap;
  &::before {
    content: '$';
  }
`;

export const Thumb = styled.input`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 100%;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    background-color: var(--primary);
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 0 2px white;
    cursor: pointer;
    height: 1.2rem;
    width: 1.2rem;
    margin-top: -0.4rem;
    pointer-events: all;
    position: relative;
  }

  &::-moz-range-thumb {
    background-color: var(--primary);
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 0 2px white;
    cursor: pointer;
    height: 1.2rem;
    width: 1.2rem;
    margin-top: -0.4rem;
    pointer-events: all;
    position: relative;
  }
`;

export const LeftThumb = styled(Thumb)`
  z-index: 3;
`;

export const RightThumb = styled(Thumb)`
  z-index: 4;
`;
  