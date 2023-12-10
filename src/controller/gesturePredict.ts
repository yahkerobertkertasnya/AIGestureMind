import * as tf from "@tensorflow/tfjs";

const letterPediction = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];

export default async function gesturePredict(image: HTMLImageElement) {
    try {
        const model = await tf.loadLayersModel("../src/assets/model.json");

        let imageTf = tf.browser.fromPixels(image);
        imageTf = tf.image.rgbToGrayscale(imageTf);

        const resizedImage = tf.image.resizeBilinear(imageTf, [28, 28]).expandDims(0);

        const predictions = model.predict(resizedImage);

        // @ts-ignore
        const labels = tf.argMax(predictions, 1);

        console.log(predictions);

        // console.log(imageTf);
    } catch (error) {
        console.log(error);
    }
}
