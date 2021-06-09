import {
  createRestyleComponent,
  createVariant,
  SpacingProps,
  VariantProps,
} from '@shopify/restyle';
import { Theme } from '../../util/theme';
import { Box } from './Restyle';

type Props = SpacingProps<Theme> & VariantProps<Theme, 'cardVariants'>;

const Card = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: 'cardVariants' })], Box);

export default Card;
