import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import alert from "../files/alert.mp3";

export default function Counter() {
    function playmusic(key) {
        document.getElementById(key).play();
    }
    function pausemusic(key) {
        document.getElementById(key).pause();
    }
    let sessionLength = useSelector((state) => state.session);
    let breakLength = useSelector((state) => state.break);
    const [play, setPlay] = useState("paused");
    const [mind, setmind] = useState("Focus");
    const [pervMind, setPervMind] = useState("Focus");
    const [sessions, setsessions] = useState(4);
    const [second, setseconds] = useState(0);
    const [miniSecond, setMiniSecond] = useState(10);
    const [minute, setminute] = useState(sessionLength);
    let [timer, settimer] = useState(true);
    var [date, setdate] = useState(Date.now());
    let [a, seta] = useState("");
    let [b, setb] = useState("");
    if (timer === false) {
        setTimeout(() => {
            if (sessions > 0) {
                if (second === 0 && minute > 0) {
                    setminute(minute - 1);
                    setseconds(59);
                } else if (second > 0 && minute >= 0) {
                    seta(((Date.now() - date) / 1000).toFixed());
                    setb(a);
                    if (a !== b) {
                        setseconds(second - 1);
                    }
                } else if (minute === 0 && second === 0) {
                    if (mind === "Focus") {
                        setminute(breakLength);
                        setmind("chill");
                    } else {
                        if (sessions > 1) {
                            setminute(sessionLength);
                            setmind("Focus");
                            setsessions(sessions - 1);
                        } else {
                            setsessions(sessions - 1);
                            setmind("bass karo");
                        }
                    }
                }
            }
        }, 1000);
        if (minute === 0) {
            if (second < 5 && second >= 0) {
                playmusic("beep");
            }
        } else {
            pausemusic("beep");
        }
    }

    const progress_left = useRef(null);
    const progress_right = useRef(null);
    useEffect(() => {
        if (minute === 0 && second === 0) {
            progress_left.current.style.animationName = "none";
            progress_right.current.style.animationName = "none";

            requestAnimationFrame(() => {
                setTimeout(() => {
                    progress_left.current.style.animationName = "left";
                    progress_right.current.style.animationName = "right";
                }, 0);
            });
        }
    });

    return (
        <div className="counter">
            <div>
                <div class="circular">
                    <div class="inner"></div>
                    <div class="number">
                        <div style={{ marginTop: "o.8vh" }}>
                            {minute > 9 ? minute : "0" + minute}:
                            {second > 9 ? second : "0" + second}
                        </div>
                        <div style={{ fontSize: "7px", marginTop: "0.5vh" }}>
                            {timer === false ? mind : "Stop"}
                        </div>
                    </div>
                    <div class="circle">
                        <div class="bar left">
                            <div
                                class="progress"
                                ref={progress_left}
                                style={
                                    mind === "Focus"
                                        ? {
                                              animationDuration:
                                                  sessionLength * 30 + "s",
                                              animationPlayState: play,
                                          }
                                        : {
                                              animationDuration:
                                                  breakLength * 30 + "s",
                                              animationPlayState: play,
                                          }
                                }
                            ></div>
                        </div>
                        <div class="bar right">
                            <div
                                class="progress"
                                ref={progress_right}
                                style={
                                    mind === "Focus"
                                        ? {
                                              animationDelay:
                                                  sessionLength * 30 + "s",
                                              animationDuration:
                                                  sessionLength * 30 + "s",
                                              animationPlayState: play,
                                          }
                                        : {
                                              animationDelay:
                                                  breakLength * 30 + "s",
                                              animationDuration:
                                                  breakLength * 30 + "s",
                                              animationPlayState: play,
                                          }
                                }
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="audioplayer">
                <span style={{ marginTop: "1.5vh" }}>
                    <a
                        onClick={() => {
                            setsessions(4);
                            setminute(10);
                            setseconds(0);
                            setmind("Focus");
                            settimer(true);
                        }}
                    >
                        <i
                            style={{ fontSize: "4vh", color: "#C1C1C1" }}
                            class="fa-solid fa-arrow-rotate-right"
                        ></i>
                    </a>
                </span>
                <span>
                    <a
                        onClick={() => {
                            if (timer === true) {
                                settimer(false);
                                setPlay("running");
                            } else {
                                settimer(true);
                                setPlay("paused");
                            }
                        }}
                    >
                        <i
                            style={{
                                fontSize: "7vh",
                                color: "#4158D0",
                                marginRight: "1.5vw",
                                marginLeft: "1.5vw",
                            }}
                            class="fa-regular fa-circle-play"
                        ></i>
                    </a>
                </span>
                <span style={{ marginTop: "1.5vh" }}>
                    <a
                        onClick={() => {
                            setTimeout(() => {
                                setseconds(0);
                                setminute(0);
                            }, 1000);
                            settimer(true);
                        }}
                    >
                        <i
                            style={{ fontSize: "4vh", color: "#C1C1C1" }}
                            class="fa-solid fa-forward-step"
                        ></i>
                    </a>
                </span>
            </div>
            <div>
                <p>
                    {sessions} of 4<br></br>sessions
                </p>
            </div>
            <audio id="beep" loop src={alert} type="audio/mpeg" />
        </div>
    );
}
