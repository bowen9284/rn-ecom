import React from 'react';
import Button from '../Restyle/Button';
import { Box } from '../Restyle/Restyle';

interface Props {
  label: string;
  onPress: () => void;
}

const TabAdvanceButton = (props: Props) => {
  const { label, onPress } = props;

  return (
    <Box
      flex={1}
      marginRight="m"
      marginBottom="m"
      justifyContent="flex-end"
      alignItems="flex-end"
    >
      <Button label={label} onPress={onPress} />
    </Box>
  );
};

export default TabAdvanceButton;
