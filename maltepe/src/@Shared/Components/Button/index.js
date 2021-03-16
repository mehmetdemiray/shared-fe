import React from 'react';
import {Button} from 'antd';

export const ButtonComp = ({type, size, ...defaultProps}) => {
  return (
    <Button {...defaultProps} type={type} size={size}>
      Primary
    </Button>
  )
}
