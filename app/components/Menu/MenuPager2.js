import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ToastAndroid,
  Platform,
  AlertIOS
} from "react-native";

import ViewPager from "react-native-viewpager";
var deviceWidth = Dimensions.get("window").width;

var PAGES = ["Page 0", "Page 1", "Page 2", "Page 3", "Page 4"];

function notifyMessage(msg) {
  if (Platform.OS === "android") {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    AlertIOS.alert(msg);
  }
}

class ImageScreen extends Component {
  getInitialState() {
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2
    });

    return {
      dataSource: dataSource.cloneWithPages(PAGES)
    };
  }

  render() {
    return (
      <ViewPager
        style={this.props.style}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        onChangePage={this._onChangePage}
        isLoop={false}
        autoPlay={false}
      />
    );
  }

  _renderPage = (data, pageID) => {
    return (
      <View style={styles.page}>
        <Text style={styles.text}>{data}</Text>
      </View>
    );
  }

  _onChangePage = (page) => {
    notifyMessage("Current page: " + page);
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  }
});

export default ImagesScreen;
