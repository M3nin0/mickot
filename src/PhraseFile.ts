import * as fs from "fs";

class PhraseFile implements IPhraseConnector {
    private _jsonFile: string;
    private _jsonObject: any;
    
    constructor(jsonFile: string) {
        this._jsonFile = jsonFile;
        this._jsonObject = null;
    }

    private generateJsonObject() {
        if (this._jsonObject == null)
            this._jsonObject = JSON.parse(fs.readFileSync(this._jsonFile).toString());
    }

    getPhrase(): string {
        this.generateJsonObject();

        const phraseIndex = Math.floor(Math.random() * this._jsonObject.mickotePhrases.length);
        return this._jsonObject.mickotePhrases[phraseIndex];
    }
};

export default PhraseFile;
