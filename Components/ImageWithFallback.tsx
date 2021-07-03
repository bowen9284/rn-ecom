import React, { useState } from 'react';
import { Image } from 'react-native';

interface Props {
  image: string;
  width?: number | string;
  height?: number;
}

const ImageWithFallback = (props: Props) => {
  const { image, width = 100, height = 100 } = props;

  const [imageWithFallback, setImageWithFallback] = useState({
    uri: image,
  });

  const fallbackImage = require('../assets/placeholder.jpeg');

  const fallbackOnError = () => {
    setImageWithFallback(fallbackImage);
  };

  return (
    <>
      {image != '' ? (
        <Image
          onError={() => fallbackOnError()}
          testID="card-remote-image"
          resizeMode="contain"
          source={imageWithFallback}
          style={{ width, height }}
        />
      ) : (
        <Image
          testID="card-local-image"
          resizeMode="contain"
          source={require('../assets/placeholder.jpeg')}
          style={{ width, height }}
        />
      )}
    </>
  );
};

export default ImageWithFallback;
