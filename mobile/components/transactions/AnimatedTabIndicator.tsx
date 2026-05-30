import React, {
  useEffect,
  useRef,
} from "react";

import {
  Animated,
} from "react-native";

type Props = {
  index: number;
};

const TAB_WIDTH = 120;

export default function AnimatedTabIndicator({
  index,
}: Props) {

  const translateX =
    useRef(new Animated.Value(0))
      .current;

  useEffect(() => {
    Animated.spring(
      translateX,
      {
        toValue: TAB_WIDTH * index,
        useNativeDriver: true,
      }
    ).start();
  }, [index]);

  return (
    <Animated.View
      style={{
        width: TAB_WIDTH,
        transform: [
          {
            translateX,
          },
        ],
      }}
      className="
        absolute
        bottom-0
        h-1
        rounded-full
        bg-blue-600
      "
    />
  );
}