/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { WebView } from 'react-native-webview';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
class App extends Component {
  render() {
    const customHTML = ` <html> <head>  <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /><link href=’https://unpkg.com/fundamental-styles@latest/dist/fundamental-styles.css' rel=’stylesheet’>
    <link href=’https://unpkg.com/@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css' rel=’stylesheet’>
    <link href=’https://unpkg.com/fundamental-styles@{versionNumber}/dist/theming/sap_horizon.css' rel=’stylesheet’></head>

      <body style="display:flex; flex-direction: column;justify-content: center; 
        align-items:center; background-color: white; color:black; height: 100%;">
        

          <div className="App">
          <div class="fddocs-container fddocs-button-container">
      <button class="fd-button">Default Button</button>
      <button class="fd-button fd-button--emphasized">Emphasized Button</button>
      <button class="fd-button fd-button--ghost">Ghost Button</button>
      <button class="fd-button fd-button--positive">Positive Button</button>
      <button class="fd-button fd-button--negative">Negative Button</button>
      <button class="fd-button fd-button--attention">Attention Button</button>
      <button class="fd-button fd-button--transparent">Transparent Button</button>
    </div>
  </div>
</div>
       </body> </html>`;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView 
          source={{ uri: "http://localhost:3000/" }} 
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
