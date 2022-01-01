export function checkCode(code, secretCode) {
    const feedback = {bulls: 0, cows: 0};
    const unvisitedSecretCode = secretCode.slice(0);
    const unvisitedCode = code.slice(0);
    // check for bulls
    for (let i = secretCode.length - 1; i >= 0; i--) {
        if (code[i] === secretCode[i]) {
            feedback.bulls++;
            unvisitedSecretCode.splice(i, 1);
            unvisitedCode.splice(i, 1);
        }
    }
    // check for cows
    for (let i = 0; i < unvisitedCode.length; i++) {
        const idx = unvisitedSecretCode.indexOf(unvisitedCode[i]);
        if (idx >= 0) {
            feedback.cows++;
            unvisitedSecretCode.splice(idx, 1);
        }
    }

    return feedback;
}

export function generateRandomCode(allColors, codeLength) {
    const randomCode = [];
    for (let i=0; i<codeLength; i++) {
        randomCode.push(allColors[Math.floor(Math.random() * (allColors.length - 1))]);
    }
    return randomCode;
}
