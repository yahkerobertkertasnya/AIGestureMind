interface SaveCanvas {
    canvas: HTMLCanvasElement;
    x: number;
    y: number;
    width: number;
    height: number;
    newCanvas: HTMLCanvasElement;
}

export default async function aveCanvasImage({ canvas, x, y, width, height, newCanvas }: SaveCanvas): Promise<HTMLImageElement> {
    const newCtx = newCanvas.getContext("2d") as CanvasRenderingContext2D;

    newCtx.canvas.height = height;
    newCtx.canvas.width = width;
    newCtx.drawImage(canvas, x, y, width, height, 0, 0, width, height);

    return new Promise<HTMLImageElement>((resolve) => {
        const image = new Image();
        image.src = newCtx.canvas.toDataURL();
        image.onload = () => {
            resolve(image);
        };
    });
}
