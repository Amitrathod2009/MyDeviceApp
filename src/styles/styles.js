import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  iconConatiner: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  stethoscopeIcon: {
    marginTop: 20,
  },
  fileIcon: {
    marginTop: 20,
    transform: [ { rotate: '90deg' },
      { scaleX: -1 }],
  },
  cardNoText: {
    fontSize: 64,
    color: '#724187',
    fontFamily: 'Roboto-Medium',
    marginLeft: 20,
  },
  smallCardIconCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#724187',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxText:{
    marginLeft: 8,
     fontSize: 20,
     marginBottom: 6,
  },
  RobotoMediumFont: {
    fontFamily: 'Roboto-Medium',
    fontSize: 25,
    color: '#43388a',
  },
  cardContainer: {
    marginVertical: 12,
    paddingVertical: 24,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 20,
    color: '#724187',
    fontFamily: 'Roboto-light',
  },
  cardRowConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  smallCardContainer: {
    width: '40%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  smallCardBtnText: {
    textAlign: 'center',
    marginTop: 5,
    color: '#724187',
    fontSize: 18,
    fontFamily: 'Roboto-light',
  },
  tabBarStyle: {
    paddingBottom: 15,
    height: 80,
  },
  tabBarLabelStyle: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  alignItemsCenter:{
    alignItems:'center',
  },
  dateTimeText: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: '#43388a',
  },
  colorWhite: {
    color: 'white',
  },
  fontSize18: {
    fontSize: 18,
  },
  fontSize20: {
    fontSize: 20,
  },
  width48: {
    width: '48%',
  },
  margin24: {
    marginHorizontal: 24,
    marginVertical: 24,
  },
  marginV24: {
    marginVertical: 24,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  marginHorizontal10:{
    marginHorizontal:10,
  },
  marginLeft20: {
    marginLeft: 20,
  },
  marginTop24: {
    marginTop: 24,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginLeft80: {
    marginLeft: 80,
  },
  marginTop10:{
    marginTop: 10,
  },
  marginTop20:{
    marginTop: 20,
  },
  padding5: {
    padding: 5,
  },
  paddingLeft10:{
    paddingLeft:10,
  },
  paddingLeft20:{
    paddingLeft:20,
  },
  paddingHorizontal15: {
    paddingHorizontal: 15,
  },
  marginRight80: {
    marginRight: 80,
  },
});

export default styles;
