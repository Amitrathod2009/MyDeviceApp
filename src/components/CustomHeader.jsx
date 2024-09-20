import React, { useState } from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import headerStyles from '../styles/headerStyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Appbar as PaperAppbar } from 'react-native-paper';
import styles from '../styles/styles';

const MORE_ICON = 'dots-vertical';

const CustomHeader = ({ headerTitle,isHomeScreen = false}) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuPress = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleMenuItemPress = () => {
    console.log('Menu item pressed');
  };

  return (
    <PaperAppbar.Header style={[headerStyles.headerContainer]}>
      <PaperAppbar.Content title={<Text style={[headerStyles.headerTitle,isHomeScreen && styles.marginLeft80]}>{headerTitle}</Text>} />
      {isHomeScreen && (
        <>
      <PaperAppbar.Action icon="bell" onPress={() => {}} color="white" />
      <PaperAppbar.Action icon={MORE_ICON} onPress={handleMenuPress} color="white" />
      </>
      )}
      {isMenuVisible && (
        <View style={headerStyles.menuContainer} >
          <TouchableOpacity onPress={handleMenuItemPress} style={headerStyles.menuItem}>
            <Text style={headerStyles.menuText}>Settings</Text>
            <Fontisto name="player-settings" size={24} color="#919090" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMenuItemPress} style={headerStyles.menuItem}>
            <Text style={headerStyles.menuText}>Logout</Text>
            <MaterialCommunityIcons name="logout" size={24} color="#919090" />
          </TouchableOpacity>
        </View>
      )}
    </PaperAppbar.Header>
  );
};

export default CustomHeader;

