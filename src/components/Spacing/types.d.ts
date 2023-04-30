import {
    color,
    flex,
    space,
    SpaceProps,
    ColorProps,
    HeightProps,
    FlexboxProps,
    BorderProps,
    BorderRadiusProps,
    WidthProps,
    PositionProps,
} from "styled-system";

import { ViewProps } from "react-native";

type BoxProps =
    | SpaceProps
    | ColorProps
    | HeightProps
    | ViewProps
    | BorderProps
    | BorderRadiusProps
    | FlexboxProps
    | WidthProps
    | PositionProps;