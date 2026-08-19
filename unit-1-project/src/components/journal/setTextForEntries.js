export default function setText(type, entry) {

    const userEntry = entry;

    if (type === "mood") {
        switch (userEntry) {
            case "1":
                return "Very Low / Sad";
            case "2":
                return "Somewhat down";
            case "3":
                return "Neutral";
            case "4":
                return "Content / Happy";
            case "5":
                return "Highly positive / Joyful";
            default:
                return "No Mood Data Available.";
        }
    }

    if (type === "depth") {
        switch (userEntry) {
            case "1":
                return "Free Writing";
            case "2":
                return "Structured Writing";
            default:
                return "No Interest in Writing.";
        }
    }
}
