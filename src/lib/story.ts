import Diff from "./diff"

type Section = {
    diff: Diff;
    commentaryInMarkdown: String;
}

export default class Story {
    private sections: Section[];
}