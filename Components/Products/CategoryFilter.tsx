import React from 'react';
import { ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Box } from '../Restyle/Restyle';

interface Props {
  categories: Category[];
  active: number;
  setActive: (index: number) => void;
  onCategoryFilter: (filterCriteria: Category, active: number) => void;
  fetchError: any;
  isFetching: boolean;
}

const CategoryFilter = (props: Props) => {
  const {
    active,
    categories,
    setActive,
    onCategoryFilter,
    fetchError,
    isFetching,
  } = props;

  if (isFetching) {
    return <ActivityIndicator testID="activity-indicator" />;
  }

  if (fetchError !== undefined) {
    return <Text>There was an error fetching categories.</Text>;
  }

  if (!categories.length) {
    return <Text>No Products found that match category.</Text>;
  }

  return (
    <Box>
      <ScrollView
        testID="scrollView"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((cat, catIndex) => (
          <TouchableOpacity
            testID={`category-pressable-${cat.id}`}
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
              <Text testID="button-label" variant="buttonLabel">
                {cat.name}
              </Text>
            </Box>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Box>
  );
};

export default CategoryFilter;
