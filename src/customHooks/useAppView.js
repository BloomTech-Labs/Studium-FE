import React, {useContext, useEffect} from 'react';
import {AppHooksContext} from './useAppHooks.js';
import {
  APP_VIEW_DESKTOP, APP_VIEW_MOBILE, SIZES
} from '../utilities/constants.js';

export const APP_VIEW_DEBUG_NAME = 'Use App View';

export const useAppView = () => {

  const {setHookVariable, hooks} = useContext(
    AppHooksContext);
  const {appView, width, height} = hooks;

  /**
   * Here we check when the width of the screen changes and then set the app
   * view width to desktop or to mobile.
   */
  useEffect(() => {

    const size = SIZES.tablet;
    if (width > size && appView !== APP_VIEW_DESKTOP) {

      if (width > SIZES.tablet && appView !== APP_VIEW_DESKTOP) {
        setHookVariable('appView', APP_VIEW_DESKTOP);

      } else if (width <= size && appView !==
        APP_VIEW_MOBILE) {
        setHookVariable('appView', APP_VIEW_MOBILE);
      }
    }

  }, [width, height]);

  return {appView, width, height};

};