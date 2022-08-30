import { Button } from "../../ui/components/Button";
import { getStoryFactory } from "../getStory";

const { meta, getStory } = getStoryFactory({
    sectionName: "Components/Button",
    "wrappedComponent": { Button },
});

export default meta;

export const Default = getStory({ label: "Disiz Button" });
