import {StyleSheet, View, Text, ViewPagerAndroid} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

const styles = {
  viewPager: {
    // flex: 1
    height: 170,
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
}

export default class ViewPagerPage extends Component {
    render() {
      return (
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}>
          <View style={{backgroundColor: 'red'}}>
            <Text>First page</Text>
          </View>
          <View style={styles.pageStyle}>
            <Text>Second page</Text>
          </View>
        </ViewPagerAndroid>
      );
  }
    // render() {
    //     return (
    //         <View onStartShouldSetResponder={() => true} style={{flex:1}}>
    //             <IndicatorViewPager
    //                 style={{height:200}}
    //                 indicator={this._renderDotIndicator()}
    //             >
    //                 <View style={{backgroundColor:'cadetblue'}}>
    //                     <Text>page one</Text>
    //                 </View>
    //                 <View style={{backgroundColor:'cornflowerblue'}}>
    //                     <Text>page two</Text>
    //                 </View>
    //                 <View style={{backgroundColor:'#1AA094'}}>
    //                     <Text>page three</Text>
    //                 </View>
    //             </IndicatorViewPager>

    //         </View>
    //     );
    // }

    // _renderTitleIndicator() {
    //     return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
    // }

    // _renderDotIndicator() {
    //     return <PagerDotIndicator pageCount={3} />;
    // }

}