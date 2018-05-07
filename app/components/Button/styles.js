import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  $backgroundSelected: '$primary',
  $backgroundNonSelected: '$primaryNonSelect',
  container: {

  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '$primaryNonSelect',
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '400',
    maxWidth: 220,
    marginLeft: 16,
  },
});
