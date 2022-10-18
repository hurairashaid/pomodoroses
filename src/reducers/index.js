const changePathReducer = (
    state = { session: 25, path: "Home", break: 5 },
    action
) => {
    switch (action.type) {
        case "session":
            if (action.state === "increment") {
                return {
                    session: state.session + 1,
                    path: state.path,
                    break: state.break,
                };
            } else if (action.state === "decrement") {
                return {
                    session: state.session - 1,
                    path: state.path,
                    break: state.break,
                };
            }
        case "Path":
            if (action.state === "Setting") {
                return {
                    path: action.state,
                    session: state.session,
                    break: state.break,
                };
            } else {
                return {
                    path: action.state,
                    session: state.session,
                    break: state.break,
                };
            }

        case "break":
            if (action.state === "increment") {
                return {
                    break: state.break + 1,
                    path: state.path,
                    session: state.session,
                };
            } else if (action.state === "decrement") {
                return {
                    break: state.break - 1,
                    path: state.path,
                    session: state.session,
                };
            }
        case "reset":
            return { session: 25, path: "Setting", break: 5 };
        default:
            return {
                path: state.path,
                session: state.session,
                break: state.break,
            };
    }
};

export default changePathReducer;
