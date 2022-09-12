import { OrchestratorForStories as Orchestrator } from "../orchestrator";
import simpsons from "./source.json";

import { getStoryFactory } from "../getStory";

const { meta, getStory } = getStoryFactory({
    sectionName: "Questionnaire/Paste ",
    "wrappedComponent": { Orchestrator },
    argTypes: {
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

export const Default = getStory({ source: simpsons });
