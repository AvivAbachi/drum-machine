import React from 'react';
import {Slider, Switch} from 'antd';
import {volumeFormatter} from '../lib/utility';

interface SwitchPanelProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
}

const SwitchPanel = React.memo<SwitchPanelProps>(({checked, disabled, label, onClick}) => {
  return (
    <div>
      <span>{label}</span>
      <Switch disabled={disabled} checked={checked} onClick={onClick} />
    </div>
  );
});

interface SliderPanelProps {
  disabled?: boolean;
  label?: string;
  onChange?: (value: number) => void;
  value?: number;
}

const SliderPanel = React.memo<SliderPanelProps>(({disabled, label, onChange, value}) => {
  return (
    <div>
      <span>{label}</span>
      <Slider disabled={disabled} value={value} tipFormatter={(volume) => volumeFormatter(volume)} onChange={onChange} />
    </div>
  );
});

export {SwitchPanel, SliderPanel};
