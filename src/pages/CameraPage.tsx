import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { Section } from "../../enum/Section.ts";
import { useEffect, useRef, useState } from "react";
import { Camera } from "@mediapipe/camera_utils";
import getHandCapture from "../../controller/getHandCapture.ts";
import { Result } from "postcss";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { HAND_CONNECTIONS, Results } from "@mediapipe/hands";

export default function CameraPage() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const navigateTo = (section: Section) => {
        console.log(section);
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

    const drawCanvas = (results: Results) => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
        console.log(results.image.width, results.image.height);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        if (results.multiHandLandmarks) {
            for (const landmarks of results.multiHandLandmarks) {
                drawConnectors(ctx, landmarks, HAND_CONNECTIONS, { color: "#00FF00", lineWidth: 1 });
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
                // saveCanvasImage(ctx, minX, minY, maxX - minX, maxY - minY);
            }
        }

        ctx.restore();
    };

    useEffect(() => {
        videoHandler();
    }, []);

    return (
        <>
            <div className="relative overflow-x-hidden">
                <Navbar navigateTo={navigateTo} />
                <section className="flex flex-col  w-full h-fit aspect-w-16 aspect-h-9 z-[-1] object-cover">
                    <canvas
                        className="inset-0 z-0 w-full h-fit aspect-w-16 aspect-h-9"
                        ref={canvasRef}
                        width={1920}
                        height={1080}
                    />
                    <video
                        hidden={true}
                        className="inset-0 w-full h-full"
                        ref={videoRef}
                    />
                </section>
                <Footer navigateTo={navigateTo} />
            </div>
        </>
    );
}
