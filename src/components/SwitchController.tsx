import { memo } from 'react';
import { Switch } from 'antd';

interface props {
	checked?: boolean;
	disabled?: boolean;
	label?: string;
	onClick?: () => void;
}

const SwitchController = ({ checked, disabled, label, onClick }: props) => {
	return (
		<div>
			<span>{label}</span>
			<Switch disabled={disabled} checked={checked} onClick={onClick} />
		</div>
	);
};

export default memo(SwitchController);
