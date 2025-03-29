import React from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
import cn from 'classnames';
import { Container } from './Slider.styles';

interface RangeSliderProps extends RadixSlider.SliderProps {
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

const RangeSlider = React.forwardRef<HTMLSpanElement, RangeSliderProps>(({ containerProps, ...props }, forwardedRef) => {

    return (
        <Container {...containerProps}>
            <RadixSlider.Root className={cn("SliderRoot", props.className)} {...props} ref={forwardedRef} step={props.step || 1} minStepsBetweenThumbs={props.minStepsBetweenThumbs || 1}>
                <RadixSlider.Track className="SliderTrack">
                    <RadixSlider.Range className="SliderRange" />
                </RadixSlider.Track>
                {props.value?.map((value, i) => (
                    <RadixSlider.Thumb key={i} className="SliderThumb" data-value={`$${value}`} />
                ))}
            </RadixSlider.Root>
        </Container>
    );
});

export default RangeSlider;
