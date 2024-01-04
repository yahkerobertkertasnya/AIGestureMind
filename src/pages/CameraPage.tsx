import { useEffect, useRef } from "react";
import { Camera } from "@mediapipe/camera_utils";
import getHandCapture from "../../controller/getHandCapture.ts";
import { HAND_CONNECTIONS, NormalizedLandmarkListList, Results } from "@mediapipe/hands";
import getGesturePrediction from "../../controller/getGesturePrediction.ts";
import saveCanvasImage from "../../controller/saveCanvasImage.ts";
import * as tf from "@tensorflow/tfjs";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";

export default function CameraPage() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasRef2 = useRef<HTMLCanvasElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const model = tf.loadLayersModel("model.json");
    // const navigateTo = (section: Section) => {
    //     console.log(section);
    // };

    const getCanvas = () => {
        return {
            canvas: canvasRef.current!,
            ctx: canvasRef.current!.getContext("2d")!,
        };
    };

    const videoHandler = async () => {
        const video = videoRef.current!;
        const hands = getHandCapture();
        const camera = new Camera(video, {
            onFrame: async () => {
                await hands.send({ image: video });
            },
            width: 1920,
            height: 1080,
        });

        await camera.start();

        hands.onResults((result) => drawCanvas(result));
    };

    const drawCanvas = async (results: Results) => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        if (results.multiHandLandmarks) {
            await getHandImage(results.multiHandLandmarks);
        }
    };

    const getHandImage = async (multiHandLandmarks: NormalizedLandmarkListList) => {
        const { canvas, ctx } = getCanvas();

        for (const landmarks of multiHandLandmarks) {
            let minX = canvas.width,
                minY = canvas.height,
                maxX = 0,
                maxY = 0;

            const landmarkData = [];

            for (const point of landmarks) {
                minX = Math.min(minX, point.x * canvas.width) - 3;
                minY = Math.min(minY, point.y * canvas.height) - 3;
                maxX = Math.max(maxX, point.x * canvas.width) + 3;
                maxY = Math.max(maxY, point.y * canvas.height) + 3;

                const relativeX = point.x - landmarks[0].x;
                const relativeY = point.y - landmarks[0].y;

                landmarkData.push(relativeX);
                landmarkData.push(relativeY);
            }

            // console.log(landmarkData);

            drawConnectors(ctx, landmarks, HAND_CONNECTIONS, { color: "#00FF00", lineWidth: 1 });
            drawLandmarks(ctx, landmarks, {
                color: "#FF0000",
                fillColor: "#00FF00",
            });

            await handleHandImage(landmarkData);

            ctx.strokeStyle = "#FF0000";
            ctx.lineWidth = 2;
            ctx.strokeRect(minX, minY, maxX - minX, maxY - minY);
        }
    };

    const handleHandImage = async (landmarkData: number[]) => {
        const nonPromiseModel = await model;

        const predict = nonPromiseModel.predict(tf.tensor(landmarkData, [1, 42]));

        const label = tf.argMax(predict, 1).dataSync()[0];

        const classes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "Space", "T", "U", "V", "W", "X", "Y", "Z"];
        console.log(classes[label]);
    };

    // const debouncedPrediction = debounce(handleHandImage, 1);

    useEffect(() => {
        videoHandler().then();
    }, []);

    return (
        <>
            <div className="relative overflow-x-hidden">
                <img
                    ref={imageRef}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/*<Navbar navigateTo={navigateTo} />*/}
                <section className="flex flex-col  w-full h-fit aspect-w-16 aspect-h-9 z-[-1] object-cover">
                    <canvas
                        className="inset-0 z-0 w-full h-fit aspect-w-16 aspect-h-9"
                        ref={canvasRef}
                        width={1920}
                        height={1080}
                    />
                    <canvas
                        className="inset-0 z-0 h-auto aspect-w-16 aspect-h-9"
                        ref={canvasRef2}
                        width={1920 / 4}
                        height={1080 / 4}
                        style={{
                            width: "200px",
                            height: "200px",
                        }}
                    />
                    <video
                        hidden={true}
                        className="inset-0 w-full h-full"
                        ref={videoRef}
                    />
                </section>
                {/*<Footer navigateTo={navigateTo} />*/}
            </div>
        </>
    );
}
