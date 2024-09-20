import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from './CustomHeader';
import styles from '../styles/styles';
import {TextInput, DefaultTheme} from 'react-native-paper';

import CameraPicker from './CameraPicker';
import GalleryPicker from './GalleryPicker';
import DatePicker from './DatePicker';
import CheckBox from './CheckBox';
import TimePicker from './TimePicker';

const AccountScreen = () => {
  const [text, setText] = useState('');

  const customTheme = {
    ...DefaultTheme,
    colors: {
      primary: '#724187',
      background: '#ffffff',
      placeholder: '#FF6347',
    },
    roundness: 8,
  };
  return (
    <ScrollView style={[styles.Container]}>
      <CustomHeader headerTitle="Account" />
      <View style={[styles.margin24]}>
        <TextInput
          label="Username"
          value={text}
          onChangeText={text => setText(text)}
          mode="outlined"
          theme={customTheme}
          placeholder="Enter Username"
        />
        <CheckBox />
        <View style={[styles.cardContent,styles.marginBottom10]}>
          <View style={[styles.Container]}>
            <DatePicker />
          </View>
          <View style={[styles.Container,styles.marginLeft20]}>
            <TimePicker />
          </View>
        </View>
        <CameraPicker />
        <GalleryPicker />
      </View>
    </ScrollView>
  );
};

export default AccountScreen;
