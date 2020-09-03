import React from 'react';

interface props {
  disabled: boolean;
  index: number;
  label: string;
  pressPad: (index: number) => void;
  releasePad: (index: number) => void;
  url: string;
}

const Pad = React.forwardRef<HTMLAudioElement, props>(({disabled, index, label, pressPad, releasePad, url}, ref) => {
  return (
    <button disabled={disabled} id={'pad-' + label} className='drum-pad' onMouseDown={() => pressPad(index)} onMouseUp={() => releasePad(index)} onMouseLeave={() => releasePad(index)}>
      <span>{label}</span>
      <audio ref={ref} id={label} className='clip' src={url} />
    </button>
  );
});

export default React.memo(Pad);
