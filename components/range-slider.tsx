import { ReactNode } from "react";

import classNames from "@/utils/classnames";

import {
  Slider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@radix-ui/react-slider";

type SliderProps = {
  value: number[];
  onValueChange: (range: number[]) => void;
  min?: number;
  max?: number;
  step?: number;
  minStepsBetweenThumbs?: number;
  className?: string;
  children?: (range: number[]) => ReactNode;
};

export default function RangeSlider({
  value,
  onValueChange,
  min,
  max,
  step,
  minStepsBetweenThumbs,
  className,
  children,
}: SliderProps) {
  return (
    <div className={classNames("rounded-md bg-white", className)}>
      <Slider
        className="relative flex h-5 w-full items-center"
        min={min}
        max={max}
        step={step}
        minStepsBetweenThumbs={minStepsBetweenThumbs}
        defaultValue={value}
        value={value}
        onValueChange={onValueChange}
      >
        <SliderTrack className="relative h-0.5 w-full bg-gray-300">
          <SliderRange className="absolute h-full rounded-full" />
        </SliderTrack>
        <SliderThumb className="block h-3 w-3 rounded-full border border-accent bg-white focus:outline-none focus:ring-2 focus:ring-gray-300" />
        <SliderThumb className="block h-3 w-3 rounded-full border border-accent bg-white focus:outline-none focus:ring-2 focus:ring-gray-300" />
      </Slider>
      {children && children(value)}
    </div>
  );
}
