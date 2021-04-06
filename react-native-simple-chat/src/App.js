import React, { useState } from 'react';
import { StatusBar, Image } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Navigation from './navigations';
import { images } from './utils/images';
import { ProgressProvider, UserProvider } from './contexts';

const App = () => {
	return (
	  <ThemeProvider theme={theme}>
			<StatusBar barStyle="dark-content" />
	  </ThemeProvider>
	);
  };
  
  export default App;