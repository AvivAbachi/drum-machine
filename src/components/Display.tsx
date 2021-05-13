import { FC, memo } from 'react';

interface props {
	disabled: boolean;
	value: string;
}

const Display: FC<props> = ({ disabled, value }) => {
	return (
		<div id='display' className={'drum-display' + (disabled ? ' disable' : '')}>
			<span>{value}</span>
		</div>
	);
};

export default memo(Display);
