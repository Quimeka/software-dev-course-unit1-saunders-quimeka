import { MOOD_OPTIONS, DEPTH_OPTIONS } from "../common/userGlobals";

export default function setText(type, entry) {

    if (type === "mood") {
        return(MOOD_OPTIONS.find(option => option.value === entry)?.moodLabel);
    }
    if (type === "depth"){

        return(DEPTH_OPTIONS.find(option => option.value === entry)?.choiceText);
    }
}
