import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import * as fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), mediapipe_workaround()],
    base: "",
    build: {
        target: "es2020",
    },
    assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg", "**/*.gif", "**/*.ico", "**/*.json", "**/*.bin"],
});

function mediapipe_workaround() {
    return {
        name: "mediapipe_workaround",
        load(id: string) {
            if (path.basename(id) === "hands.js") {
                let code = fs.readFileSync(id, "utf-8");
                code += "exports.Hands = Hands;";
                code += "exports.HAND_CONNECTIONS = HAND_CONNECTIONS;";
                // code += "exports.NormalizedLandmarkList = NormalizedLandmarkList;";
                // code += "exports.Results = Results;";
                return { code };
            }
            if (path.basename(id) === "camera_utils.js") {
                let code = fs.readFileSync(id, "utf-8");
                code += "exports.Camera = Camera;";
                return { code };
            }
            if (path.basename(id) === "drawing_utils.js") {
                let code = fs.readFileSync(id, "utf-8");
                code += "exports.drawConnectors = drawConnectors;";
                code += "exports.drawLandmarks = drawLandmarks;";
                return { code };
            }

            return null;
        },
    };
}
