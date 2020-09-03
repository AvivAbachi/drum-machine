import React, {useCallback, useEffect, useRef} from 'react';
import {blockDefaultInput, checkKey, keyTrigger} from '../lib/utility';
import Pad from './Pad';
type padRef = React.MutableRefObject<HTMLAudioElement | null>;

interface props {
  bankKit: {nameTrigger: string; url: string}[];
  changeDisplay: (text: string) => void;
  power: boolean;
  volume: number;
}

const PadsGrid: React.FC<props> = ({bankKit, changeDisplay, power, volume}) => {
  const padRefs: padRef[] = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  // Initial Keyboard Event

  useEffect(() => {
    document.addEventListener('keydown', keyboardPress);
    document.addEventListener('keyup', keyboardRelease);
    return () => {
      document.removeEventListener('keydown', keyboardPress);
      document.addEventListener('keyup', keyboardRelease);
    };
  });

  // Set Volume
  const newVolume = volume / 100;

  useEffect(() => {
    padRefs.forEach((pad: padRef) => {
      if (pad.current !== null) pad.current.volume = newVolume;
    });
  }, [newVolume, padRefs]);

  // Pad Control
  const pressPad = useCallback(
    (index: number) => {
      if (padRefs[index] !== null && power) {
        const audio = padRefs[index]?.current as HTMLAudioElement;
        audio.parentElement?.setAttribute('data-click', 'true');
        audio.currentTime = 0;
        audio.play().finally();
        changeDisplay(bankKit[index].nameTrigger);
      }
    },
    [padRefs, bankKit, changeDisplay, power]
  );

  const releasePad = useCallback(
    (index: number) => {
      padRefs[index].current?.parentElement?.setAttribute('data-click', 'false');
    },
    [padRefs]
  );

  // Keyboard
  // Ped Key - Q, W, E, A, S, D, Z, X, C
  const keyboardPress = useCallback(
    (event: KeyboardEvent) => {
      const {keyIndex, canClick} = checkKey(event);
      if (keyIndex !== -1 && canClick) {
        blockDefaultInput(event);
        pressPad(keyIndex);
      }
    },
    [pressPad]
  );

  const keyboardRelease = useCallback(
    (event: KeyboardEvent) => {
      const {keyIndex, canClick} = checkKey(event);
      if (keyIndex !== -1 && canClick) {
        blockDefaultInput(event);
        releasePad(keyIndex);
      }
    },
    [releasePad]
  );

  return (
    <div className='drum-pads-grid'>
      {padRefs.map((ref, index) => (
        <Pad index={index} url={bankKit[index].url} pressPad={pressPad} releasePad={releasePad} ref={ref} label={keyTrigger[index]} key={'pad_' + keyTrigger[index]} disabled={!power} />
      ))}
    </div>
  );
};

export default React.memo(PadsGrid);
