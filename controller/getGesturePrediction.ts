import * as tf from "@tensorflow/tfjs";
import { Rank, Tensor } from "@tensorflow/tfjs";

const letterPediction = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];

const model = tf.loadLayersModel("../assets/camera/model.json");

export default async function getGesturePrediction(image: HTMLImageElement) {
    let letter: string = "";
    let imageResult: Tensor<Rank.R3> | null = null;
    try {
        let imageTf = tf.browser.fromPixels(image);

        imageTf = tf.image.rgbToGrayscale(imageTf);

        imageTf = tf.image.resizeNearestNeighbor(imageTf, [28, 28]);

        imageResult = imageTf;

        imageTf = imageTf.reshape([1, 28, 28, 1]);

        let predictions = (await model).predict(imageTf, { batchSize: 1 });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        predictions = tf.argMax(predictions, 1);

        letter = letterPediction[(await predictions.data())[0]] ?? "";
    } catch (error) {
        console.log(error);
    }

    return {
        letter,
        imageResult,
    };
}
