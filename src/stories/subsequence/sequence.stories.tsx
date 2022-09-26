import { Subsequence } from "../../ui";
import { getStoryFactory } from "../getStory";

const { meta, getStory } = getStoryFactory({
    sectionName: "Components/Subsequence",
    "wrappedComponent": { Subsequence },
});

export default meta;

export const Default = getStory({ label: "Subsequence" });
