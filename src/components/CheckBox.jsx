import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper';
import styles from '../styles/styles';

export default function CheckBox() {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={[styles.marginTop20,styles.marginBottom10]}>
          <View style={[styles.flexDirectionRow,styles.alignItemsCenter]}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              uncheckedColor="#724187"
            />
            <TouchableOpacity onPress={() => setChecked(!checked)}>
              <Text style={[styles.checkBoxText]}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  )
}