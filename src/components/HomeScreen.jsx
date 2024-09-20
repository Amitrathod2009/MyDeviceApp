import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from './CustomHeader';
import styles from '../styles/styles';
import {Card} from 'react-native-paper';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  return (
    <View style={[styles.Container]}>
      <CustomHeader headerTitle="Dashboard" isHomeScreen />
      <View style={[styles.margin24]}>
        <Text style={[styles.RobotoMediumFont]}>upcoming Consultations</Text>
        <Card style={[styles.marginV24]}>
          <Card.Content>
            <View style={styles.cardContent}>
              <View style={styles.Container}>
                <Text style={[styles.cardText]}>Dr. Marta Juarez</Text>
                <Text style={[styles.cardText]}>Dr. Hans Gerhoff</Text>
              </View>
            </View>
            <View style={styles.iconConatiner}>
              <Fontisto
                name="stethoscope"
                size={48}
                color="#724187"
                style={[styles.stethoscopeIcon]}
              />
              <Text style={[styles.cardNoText]}>2</Text>
            </View>
          </Card.Content>
        </Card>
        <Text style={[styles.RobotoMediumFont]}>Medical Files</Text>
        <Card style={[styles.marginV24]}>
          <Card.Content>
            <View style={styles.cardContent}>
              <View style={styles.Container}>
                <Text style={[styles.cardText]}>mynewfiles.pdf</Text>
                <Text style={[styles.cardText]}>mynewfiles.pdf</Text>
                <Text style={[styles.cardText]}>mynewfiles.pdf</Text>
              </View>
            </View>
            <View style={styles.iconConatiner}>
              <AntDesign
                name="file1"
                size={48}
                color="#724187"
                style={[styles.fileIcon]}
              />
              <Text style={[styles.cardNoText]}>7</Text>
            </View>
          </Card.Content>
        </Card>
        <View style={[styles.cardRowConatiner]}>
          <Card style={[styles.smallCardContainer]}>
            <Card.Content>
              <View style={[styles.smallCardIconCircle]}>
                <FontAwesome name="plus" size={30} color="white" />
              </View>
              <Text style={[styles.smallCardBtnText]}>Schedule</Text>
            </Card.Content>
          </Card>
          <Card style={[styles.smallCardContainer]}>
            <Card.Content>
              <View style={[styles.smallCardIconCircle]}>
                <Ionicons name="call" size={30} color="white" />
              </View>
              <Text style={[styles.smallCardBtnText]}>Call</Text>
            </Card.Content>
          </Card>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
