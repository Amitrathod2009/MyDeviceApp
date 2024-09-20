import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {DatePickerModal} from 'react-native-paper-dates';
import {Button} from 'react-native-paper';
import styles from '../styles/styles';

export default function DatePicker() {
  const [date, setDate] = useState(null);
  const [visibleDate, setVisibleDate] = useState(false);

  const openDatePicker = () => setVisibleDate(true);
  const closeDatePicker = () => setVisibleDate(false);

  const onConfirmDate = params => {
    setDate(params.date);
    closeDatePicker();
  };
  return (
    <View style={[styles.marginTop24]}>
      <Button
        mode="contained"
        onPress={openDatePicker}
        style={[styles.padding5]}
        labelStyle={[styles.fontSize18]}>
        Pick a Date
      </Button>

      <DatePickerModal
        locale="en"
        mode="single"
        visible={visibleDate}
        onDismiss={closeDatePicker}
        date={date}
        onConfirm={onConfirmDate}
      />

      {date && (
        <Text style={[styles.dateTimeText]}>Date: {date.toDateString()}</Text>
      )}
    </View>
  );
}
