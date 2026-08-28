export default function validateExpirationDate(exp) {
    const cleanExp = exp.replace(/\s+/g, '');

    if (!cleanExp.includes('/')) {
        return false;
    }

    const parts = cleanExp.split('/');

    if (parts.length !== 2) {
        return false;
    }

    const expMonth = parts[0];
    const expYear = parts[1];

    if (expMonth.length !== 2 || expYear.length !== 4) {
        return false;
    }

    const month = Number(expMonth);

    const year = Number(expYear);

    if (isNaN(month) || isNaN(year)) {
        return false;
    }

    if (month < 1 || month > 12) {
        return false;
    }

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    if (year < currentYear) {
        return false;
    }
    if (year === currentYear && month < currentMonth) {
        return false;
    }

    return true;
}
