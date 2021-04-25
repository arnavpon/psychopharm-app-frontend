import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { FONT_HEADING_BOLD, FONT_TEXT_BOLD, COLOR_TEXT_HEADINGS } from '../assets/styles/theme';
import PP_Button from './custom_controls/PP_Button';
import LabeledInput from './custom_controls/LabeledInput';

const DemographicEntryScreen = ({ navigation }) => {
  toggleSegmentedControl = () => {
    console.log("switched control to ");
  };
  handleButtonPress = () => {
    console.log("button was pressed");
    // check that age was entered & is numerical
    navigation.navigate("SearchResults");  // if validation, then move on
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Input Demographic Information</Text>
      <View style={styles.innerContainer}>
        <View style={styles.controlView}>
          <Text style={styles.labelText}>What is the patient's gender?</Text>
          <SegmentedControl style={styles.genderControl}
            values={['Biological Female', 'Biological Male']}  
            selectedIndex={0}
            onChange={toggleSegmentedControl} />
        </View>
        <View style={styles.controlView}>
          <Text style={styles.labelText}>What is the patient's age?</Text>
          <LabeledInput placeholder="10" label="Years" />
        </View>
      </View>
      <PP_Button label="SUBMIT" onPress={handleButtonPress} backgroundColor='green' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    flex: 2,
  },
  controlView: {
    marginTop: 20
  },
  genderControl: {
    marginLeft: 20,
    marginRight: 20
  },
  headingText: {
    flex: 1,
    marginTop: 15,
    fontSize: 24,
    fontFamily: FONT_HEADING_BOLD,
    textAlign: 'center',
    color: COLOR_TEXT_HEADINGS
  },
  labelText: {
    marginLeft: 15,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: FONT_TEXT_BOLD
  }
});

export default DemographicEntryScreen;