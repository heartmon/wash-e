import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    height: 170, 
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '$primaryNonSelect',
    borderStyle: 'solid',
    paddingHorizontal: 40,
  },
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: "center",
    padding: 20
  }
});
