import { HAND_CONNECTIONS, Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import gesturePredict from "./gesturePredict.ts";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";

export default function handCapture(ctx: CanvasRenderingContext2D, camera: HTMLVideoElement) {
    const mpHands = new Hands({
        locateFile: (file) => {
            return `/node_modules/@mediapipe/hands/${file}`;
        },
    });
    mpHands.setOptions({
        maxNumHands: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
        modelComplexity: 1,
    });

    mpHands.onResults((results) => {
        ctx.save();
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(results.image, 0, 0, ctx.canvas.width, ctx.canvas.height);

        if (results.multiHandLandmarks) {
            for (const landmarks of results.multiHandLandmarks) {
                drawConnectors(ctx, landmarks, HAND_CONNECTIONS, { color: "#00FF00", lineWidth: 3 });
                drawLandmarks(ctx, landmarks, {
                    color: "#FF0000",
                    fillColor: "#00FF00",
                });

                let minX = ctx.canvas.width,
                    minY = ctx.canvas.height,
                    maxX = 0,
                    maxY = 0;
                for (const point of landmarks) {
                    minX = Math.min(minX, point.x * ctx.canvas.width) - 3;
                    minY = Math.min(minY, point.y * ctx.canvas.height) - 3;
                    maxX = Math.max(maxX, point.x * ctx.canvas.width) + 3;
                    maxY = Math.max(maxY, point.y * ctx.canvas.height) + 3;
                }

                ctx.strokeStyle = "#FF0000";
                ctx.lineWidth = 2;
                ctx.strokeRect(minX, minY, maxX - minX, maxY - minY);
                saveCanvasImage(ctx, minX, minY, maxX - minX, maxY - minY);
            }
        }

        ctx.restore();
    });

    new Camera(camera, {
        onFrame: async () => {
            await mpHands.send({ image: camera });
        },
        width: 1280,
        height: 720,
    }).start();
}

async function saveCanvasImage(canvas: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) {
    const newCtx = document.createElement("canvas").getContext("2d");
    if (!newCtx) return;

    newCtx.drawImage(canvas.canvas, x, y, width, height, 0, 0, width, height);
    const img = document.getElementById("handImage") as HTMLImageElement;
    img.src = newCtx.canvas.toDataURL();
    img.width = width;
    img.height = height;
    img.style.width = `${width}px`;
    img.style.height = `${height}px`;

    const newImage = new Image();
    newImage.src = newCtx.canvas.toDataURL();
    newImage.width = width;
    newImage.height = height;
    newImage.style.width = `${width}px`;
    newImage.style.height = `${height}px`;
    newImage.onload = () => {
        gesturePredict(newImage).then();
    };
}
