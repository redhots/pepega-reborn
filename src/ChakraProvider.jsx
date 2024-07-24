import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  // Your custom theme configurations (if any)
});

function CustomChakraProvider({ children }) {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      {children}
    </ChakraProvider>
  );
}

export default CustomChakraProvider;
