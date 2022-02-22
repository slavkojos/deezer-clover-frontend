import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  extendTheme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './pages/Home';
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      error: 'red.500',
      text: {
        default: 'gray.900',
        _dark: 'gray.50',
      },
      hover: {
        default: 'gray.300',
        _dark: 'gray.700',
      },
    },
  },
  config,
});
function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
