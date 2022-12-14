import { OrchestratorForStories as Orchestrator } from "../orchestrator";
import simpsons from "./source.json";
import * as custom from "../../ui";
import { getStoryFactory } from "../getStory";

const { meta, getStory } = getStoryFactory({
    "sectionName": "Questionnaire/Paste",
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
        source: {
            table: { disable: false },
            control: { type: "object" },
            defaultValue: simpsons,
        },
    },
});

export default meta;

const data = {};

export const Default = getStory({ source: simpsons, data: data, custom: custom });
