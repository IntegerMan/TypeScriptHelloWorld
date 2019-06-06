class TimeProvider {
    private _time: Date;

    public constructor() {
        this._time = new Date();
    }

    public getTime(): string {
        return 'Time for some TypeScript (AKA: ' + this._time.toTimeString() + ')';
    }
}
