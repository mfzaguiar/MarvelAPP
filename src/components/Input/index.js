import React, {useState, useEffect, forwardRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {Container, TInput} from './styles';
import {RectButton} from 'react-native-gesture-handler';

function Input({style, value, icon, ...rest}, ref) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(value);
  }, [value]);

  function handleChange(value) {
    setText(value);
  }

  return (
    <Container style={style}>
      <TInput
        value={text}
        onChangeText={() => handleChange(value)}
        {...rest}
        ref={ref}
      />
      {icon === 'clear' ? (
        <RectButton onPress={() => handleChange('')}>
          <Icon name="clear" size={20} color="rgba(255,255,255,0.6)" />
        </RectButton>
      ) : (
        <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />
      )}
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
