import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from './CustomHeader';
import {Card} from 'react-native-paper';
import DeviceInfo from 'react-native-device-info';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import styles from '../styles/styles';

const DeviceDetailsScreen = () => {
  const [appVersion, setAppVersion] = useState('');
  const [buildVersion, setBuildVersion] = useState('');
  const [bundleId, setBundleId] = useState('');
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [totalDiskSpace, setTotalDiskSpace] = useState('');

  useEffect(() => {
    setAppVersion(DeviceInfo.getVersion());

    setBuildVersion(DeviceInfo.getBuildNumber());

    setBundleId(DeviceInfo.getBundleId());

    DeviceInfo.getTotalDiskCapacity().then(diskSpace => {
      setTotalDiskSpace((diskSpace / (1024 * 1024 * 1024)).toFixed(2));
    });

    DeviceInfo.getBatteryLevel().then(level => {
      setBatteryLevel((level * 100).toFixed(0));
    });
  }, []);

  return (
    <View style={[styles.Container]}>
      <CustomHeader headerTitle="Device Details" />
      <View style={[styles.margin24]}>
        <Card style={[styles.cardContainer]}>
          <Card.Content>
            <View style={styles.cardContent}>
              <View style={[styles.flexDirectionRow]}>
                <MaterialIcons name="apps" size={30} color="#724187" />
                <Text style={[styles.cardText, styles.paddingLeft10]}>
                  App Version
                </Text>
              </View>
              <Text style={[styles.cardText, styles.fontSize18]}>
                {appVersion}
              </Text>
            </View>
          </Card.Content>
        </Card>
        <Card style={[styles.cardContainer]}>
          <Card.Content>
            <View style={[styles.cardContent]}>
              <View style={[styles.flexDirectionRow]}>
                <Ionicons name="build" size={30} color="#724187" />
                <Text style={[styles.cardText, styles.paddingLeft10]}>
                  buildVersion Version
                </Text>
              </View>
              <Text style={[styles.cardText, styles.fontSize18]}>
                {buildVersion}
              </Text>
            </View>
          </Card.Content>
        </Card>
        <Card style={[styles.cardContainer]}>
          <Card.Content>
            <View style={[styles.cardContent]}>
              <View style={[styles.flexDirectionRow]}>
                <MaterialCommunityIcons
                  name="identifier"
                  size={30}
                  color="#724187"
                />
                <Text style={[styles.cardText, styles.paddingLeft10]}>
                  bundle identifier
                </Text>
              </View>
              <Text style={[styles.cardText, styles.fontSize18]}>
                {bundleId}
              </Text>
            </View>
          </Card.Content>
        </Card>
        <View style={[styles.cardRowConatiner,styles.marginTop10]}>
          <Card style={[styles.smallCardContainer, styles.width48]}>
            <Card.Content>
              <Text
                style={[
                  styles.smallCardBtnText,
                  styles.fontSize20,
                  styles.paddingLeft10,
                ]}>
                batteryLevel
              </Text>
              <View
                style={[
                  styles.flexDirectionRow,
                  styles.paddingLeft20,
                  styles.marginTop10,
                ]}>
                <FontAwesome name="battery-3" size={30} color="#724187" />
                <Text style={[styles.smallCardBtnText, styles.paddingLeft10]}>
                  {batteryLevel}%
                </Text>
              </View>
            </Card.Content>
          </Card>
          <Card style={[styles.smallCardContainer, styles.width48]}>
            <Card.Content>
              <Text style={[styles.smallCardBtnText, styles.fontSize20]}>
                {' '}
                Disk Space
              </Text>
              <View
                style={[
                  styles.flexDirectionRow,
                  styles.paddingLeft10,
                  styles.marginTop10,
                ]}>
                <FontAwesome6 name="floppy-disk" size={30} color="#724187" />
                <Text style={[styles.smallCardBtnText, styles.paddingLeft10]}>
                  {totalDiskSpace} GB
                </Text>
              </View>
            </Card.Content>
          </Card>
        </View>
      </View>
    </View>
  );
};

export default DeviceDetailsScreen;
