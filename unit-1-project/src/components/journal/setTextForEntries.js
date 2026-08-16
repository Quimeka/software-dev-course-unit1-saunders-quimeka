export default function setText(type, entry) {

    const userEntry = String(entry);
    
if (type === "mood") {
        switch (userEntry) {
            case "1": 
                return ("Very Heavy");
            case "2": 
                return ("Down/Low");
            case "3": 
                return ("Neutral/Flat");
            case "4": 
                return ("Good/Steady");
            case "5": 
                return ("Vibrant/Radiant");
            default: 
                return ("No mood data available for today.");
        }
    }

    if (type === "depth") {
        switch (userEntry) {
            case "1": 
                return ("Low Capacity/Energy");
            case "2": 
                return ("High Capacity/Energy");
            default: 
                return ("No capacity data available for today.");
        }
    }
}
