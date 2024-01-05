import { HAND_CONNECTIONS, NormalizedLandmarkListList, Results } from "@mediapipe/hands";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { Color } from "../../interface/color.ts";
import { Thickness } from "../../interface/thickness.ts";
import predictModel from "../model/modelHandler.ts";
import DelayFunction from "../misc/delayFunction.ts";

let drawingCanvas: HTMLCanvasElement;
let prediction: string;

let color: Color = {
    landmark: "#FF0000",
    connector: "#00FF00",
};
let thickness: Thickness = {
    landmark: 2,
    connector: 1,
};

const delayedPredict = new DelayFunction(predictModel);

export function setCanvasColor(newColor: Color) {
    color = newColor;
}

export function setCanvasThickness(newThickness: Thickness) {
    thickness = newThickness;
}

export function setCanvasTimeout(newTimeout: number) {
    delayedPredict.setDelay(newTimeout);
}

export default async function drawCanvas(results: Results, canvas: HTMLCanvasElement) {
    if (drawingCanvas === undefined) {
        drawingCanvas = canvas;
    }
    const ctx = canvas.getContext("2d")!;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    if (results.multiHandLandmarks) {
        await getHandImage(results.multiHandLandmarks);
    }
}

async function getHandImage(multiHandLandmarks: NormalizedLandmarkListList) {
    if (drawingCanvas === undefined) {
        return;
    }

    const drawingCtx = drawingCanvas.getContext("2d")!;

    for (const landmarks of multiHandLandmarks) {
        let minX = drawingCanvas.width,
            minY = drawingCanvas.height,
            maxX = 0,
            maxY = 0;

        const landmarkData = [];

        for (const point of landmarks) {
            minX = Math.min(minX, point.x * drawingCanvas.width) - 3;
            minY = Math.min(minY, point.y * drawingCanvas.height) - 3;
            maxX = Math.max(maxX, point.x * drawingCanvas.width) + 3;
            maxY = Math.max(maxY, point.y * drawingCanvas.height) + 3;

            const relativeX = point.x - landmarks[0].x;
            const relativeY = point.y - landmarks[0].y;

            landmarkData.push(relativeX);
            landmarkData.push(relativeY);
        }

        drawConnectors(drawingCtx, landmarks, HAND_CONNECTIONS, {
            color: color.connector,
            lineWidth: thickness.connector,
        });
        drawLandmarks(drawingCtx, landmarks, {
            color: color.landmark,
            fillColor: color.landmark,
            lineWidth: thickness.landmark,
        });

        // console.log(color, thickness);

        const predict = await delayedPredict.run(landmarkData);

        if (predict) {
            prediction = predict;
        }

        drawingCtx.strokeStyle = "#FF0000";
        drawingCtx.lineWidth = 2;
        drawingCtx.strokeRect(minX, minY, maxX - minX, maxY - minY);
        drawingCtx.font = "60px Arial";
        drawingCtx.fillStyle = "#FF0000";
        drawingCtx.fillText(prediction, minX, minY - 10);
    }
}
