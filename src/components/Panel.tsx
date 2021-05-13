import { FC, memo, useCallback, useEffect } from 'react';
import { blockDefaultInput, checkKey } from '../utility';
import SliderController from './SliderController';
import SwitchController from './SwitchController';

interface props {
	bank: boolean;
	bankName: string;
	changeVolume: (volume: number) => void;
	power: boolean;
	toggleBank: () => void;
	togglePower: () => void;
	volume: number;
}

const Panel: FC<props> = ({ bank, bankName, changeVolume, power, toggleBank, togglePower, volume }) => {
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
			const canClick = checkKey(event).canClick;
			const keyCode = event.keyCode;
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
				<SwitchController label='Power' onClick={togglePower} checked={power} />
				<SwitchController label={bankName} onClick={toggleBank} checked={bank} disabled={!power} />
			</div>
			<SliderController label='Volume' disabled={!power} value={volume} onChange={changeVolume} />
		</div>
	);
};

export default memo(Panel);
