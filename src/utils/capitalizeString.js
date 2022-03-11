const capitalizeString = (word) => {
    const upper = word[0].toUpperCase();
    const lower = word.toLowerCase().slice(1);
    return upper + lower;
};

export default capitalizeString;
