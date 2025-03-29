import { useCallback, useEffect, useState, useRef } from "react";
import {
  Container,
  SliderContainer,
  Track,
  Range,
  ValueLabel,
  LeftThumb,
  RightThumb,
} from "./Slider.styles";

interface RangeSliderProps {
  min: number;
  max: number;
  onChange: (values: { min: number; max: number }) => void;
  step?: number;
  initialMin?: number;
  initialMax?: number;
  width?: string;
  className?: string;
}

const RangeSlider = ({
  min,
  max,
  onChange,
  step = 1,
  initialMin,
  initialMax,
  width = "100%",
  className,
}: RangeSliderProps) => {
  const [minVal, setMinVal] = useState(initialMin ?? min);
  const [maxVal, setMaxVal] = useState(initialMax ?? max);
  const minValRef = useRef(minVal);
  const maxValRef = useRef(maxVal);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <Container className={className}>
      <SliderContainer style={{ width }}>
        <Track />
        <Range ref={range} />
        <ValueLabel position="left" value={minVal} min={min} max={max}>
          {minVal}
        </ValueLabel>
        <ValueLabel position="right" value={maxVal} min={min} max={max}>
          {maxVal}
        </ValueLabel>
        <LeftThumb
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - step);
            setMinVal(value);
            minValRef.current = value;
          }}
        />
        <RightThumb
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + step);
            setMaxVal(value);
            maxValRef.current = value;
          }}
        />
      </SliderContainer>
    </Container>
  );
};

export default RangeSlider;
