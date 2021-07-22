import React from 'react';
import SkeletonContent from 'react-native-skeleton-content';
import { useTheme } from '@shopify/restyle';
import { View } from 'react-native';
import { Theme } from '../../util/theme';
import Card from '../Restyle/Card';

interface Props {
  isLoading: boolean;
  length?: number;
}

const ProductsSkeleton = ({ isLoading, length = 6 }: Props) => {
  const theme = useTheme<Theme>();
  const { skeletonBackground, skeletonHighlight } = theme.colors;

  const bonesLayout = Array(length).fill({
    width: 160,
    height: 225,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 10,
  });

  return (
    <Card margin="s">
      {isLoading && (
        <>
          {/* empty view for testability of component and testID not being supported by SkeletonContent */}
          <View testID="product-loading-skeleton" />
          <SkeletonContent
            containerStyle={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
            duration={1000}
            boneColor={skeletonBackground}
            highlightColor={skeletonHighlight}
            isLoading={isLoading}
            layout={bonesLayout}
          />
        </>
      )}
    </Card>
  );
};

export default ProductsSkeleton;
