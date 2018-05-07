import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  energyBubble: {
    width: 230,
    height: 165,
    paddingHorizontal: 24, 
    paddingTop: 16,
  },
  clothesBubble: {
    width: 227,
    height: 146,
    paddingHorizontal: 16, 
    paddingTop: 8,
  },
  iconBubble: {
    width: 121,
    height: 139,
  },
  chemicalBubble: {
    width: 226,
    height: 110,
    paddingHorizontal: 24, 
    paddingTop: 16,
  },
  textBubble: {
    width: 281,
    height: 121,
    paddingHorizontal: 24, 
    paddingTop: 28, 
  },
  consumptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  consumptionIcon: {
    marginRight: 16,
    width: 33,
  },
  barContainer: {
    position: 'relative',
    flex: 1,
  },
  bar: {
    width: '100%',
    backgroundColor: '#C4C4C4',
    height: 21,
    borderRadius: 4,
    position: 'absolute',
    top: -8,
  },
  barValue: {
    width: 20,
    backgroundColor: '#222222',
    height: 21,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    position: 'absolute',
    top: -8,
  },
  indicator: {
    position: 'absolute',
    top: -8, 
  },
  textBubbleText: {
    fontWeight: '600', 
    fontSize: 28, 
    flex: 1,
    color: '$primary'
  }

});
