import * as tf from "@tensorflow/tfjs";

const letterPediction = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];

export default async function getGesturePrediction(image: HTMLImageElement) {
    try {
        const model = await tf.loadLayersModel("../src/assets/camera/model.json");

        let imageTf = tf.browser.fromPixels(image);

        imageTf = tf.image.rgbToGrayscale(imageTf);

        imageTf = tf.image.resizeNearestNeighbor(imageTf, [28, 28]);

        imageTf = imageTf.reshape([1, 28, 28, 1]);

        let predictions = model.predict(imageTf);

        predictions = tf.argMax(predictions, 1);

        console.log(predictions);
    } catch (error) {
        console.log(error);
    }
}
