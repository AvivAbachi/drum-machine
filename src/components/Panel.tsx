import React, {useCallback, useEffect} from 'react';
import {SliderPanel, SwitchPanel} from './PanelControlrs';
import {blockDefaultInput, checkKey} from '../lib/utility';

interface props {
  bank: boolean;
  bankName: string;
  changeVolume: (volume: number) => void;
  power: boolean;
  toggleBank: () => void;
  togglePower: () => void;
  volume: number;
}

const Panel: React.FC<props> = ({bank, bankName, changeVolume, power, toggleBank, togglePower, volume}) => {
  // Initial Keyboard Event
  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  });

  // Keyboard
  // Power Switch - Space
  // Bank Switch - Tab
  // Volume Control - 1-9, 0
  const handleKeyboard = useCallback(
    (event: KeyboardEvent) => {
      const {canClick} = checkKey(event);
      const {keyCode} = event;
      if (canClick && keyCode === 32) {
        blockDefaultInput(event);
        togglePower();
      }
      if (canClick && power && keyCode === 9) {
        blockDefaultInput(event);
        toggleBank();
      }
      if (canClick && power && keyCode >= 48 && keyCode <= 57) {
        const volume = keyCode === 48 ? 100 : (keyCode - 48) * 10;
        blockDefaultInput(event);
        changeVolume(volume);
      }
    },
    [changeVolume, power, toggleBank, togglePower]
  );

  return (
    <div className='drum-panel'>
      <div>
        <SwitchPanel label='Power' onClick={togglePower} checked={power} />
        <SwitchPanel label={bankName} onClick={toggleBank} checked={bank} disabled={!power} />
      </div>
      <SliderPanel label='Volume' disabled={!power} value={volume} onChange={changeVolume} />
    </div>
  );
};

export default React.memo(Panel);
