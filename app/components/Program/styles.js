import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    minWidth: 400,
    backgroundColor: '$white',
  },
  handle: {
    height: 24,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  handleArrow: {
    flex: 1,
    width: 17,
  },
  content: {
    backgroundColor: '$white',    
    paddingTop: 8,
  },
  header: {
    height: 120,
    backgroundColor: '$primary',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    fontSize: 40,
    color: '$white',
    fontWeight: '600',
  },
  subtitle: {
    color: '$white',
    fontWeight: '600',
    fontSize: 22,
  },
  programItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    paddingVertical: 12,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '$primaryNonSelect',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  itemText: {
    fontSize: 22,
    flex: 1,
  },
  itemValue: {
    fontSize: 22,
  },
  check: {
    // alignSelf: 'flex-end',
    width: 35,
    height: 35,
  },
  subtitleIcon: {
    alignSelf: 'center',
    marginRight: 12
  },
});
