import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import DemographicEntryScreen from './components/DemographicEntryScreen';
import SearchResultsScreen from './components/SearchResultsScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();  // creates a navigation stack

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title: ''}} />
        <Stack.Screen
          name="DemographicEntry"
          component={DemographicEntryScreen}
          options={{ title: 'Demographics' }} /> 
        <Stack.Screen 
          name="SearchResults"
          component={SearchResultsScreen}
          options={{title: ''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
