import React, {useCallback, useEffect, useState, useRef} from 'react';
import {Card} from 'antd';
import {bankOne, bankTwo} from '../lib/banks';
import Display from './Display';
import Panel from './Panel';
import PadsGrid from './PadsGrid';

const DrumMachine: React.FC = () => {
  const [display, setDisplay] = useState<string>('');
  const [power, setPower] = useState<boolean>(true);
  const [bank, setBank] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(50);
  let cleanDisplay = useRef<NodeJS.Timeout | null>(null); // Clean Display Timeout Ref
  const CLEAN_DISPLAY_TIME = 1000; // Timeout Time on ms

  // Get Bank
  const {kit: bankKit, name: bankName} = !bank ? bankOne : bankTwo;

  //Panel Control
  const togglePower = useCallback(() => setPower((prev) => !prev), []);
  const toggleBank = useCallback(() => setBank((prev) => !prev), []);
  const changeVolume = useCallback((volume: number) => setVolume(volume), []);
  const changeDisplay = useCallback((text: string) => {
    if (cleanDisplay.current) clearTimeout(cleanDisplay.current);
    setDisplay(text);
    cleanDisplay.current = setTimeout(() => setDisplay(''), CLEAN_DISPLAY_TIME);
  }, []);

  // Clean Display On Power Off
  useEffect(() => {
    if (!power) setDisplay('');
  }, [power]);

  return (
    <Card id='drum-machine' className='drum'>
      <Display value={display} disabled={!power} />
      <Panel power={power} togglePower={togglePower} bank={bank} bankName={bankName} toggleBank={toggleBank} volume={volume} changeVolume={changeVolume} />
      <PadsGrid bankKit={bankKit} power={power} volume={volume} changeDisplay={changeDisplay} />
    </Card>
  );
};

export default React.memo(DrumMachine);
