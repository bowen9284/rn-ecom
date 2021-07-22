import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import ErrorText from '../ErrorText';
import { Text, Box } from '../Restyle/Restyle';
import CategoriesSkeleton from '../Skeletons/CategoriesSkeleton';
import Category from '../../Models/Category';

interface Props {
  categories: Category[];
  active: number;
  setActive: (index: number) => void;
  onCategoryFilter: (filterCriteria: Category, active: number) => void;
  fetchError: any;
  isLoading: boolean;
}

const CategoryFilter = (props: Props) => {
  const {
    active,
    categories,
    setActive,
    onCategoryFilter,
    fetchError,
    isLoading,
  } = props;

  if (fetchError !== undefined) {
    return <ErrorText>There was an error fetching categories.</ErrorText>;
  }

  if (isLoading) {
    return <CategoriesSkeleton isLoading={isLoading} />;
  }

  if (!categories.length) {
    return <ErrorText>No Products found that match category.</ErrorText>;
  }

  return (
    <Box>
      <ScrollView
        testID="scrollView"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((cat, catIndex) => (
          <TouchableOpacity
            key={cat.id}
            testID={`category-pressable-${cat.id}`}
            onPress={() => {
              const isActive =
                active === categories.indexOf(cat) ? -1 : catIndex;
              onCategoryFilter(cat, isActive);
              setActive(isActive);
            }}
          >
            <Box
              key={cat.id}
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
