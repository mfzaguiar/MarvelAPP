import React from 'react';

import {Container, Image} from './styles';

export default function CImage({source, ...rest}) {
  return (
    <Container>
      <Image source={source} {...rest} />
    </Container>
  );
}
