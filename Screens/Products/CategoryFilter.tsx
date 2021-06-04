import { Item } from 'native-base';
import React from 'react';
import {
  GestureResponderEvent,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Box from '../../Components/restyle/Box';
import Text from '../../Components/restyle/Text';

interface Props {
  categories: Category[];
  active: number;
  setActive: (index: number) => void;
  onCategoryFilter: (filterCriteria: Category, active: number) => void;
}
// todo fix filtering to handle going from one active filter to another
const CategoryFilter = (props: Props) => {
  const { active, categories, setActive, onCategoryFilter } = props;

  return (
    <Box>
      {categories.length > 0 ? (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((cat, catIndex) => (
            <TouchableOpacity
              key={catIndex}
              onPress={() => {
                const isActive =
                  active === categories.indexOf(cat) ? -1 : catIndex;
                onCategoryFilter(cat, isActive);
                setActive(isActive);
              }}
            >
              <Box
                key={catIndex}
                backgroundColor={
                  active === catIndex
                    ? 'buttonDisabledPrimaryBackground'
                    : 'buttonPrimaryBackground'
                }
                paddingVertical="s"
                paddingHorizontal="m"
                borderRadius={15}
                margin="s"
              >
                <Text variant="buttonLabel">{cat.name}</Text>
              </Box>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <Box>
          <Text>No Products found</Text>
        </Box>
      )}
    </Box>
  );
};

export default CategoryFilter;
