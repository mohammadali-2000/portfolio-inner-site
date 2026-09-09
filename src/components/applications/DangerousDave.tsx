import React, { useState } from 'react';
import DosPlayer from '../dos/DosPlayer';
import Window from '../os/Window';

export interface DangerousDaveAppProps extends WindowAppProps {}

const DangerousDaveApp: React.FC<DangerousDaveAppProps> = (props) => {
    const [width, setWidth] = useState(820);
    const [height, setHeight] = useState(580);

    return (
        <Window
            top={15}
            left={15}
            width={width}
            height={height}
            windowTitle="Dangerous Dave (1990)"
            windowBarColor="#8B0000"
            windowBarIcon="windowGameIcon"
            bottomLeftText={'Powered by JSDOS & DOSBox (John Romero, 1990)'}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <DosPlayer width={width} height={height} bundleUrl="dave.jsdos" />
        </Window>
    );
};

export default DangerousDaveApp;
