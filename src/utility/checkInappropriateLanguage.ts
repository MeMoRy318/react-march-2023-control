const inappropriateKeywords = ['porn', 'sex', 'xxx', 'explicit'];

const checkInappropriateLanguage = (input: string): boolean => {
    const lowerCaseInput = input.toLowerCase();
    return inappropriateKeywords.some(keyword => lowerCaseInput.includes(keyword));
};

export { checkInappropriateLanguage };
