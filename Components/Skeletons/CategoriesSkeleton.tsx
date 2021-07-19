import { useTheme } from '@shopify/restyle';
import React from 'react';
import { View } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';
import { Theme } from '../../util/theme';
import { Box } from '../Restyle/Restyle';

interface Props {
  isLoading: boolean;
}

const skeletonBonesLayout = Array(4).fill({ width: 80, height: 40 });

const CategoriesSkeleton = ({ isLoading }: Props) => {
  const theme = useTheme<Theme>();
  const { skeletonBackground, skeletonHighlight } = theme.colors;

  return (
    <Box margin="s">
      {isLoading && (
        <>
          {/* empty view for testability of component and testID not being supported by SkeletonContent */}
          <View testID="category-loading-skeleton" />
          <SkeletonContent
            containerStyle={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 40,
            }}
            duration={1000}
            boneColor={skeletonBackground}
            highlightColor={skeletonHighlight}
            isLoading={isLoading}
            layout={skeletonBonesLayout}
          />
        </>
      )}
    </Box>
  );
};

export default CategoriesSkeleton;
