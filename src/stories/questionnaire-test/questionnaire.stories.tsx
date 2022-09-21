import { OrchestratorForStories as Orchestrator } from "../orchestrator";
import styleExample from "./style-example.json";
import * as custom from "../../ui";
import { getStoryFactory } from "../getStory";

console.log(custom);

const { meta, getStory } = getStoryFactory({
    "sectionName": "Questionnaire/Questionnaire Test",
    "wrappedComponent": { Orchestrator },
    "argTypes": {
        activeGoNextForMissing: {
            table: { disable: false },
            control: "boolean",
            defaultValue: true,
        },
        activeControls: {
            control: "boolean",
            defaultValue: true,
        },
    },
});

export default meta;

const data = {};

export const Default = getStory({ source: styleExample, data: data, custom: custom });
