import React from 'react';
import { Box, Text } from './Restyle/Restyle';

interface Props {
  children: React.ReactNode;
}

const ErrorText = ({ children }: Props) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text variant='title'>{children}</Text>
    </Box>
  );
};

export default ErrorText;
