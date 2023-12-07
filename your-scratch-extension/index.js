const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class Scratch3CommandBlocks0 {

    constructor(runtime) {
        // No additional setup needed for this simplified version
    }

    getInfo() {
        return {
            id: 'commandblocks0',
            name: 'commandblocks0',
            color1: '#000000',
            color2: '#000000',
            blockIconURI: null,
            menuIconURI: null,
            blocks: [
                {
                    opcode: 'textToNumbers',
                    blockType: BlockType.REPORTER,
                    text: 'Text to Numbers [TEXT]',
                    terminal: false,
                    filter: [TargetType.SPRITE, TargetType.STAGE],
                    arguments: {
                        TEXT: {
                            defaultValue: 'Hello, World!',
                            type: ArgumentType.STRING,
                        },
                    },
                },
                {
                    opcode: 'numbersToText',
                    blockType: BlockType.REPORTER,
                    text: 'Numbers to Text [NUMBERS]',
                    terminal: false,
                    filter: [TargetType.SPRITE, TargetType.STAGE],
                    arguments: {
                        NUMBERS: {
                            defaultValue: '',
                            type: ArgumentType.NUMBER,
                        },
                    },
                },
            ],
        };
    }

    textToNumbers({ TEXT }) {
        let output = '';

        for (let i = 0; i < TEXT.length; i++) {
            const currentChar = TEXT.charCodeAt(i).toString().padStart(3, '0');
            output += currentChar;
        }

        return output;
    }

    numbersToText({ NUMBERS }) {
        let output = '';

        for (let i = 0; i < NUMBERS.length; i += 3) {
            const currentNum = parseInt(NUMBERS.substr(i, 3), 10);
            output += String.fromCharCode(currentNum);
        }

        return output;
    }
}

module.exports = Scratch3CommandBlocks0;
