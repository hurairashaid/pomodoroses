import "./index.css";
import { changeSession, changeBreak, reset } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

export default function Setting() {
    let dispatch = useDispatch();
    let sessionLength = useSelector((state) => state.session);
    let breakLength = useSelector((state) => state.break);
    return (
        <div className="setting">
            <div>
                <div id="session-label">Session Length</div>
                <div>
                    <button
                        id="session-decrement"
                        onClick={() => {
                            if (sessionLength > 1) {
                                dispatch(changeSession("decrement"));
                            }
                        }}
                    >
                        -
                    </button>
                    <h3 id="session-length">{sessionLength}</h3>
                    <button
                        id="session-increment"
                        onClick={() => {
                            if (sessionLength < 60) {
                                dispatch(changeSession("increment"));
                            }
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
            <div>
                <div id="break-label">{"Break Length"}</div>
                <div>
                    <button
                        id="break-decrement"
                        onClick={() => {
                            if (breakLength > 1) {
                                dispatch(changeBreak("decrement"));
                            }
                        }}
                    >
                        -
                    </button>
                    <h3 id="break-length">{breakLength}</h3>
                    <button
                        id="break-increment"
                        onClick={() => {
                            if (breakLength < 60) {
                                dispatch(changeBreak("increment"));
                            }
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
            <div>
                <button
                    onClick={() => {
                        dispatch(reset());
                    }}
                >
                    RESET ALL
                </button>
            </div>
        </div>
    );
}
