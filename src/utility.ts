export const volumeFormatter = (volume?: number) => `${volume}%`;

const keyMap = [81, 87, 69, 65, 83, 68, 90, 88, 67];
export const keyTrigger = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

export const checkKey = (event: KeyboardEvent) => {
	const { keyCode, ctrlKey, altKey, shiftKey, metaKey, repeat } = event;
	const keyIndex = keyMap.indexOf(keyCode);
	const canClick = !(ctrlKey || altKey || shiftKey || metaKey || repeat);
	return { keyIndex, canClick };
};

export const blockDefaultInput = (event: KeyboardEvent) => {
	event.stopPropagation();
	event.preventDefault();
	event.cancelBubble = true;
	event.returnValue = false;
};
