import { memo } from 'react';
import { Slider } from 'antd';
import { volumeFormatter } from '../utility';

interface props {
	disabled?: boolean;
	label?: string;
	onChange?: (value: number) => void;
	value?: number;
}

const SliderController = memo<props>(({ disabled, label, onChange, value }) => {
	return (
		<div>
			<span>{label}</span>
			<Slider disabled={disabled} value={value} tipFormatter={(volume) => volumeFormatter(volume)} onChange={onChange} />
		</div>
	);
});

export default memo(SliderController);
