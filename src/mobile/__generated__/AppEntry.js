// @generated by expo-yarn-workspaces
/* eslint-disable no-undef */

import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import App from '../App';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
