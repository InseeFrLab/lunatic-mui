import { Input } from "../../ui";
import { getStoryFactory } from "../getStory";

const { meta, getStory } = getStoryFactory({
    sectionName: "Components/Input",
    "wrappedComponent": { Input },
});

export default meta;

export const Default = getStory({ onChange: value => console.log(value) });
