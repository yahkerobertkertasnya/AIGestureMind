export default class DelayFunction {
    isDelaying: boolean;
    delay: number;
    callback: any;

    constructor(callback: any) {
        this.isDelaying = false;
        this.delay = 500;
        this.callback = callback;
    }

    setDelay(newDelay: number) {
        this.delay = newDelay;
    }

    run(...args: any) {
        if (!this.isDelaying) {
            this.isDelaying = true;

            setTimeout(() => {
                this.isDelaying = false;
            }, this.delay);

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // eslint-disable-next-line prefer-spread
            return this.callback.apply(this, args);
        }
    }
}
