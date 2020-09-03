import React from 'react';

interface props {
  disabled: boolean;
  value: string;
}

const Display: React.FC<props> = ({disabled, value}) => {
  return (
    <div id='display' className={'drum-display' + (disabled ? ' disable' : '')}>
      <span>{value}</span>
    </div>
  );
};

export default React.memo(Display);
