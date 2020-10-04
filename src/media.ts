import { createMedia } from '@artsy/fresnel';

export const EBreakpoints = {
  mobileS: 'mobileS',
  mobileM: 'mobileM',
  mobileL: 'mobileL',
  tablet: 'tablet',
  desktopS: 'desktopS',
  desktopM: 'desktopM',
  desktopL: 'desktopL',
};

/**
 * Define breakpoints
 * https://github.com/artsy/fresnel#createmedia
 */
const AppMedia = createMedia({
  breakpoints: {
    [EBreakpoints.mobileS]: 320,
    [EBreakpoints.mobileM]: 480,
    [EBreakpoints.mobileL]: 640,
    [EBreakpoints.tablet]: 768,
    [EBreakpoints.desktopS]: 1024,
    [EBreakpoints.desktopM]: 1260,
    [EBreakpoints.desktopL]: 1440,
  },
});

export const {
  Media,
  MediaContextProvider,
  // needed for server-side rendering
  createMediaStyle,
  findBreakpointAtWidth,
  findBreakpointsForWidths,
} = AppMedia;
