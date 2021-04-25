import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, ScrollView, FlatList } from 'react-native';
import IntuitiveSearch from './custom_controls/IntuitiveSearch';
import PP_Button from './custom_controls/PP_Button';
import { FONT_HEADING_BOLD } from '../assets/styles/theme';

const SearchResultsScreen = ({ navigation }) => {

  const onPress = () => {
    console.log("Done btn");
    // navigate back & save search
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.columnView}>
        <View style={styles.searchView}>
          <ScrollView>
            <Text style={styles.titleLabel}>ADD INFO</Text>
            <IntuitiveSearch />
          </ScrollView>
        </View>
        <View style={styles.resultsView}>
          {/* do NOT nest flat list inside scrollView, use the header instead if you need title text */}
          <ScrollView>
            <Text style={styles.titleLabel}>BEST MEDICATION OPTIONS</Text>
            <FlatList />
          </ScrollView>
        </View>
      </View>
      <PP_Button style={styles.btn} label="DONE" onPress={onPress} />  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnView: {
    flex: 9,
    flexDirection: 'row'
  },
  searchView: {
    flex: 1.4,
    borderRightWidth: 1
  },
  resultsView: {
    flex: 2,
    borderLeftWidth: 1
  },
  titleLabel: {
    height: 50,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: FONT_HEADING_BOLD,
    backgroundColor: 'gray'
  },
  btn: {
    flex: 1,
    backgroundColor: 'red'
  }
});

export default SearchResultsScreen;