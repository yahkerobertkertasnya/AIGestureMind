import * as tf from "@tensorflow/tfjs";
import { Rank, Tensor } from "@tensorflow/tfjs";

const classes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "Space", "T", "U", "V", "W", "X", "Y", "Z"];
let model: tf.LayersModel;

export default async function predictModel(landmarkData: number[]) {
    if (model === undefined) {
        model = await tf.loadLayersModel("/model.json");
    }

    const predict = model.predict(tf.tensor(landmarkData, [1, 42])) as Tensor<Rank>;

    const label = tf.argMax(predict, 1).dataSync()[0];

    return classes[label];
}
