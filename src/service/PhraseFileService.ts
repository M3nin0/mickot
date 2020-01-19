import * as fs from "fs";
import { Service } from "typedi";

import IPhraseConnector from "./IPhraseConnector";
import { String } from 'typescript-string-operations';

@Service()
class PhraseFileService implements IPhraseConnector {
    jsonObject: any = null;

    private generateJsonObject() {
        if (this.jsonObject == null)
            this.jsonObject = JSON.parse(fs.readFileSync(process.env.DATA_FILE || "").toString());
    }

    getPhrase(): string {
        this.generateJsonObject();

        const phraseIndex = Math.floor(Math.random() * this.jsonObject.mickotePhrases.length);
        const phraseObject = this.jsonObject.mickotePhrases[phraseIndex];

        return String.Format('"{phrase}" - {author}', phraseObject);
    }
};

export default PhraseFileService;
