/** Class that fetches and stores map data and provides access to it */
export default class GameMap {
    private source: string;
    private map: Uint8Array | null = null;
    private width: number;
    // private height: number;

    constructor() {
        this.source = '/maps/1/surfaces.rsk';
        this.width = 160;
        // this.height = 144;

        fetch(this.source)
            .then(async response => {
                if (!response.body)
                    throw new Error('Response body was not received');

                const reader = response.body.getReader();

                let { done, value } = await reader.read();
                while (!done && value) {
                    if (!this.map) this.map = value;
                    else this.map.set(value, this.map.length);

                    console.log(`Current chunk length is ${value.length}`);
                    ({ done, value } = await reader.read());
                }
            })
            .catch(console.error);
    }

    public getSurface(x: number, y: number): number {
        if (!this.map) throw new Error('Map data was not fetched');

        return this.map[this.width * y + x];
    }
}

/**
 * 10x10
 * 0 0 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0 0 0
 * 0 0 0 0 0 0 0 0 0 0
 */
