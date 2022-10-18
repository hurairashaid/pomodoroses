import "./styles.css";
import Counter from "./componets/counter";
import Setting from "./componets/setting";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePath } from "./actions/index";

export default function App() {
    let dispatch = useDispatch();
    let menu = useSelector((state) => state.path);
    console.log(menu);
    return (
        <div className="App">
            <div className="sidebar">
                <div>
                    <div
                        className="sidebar-block"
                        
                    >
                        <botton
                            onClick={() => {
                                dispatch(changePath("Home"));
                            }}
                        >
                            <i class="fa-solid fa-clock"></i>Timer
                        </botton>
                    </div>
                    <div className="sidebar-block">
                        <botton>
                            <i class="fa-solid fa-signal"></i>Stats
                        </botton>
                    </div>
                    <div className="sidebar-block">
                        <botton
                            onClick={() => {
                                dispatch(changePath("Setting"));
                            }}
                        >
                            <i class="fa-solid fa-gear"></i>Settings
                        </botton>
                    </div>
                    <div className="sidebar-block">
                        <botton>
                            <i class="fa-solid fa-circle-half-stroke"></i>Dark
                            mode
                        </botton>
                    </div>
                </div>
            </div>
            <div className="main">
                <div>
                    <button>
                        <i class="fa-solid fa-hat-cowboy"></i>
                        SIGN IN
                    </button>
                </div>
                <div>
                    <button>
                        <i class="fa-regular fa-circle-right"></i>
                        ADD LABEL
                    </button>
                </div>
                {menu === "Home" ? <Counter /> : <Setting />}
                <div>Made with love by Huraira Shahid</div>
                <div className="social">
                    <span style={{ marginRight: "5px" }}>
                        <i class="fa-brands fa-twitter"></i>
                    </span>
                    <span>
                        <i class="fa-brands fa-github"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}
