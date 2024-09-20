import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {TimePickerModal} from 'react-native-paper-dates';
import { Button } from 'react-native-paper';
import styles from '../styles/styles';
export default function TimePicker() {
  const [time, setTime] = useState(null);
  const [visibleTime, setVisibleTime] = useState(false);


  const openTimePicker = () => setVisibleTime(true);
  const closeTimePicker = () => setVisibleTime(false);

  const onConfirmTime = ({hours, minutes}) => {
    setTime(`${hours}:${minutes}`);
    closeTimePicker();
  };
  return (
    <View
          style={[styles.marginTop24]}>
          <Button mode="contained" onPress={openTimePicker} style={[styles.padding5]}  labelStyle={[styles.fontSize18]}>
            Pick a Time
          </Button>

          <TimePickerModal
            visible={visibleTime}
            onDismiss={closeTimePicker}
            onConfirm={onConfirmTime}
            label="Select time"
            cancelLabel="Cancel"
            confirmLabel="Ok"
          />
          {time && <Text style={[styles.dateTimeText]}>Time: {time}</Text>}
        </View>
  )
}