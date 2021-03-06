import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Box } from '../Restyle/Restyle';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Form = (props: Props) => {
  const { children, title } = props;
  return (
    <Box justifyContent="center" alignItems="center" marginTop="s">
      <ScrollView>
        <Text variant="title">{title}</Text>
        {children}
      </ScrollView>
    </Box>
  );
};

export default Form;
