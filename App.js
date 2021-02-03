import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import Home from './screens/home';
import store from "./store/store"

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

