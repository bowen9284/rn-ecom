import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import Box from '../../Components/restyle/Box';
import Text from '../../Components/restyle/Text';

interface Props {
  categories: Category[];
  active: number;
  setActive: (index: number) => void;
  onCategoryFilter: (filterCriteria: Category, active: number) => void;
}

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
