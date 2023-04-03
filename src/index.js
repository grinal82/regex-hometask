class Validator {
    validateUsername(name) {
        const regex = /^[a-zA-Z\d_-]+$/;
        const regexConsecutiveDigits = /\d{4,}/;
        const regexStartEnd = /^[\d_-]|[\d_-]$/;

        if (!regex.test(name)) {
            return false;
        }

        if (regexConsecutiveDigits.test(name)) {
            return false;
        }

        if (regexStartEnd.test(name)) {
            return false;
        }

        return true;
    }
}

module.exports = Validator;
