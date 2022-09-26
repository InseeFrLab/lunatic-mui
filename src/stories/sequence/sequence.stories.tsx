import { Sequence } from "../../ui";
import { getStoryFactory } from "../getStory";

const { meta, getStory } = getStoryFactory({
    sectionName: "Components/Sequence",
    "wrappedComponent": { Sequence },
});

export default meta;

export const Default = getStory({ label: "Séquence" });
