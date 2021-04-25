import React from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, View } from 'react-native'; 
import { SearchHistory } from './SearchHistory';
import { IconButton } from './custom_controls/IconButton';
import { COLOR_LIGHT_BACKGROUND, COLOR_TEXT_HEADINGS, FONT_HEADING, FONT_HEADING_BOLD, FONT_TEXT, FONT_TEXT_BOLD } from '../assets/styles/theme';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Medication Guide</Text>

      <View style={styles.topView}>
        <TextInput style={styles.searchBar} placeholder="Look up previous search" />
        <IconButton style={styles.addButton}
          source="plus"
          containerStyle={styles.addButton}
          onPress = {() => navigation.navigate('DemographicEntry')} />
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.archiveTitle}>Recent Searches</Text>
        <SearchHistory style={styles.archive} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR_LIGHT_BACKGROUND
  },
  titleText: {
    flex: 1,
    marginTop: 15,
    fontSize: 30,
    fontFamily: FONT_HEADING_BOLD,
    textAlign: 'center',
    color: COLOR_TEXT_HEADINGS
  },
  topView: {
    backgroundColor: 'yellow',
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  searchBar: {
    backgroundColor: 'green',
    marginRight: 20,
    flexGrow: 1,  // all growth along row goes to the search bar
    height: '75%', 
    paddingLeft: 15,  // offsets the text field
  },
  addButton: {
    height: 45,
    width: 45
  },
  bottomView: {
    flex: 8,
  },
  archiveTitle: {
    fontFamily: FONT_HEADING_BOLD,
    fontSize: 24,
    marginTop: 10,
    textAlign: 'center'
  },
  archive: {
    backgroundColor: 'transparent',
  }
});

export default HomeScreen;