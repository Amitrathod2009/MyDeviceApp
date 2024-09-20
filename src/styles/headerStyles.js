import { StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#724187',
    padding: 20,
    alignItems: 'center',
    zIndex:100
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontFamily:'Roboto-Medium',
    textAlign:'center',
  },
  menuContainer: {
    position: 'absolute',
    top: 22,
    right: 50,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 15,
  },
  menuText: {
    paddingRight: 30,
    paddingVertical:25,
    color:'black',
    fontFamily:'Roboto-Medium',
  },
});

export default headerStyles;
