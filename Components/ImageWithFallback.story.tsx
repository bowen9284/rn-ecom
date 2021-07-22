import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text, withKnobs } from '@storybook/addon-knobs';
import { View } from 'react-native';
import ImageWithFallback from './ImageWithFallback';

const props = {
  image: '',
  width: undefined,
  height: undefined,
};

export const imageUrl = 'https://picsum.photos/200';

const imageWithFallbackStories = storiesOf('ImageWithFallback', module);
imageWithFallbackStories.addDecorator(withKnobs);
// then I add a story with the name default view, I can add multiple stories to button stories
imageWithFallbackStories.add('displays remote image', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ImageWithFallback image={text('URI', imageUrl)} />
  </View>
));

imageWithFallbackStories.add('displays fallback placeholder', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ImageWithFallback
      image={props.image}
      width={props.width}
      height={props.height}
    />
  </View>
));
