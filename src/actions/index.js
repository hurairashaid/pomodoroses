export const changeSession = (input) => {
    return {
        type: "session",
        state: input,
    };
};

export const changePath = (input) => {
    return {
        type: "Path",
        state: input,
    };
};

export const changeBreak = (input) => {
    return {
        type: "break",
        state: input,
    };
};

export const reset = () => {
    return {
        type: "reset",
    };
};
