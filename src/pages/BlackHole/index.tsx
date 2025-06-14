import { useEffect, type FC } from "react";
import { runBlackHoleSpiral } from "../../utils/blackHoleSpiral";
import "./style.scss";

export const BlackHole: FC = () => {

    useEffect(() => {
        runBlackHoleSpiral();
    }, []);
    return (
        <>
            <canvas
                id="myCanvas"
                className="canvas"
                width={1155}
                height={620}
            />
            <audio autoPlay loop src="audio/thecryofblackhole.mp3">
                Your browser does not support the audio element.
            </audio>
        </>
    )
};
