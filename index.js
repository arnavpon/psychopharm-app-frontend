/**
 * @format
 */

import 'react-native-gesture-handler';  // required for RN Navigation implementation, MUST be TOP-MOST item!
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
