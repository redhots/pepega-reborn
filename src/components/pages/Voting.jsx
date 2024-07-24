import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Button, Container, background } from "@chakra-ui/react";
import galleryBg from "../../assets/galleryBg.webp";
import "./Memegallery.css";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import Captcha from "../Captcha";

import { Captchaimgs } from "../captchaimgs";

const captcha1 = new Captchaimgs(1, "/captcha/Captcha1.webp", "pepega186");
const captcha2 = new Captchaimgs(2, "/captcha/Captcha2.webp", "PEpegA420");
const captcha3 = new Captchaimgs(3, "/captcha/Captcha3.webp", "pEpEgA504");
const captcha4 = new Captchaimgs(4, "/captcha/Captcha4.webp", "PePeGa729");
const captcha5 = new Captchaimgs(5, "/captcha/Captcha5.webp", "pePeGa777");

const DynamicHeight = ({ children }) => {
  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);

  return <div>{children}</div>;
};

const InViewComponent = ({ children, delay }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  );
};

function Voting() {
  const [selectedCaptcha, setCaptcha] = useState("");
  const [selectedAnswer, setAnswer] = useState("");
  const [hasVoted, setVote] = useState(false);

  const [vote1, setVote1] = useState(0);
  const [vote2, setVote2] = useState(0);
  const [vote3, setVote3] = useState(0);
  const [vote4, setVote4] = useState(0);
  const [vote5, setVote5] = useState(0);

  const [vote6, setVote6] = useState(0);

  const [vote7, setVote7] = useState(0);

  const [vote8, setVote8] = useState(0);

  const [vote9, setVote9] = useState(0);

  const [vote10, setVote10] = useState(0);

  const [capsolved, setcapsolved] = useState(true);
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    switch (randomNumber) {
      case 1:
        setAnswer(captcha1.ans);
        setCaptcha(captcha1.src);
        return;
      case 2:
        setAnswer(captcha2.ans);
        setCaptcha(captcha2.src);
        return;
      case 3:
        setAnswer(captcha3.ans);
        setCaptcha(captcha3.src);
        return;
      case 4:
        setAnswer(captcha4.ans);
        setCaptcha(captcha4.src);
        return;
      case 5:
        setAnswer(captcha5.ans);
        setCaptcha(captcha5.src);
        return;
    }

    return () => {};
  }, []);

  const VotingSubmit = (value) => {
    console.log(capsolved);
    if (hasVoted == true && capsolved == false) return;
    else {
      if (!capsolved) {
        console.log("He Voted");
        let cont = 0;
        switch (value) {
          case 1:
            axios
              .get("https://www.pepegaeth.vip/php/votecont.php")
              .then((response) => {
                setVote1(Number(response.data.vote1));
                setVote2(Number(response.data.vote2));
                setVote3(Number(response.data.vote3));
                setVote4(Number(response.data.vote4));
                setVote5(Number(response.data.vote5));
                setVote6(Number(response.data.vote6));
                setVote7(Number(response.data.vote7));
                setVote8(Number(response.data.vote8));
                setVote9(Number(response.data.vote9));
                setVote10(Number(response.data.vote10));
              })
              .catch((error) => {
                console.error("error!", error);
              });
            cont = vote1 + 1;
            setVote1(cont);
            axios
              .post("https://www.pepegaeth.vip/php/vote.php", {
                vote1: cont,
                vote2,
                vote3,
                vote4,
                vote5,
                vote6,
                vote7,
                vote8,
                vote9,
                vote10,
              })
              .then((response) => {
                if (response.data.status !== "success") {
                  toast.error("Error!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                } else {
                  toast.success("Voted", {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            break;
          case 2:
            axios
              .get("https://www.pepegaeth.vip/php/votecont.php")
              .then((response) => {
                setVote1(Number(response.data.vote1));
                setVote2(Number(response.data.vote2));
                setVote3(Number(response.data.vote3));
                setVote4(Number(response.data.vote4));
                setVote5(Number(response.data.vote5));
                setVote6(Number(response.data.vote6));
                setVote7(Number(response.data.vote7));
                setVote8(Number(response.data.vote8));
                setVote9(Number(response.data.vote9));
                setVote10(Number(response.data.vote10));
              })
              .catch((error) => {
                console.error("error!", error);
              });
            cont = vote2 + 1;
            setVote2(cont);
            axios
              .post("https://www.pepegaeth.vip/php/vote.php", {
                vote1,
                vote2: cont,
                vote3,
                vote4,
                vote5,
                vote6,
                vote7,
                vote8,
                vote9,
                vote10,
              })
              .then((response) => {
                if (response.data.status !== "success") {
                  toast.error("Error!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                } else {
                  toast.success("Voted", {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            break;
          case 3:
            axios
              .get("https://www.pepegaeth.vip/php/votecont.php")
              .then((response) => {
                setVote1(Number(response.data.vote1));
                setVote2(Number(response.data.vote2));
                setVote3(Number(response.data.vote3));
                setVote4(Number(response.data.vote4));
                setVote5(Number(response.data.vote5));
                setVote6(Number(response.data.vote6));
                setVote7(Number(response.data.vote7));
                setVote8(Number(response.data.vote8));
                setVote9(Number(response.data.vote9));
                setVote10(Number(response.data.vote10));
              })
              .catch((error) => {
                console.error("error!", error);
              });
            cont = vote3 + 1;
            setVote3(cont);
            axios
              .post("https://www.pepegaeth.vip/php/vote.php", {
                vote1,
                vote2,
                vote3: cont,
                vote4,
                vote5,
                vote6,
                vote7,
                vote8,
                vote9,
                vote10,
              })
              .then((response) => {
                if (response.data.status !== "success") {
                  toast.error("Error!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                } else {
                  toast.success("Voted", {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            break;
          case 4:
            axios
              .get("https://www.pepegaeth.vip/php/votecont.php")
              .then((response) => {
                setVote1(Number(response.data.vote1));
                setVote2(Number(response.data.vote2));
                setVote3(Number(response.data.vote3));
                setVote4(Number(response.data.vote4));
                setVote5(Number(response.data.vote5));
                setVote6(Number(response.data.vote6));
                setVote7(Number(response.data.vote7));
                setVote8(Number(response.data.vote8));
                setVote9(Number(response.data.vote9));
                setVote10(Number(response.data.vote10));
              })
              .catch((error) => {
                console.error("error!", error);
              });
            cont = vote4 + 1;
            setVote4(cont);
            axios
              .post("https://www.pepegaeth.vip/php/vote.php", {
                vote1,
                vote2,
                vote3,
                vote4: cont,
                vote5,
                vote6,
                vote7,
                vote8,
                vote9,
                vote10,
              })
              .then((response) => {
                if (response.data.status !== "success") {
                  toast.error("Error!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                } else {
                  toast.success("Voted", {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            break;
          case 5:
            axios
              .get("https://www.pepegaeth.vip/php/votecont.php")
              .then((response) => {
                setVote1(Number(response.data.vote1));
                setVote2(Number(response.data.vote2));
                setVote3(Number(response.data.vote3));
                setVote4(Number(response.data.vote4));
                setVote5(Number(response.data.vote5));
                setVote6(Number(response.data.vote6));
                setVote7(Number(response.data.vote7));
                setVote8(Number(response.data.vote8));
                setVote9(Number(response.data.vote9));
                setVote10(Number(response.data.vote10));
              })
              .catch((error) => {
                console.error("error!", error);
              });
            cont = vote5 + 1;
            setVote5(cont);
            axios
              .post("https://www.pepegaeth.vip/php/vote.php", {
                vote1,
                vote2,
                vote3,
                vote4,
                vote5: cont,
                vote6,
                vote7,
                vote8,
                vote9,
                vote10,
              })
              .then((response) => {
                if (response.data.status !== "success") {
                  toast.error("Error!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                } else {
                  toast.success("Voted", {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            break;
          case 6:
            axios
              .get("https://www.pepegaeth.vip/php/votecont.php")
              .then((response) => {
                setVote1(Number(response.data.vote1));
                setVote2(Number(response.data.vote2));
                setVote3(Number(response.data.vote3));
                setVote4(Number(response.data.vote4));
                setVote5(Number(response.data.vote5));
                setVote6(Number(response.data.vote6));
                setVote7(Number(response.data.vote7));
                setVote8(Number(response.data.vote8));
                setVote9(Number(response.data.vote9));
                setVote10(Number(response.data.vote10));
              })
              .catch((error) => {
                console.error("error!", error);
              });
            cont = vote6 + 1;
            setVote6(cont);
            axios
              .post("https://www.pepegaeth.vip/php/vote.php", {
                vote1,
                vote2,
                vote3,
                vote4,
                vote5,
                vote6: cont,
                vote7,
                vote8,
                vote9,
                vote10,
              })
              .then((response) => {
                if (response.data.status !== "success") {
                  toast.error("Error!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                } else {
                  toast.success("Voted", {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            break;
          case 7:
            axios
              .get("https://www.pepegaeth.vip/php/votecont.php")
              .then((response) => {
                setVote1(Number(response.data.vote1));
                setVote2(Number(response.data.vote2));
                setVote3(Number(response.data.vote3));
                setVote4(Number(response.data.vote4));
                setVote5(Number(response.data.vote5));
                setVote6(Number(response.data.vote6));
                setVote7(Number(response.data.vote7));
                setVote8(Number(response.data.vote8));
                setVote9(Number(response.data.vote9));
                setVote10(Number(response.data.vote10));
              })
              .catch((error) => {
                console.error("error!", error);
              });
            cont = vote7 + 1;
            setVote7(cont);
            axios
              .post("https://www.pepegaeth.vip/php/vote.php", {
                vote1,
                vote2,
                vote3,
                vote4,
                vote5,
                vote6,
                vote7: cont,
                vote8,
                vote9,
                vote10,
              })
              .then((response) => {
                if (response.data.status !== "success") {
                  toast.error("Error!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                } else {
                  toast.success("Voted", {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            break;
          case 8:
            axios
              .get("https://www.pepegaeth.vip/php/votecont.php")
              .then((response) => {
                setVote1(Number(response.data.vote1));
                setVote2(Number(response.data.vote2));
                setVote3(Number(response.data.vote3));
                setVote4(Number(response.data.vote4));
                setVote5(Number(response.data.vote5));
                setVote6(Number(response.data.vote6));
                setVote7(Number(response.data.vote7));
                setVote8(Number(response.data.vote8));
                setVote9(Number(response.data.vote9));
                setVote10(Number(response.data.vote10));
              })
              .catch((error) => {
                console.error("error!", error);
              });
            cont = vote8 + 1;
            setVote8(cont);
            axios
              .post("https://www.pepegaeth.vip/php/vote.php", {
                vote1,
                vote2,
                vote3,
                vote4,
                vote5,
                vote6,
                vote7,
                vote8: cont,
                vote9,
                vote10,
              })
              .then((response) => {
                if (response.data.status !== "success") {
                  toast.error("Error!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                } else {
                  toast.success("Voted", {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            break;
          case 9:
            axios
              .get("https://www.pepegaeth.vip/php/votecont.php")
              .then((response) => {
                setVote1(Number(response.data.vote1));
                setVote2(Number(response.data.vote2));
                setVote3(Number(response.data.vote3));
                setVote4(Number(response.data.vote4));
                setVote5(Number(response.data.vote5));
                setVote6(Number(response.data.vote6));
                setVote7(Number(response.data.vote7));
                setVote8(Number(response.data.vote8));
                setVote9(Number(response.data.vote9));
                setVote10(Number(response.data.vote10));
              })
              .catch((error) => {
                console.error("error!", error);
              });
            cont = vote9 + 1;
            setVote9(cont);
            axios
              .post("https://www.pepegaeth.vip/php/vote.php", {
                vote1,
                vote2,
                vote3,
                vote4,
                vote5,
                vote6,
                vote7,
                vote8,
                vote9: cont,
                vote10,
              })
              .then((response) => {
                if (response.data.status !== "success") {
                  toast.error("Error!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                } else {
                  toast.success("Voted", {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            break;
          case 10:
            axios
              .get("https://www.pepegaeth.vip/php/votecont.php")
              .then((response) => {
                setVote1(Number(response.data.vote1));
                setVote2(Number(response.data.vote2));
                setVote3(Number(response.data.vote3));
                setVote4(Number(response.data.vote4));
                setVote5(Number(response.data.vote5));
                setVote6(Number(response.data.vote6));
                setVote7(Number(response.data.vote7));
                setVote8(Number(response.data.vote8));
                setVote9(Number(response.data.vote9));
                setVote10(Number(response.data.vote10));
              })
              .catch((error) => {
                console.error("error!", error);
              });
            cont = vote10 + 1;
            setVote10(cont);
            axios
              .post("https://www.pepegaeth.vip/php/vote.php", {
                vote1,
                vote2,
                vote3,
                vote4,
                vote5,
                vote6,
                vote7,
                vote8,
                vote9,
                vote10: cont,
              })
              .then((response) => {
                if (response.data.status !== "success") {
                  toast.error("Error!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                } else {
                  toast.success("Voted", {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                  });
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            break;
          default:
            break;
        }
        setVote(true);
      } else {
        console.log("ola");
        toast.warn("Please, complete the captcha", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
        });
      }

      return;
    }
  };


  useEffect(() => {
    
      axios
        .get("https://www.pepegaeth.vip/php/votecont.php")
        .then((response) => {
          setVote1(Number(response.data.vote1));
          setVote2(Number(response.data.vote2));
          setVote3(Number(response.data.vote3));
          setVote4(Number(response.data.vote4));
          setVote5(Number(response.data.vote5));
          setVote6(Number(response.data.vote6));
          setVote7(Number(response.data.vote7));
          setVote8(Number(response.data.vote8));
          setVote9(Number(response.data.vote9));
          setVote10(Number(response.data.vote10));
        })
        .catch((error) => {
          console.error("error!", error);
        });
  }, []);
  

  return (
    <DynamicHeight>
      <div
        id="bg"
        style={{
          backgroundRepeat: "repeat",
          backgroundImage: `url(${galleryBg})`,
        }}
      >
        <InViewComponent delay={0.4}>
          <h2 id="pepega-textmeme">VOTE</h2>
        </InViewComponent>
        <div className="Captcha">
          <Captcha
            initialIsOpen={true}
            setcapsolved={setcapsolved}
            imgs={selectedCaptcha}
            ans={selectedAnswer}
          />
        </div>
        <ToastContainer />

        <div className="podium">
          <InViewComponent delay={0.5}>
            <div className="place">
              <p className="pointvote">Current Votes: {vote1}</p>

              <img className="placeimg" src="https://pbs.twimg.com/media/GSPF2WIagAAgU1B?format=jpg&name=large" alt="" />
              <p className="placep">By: @EdwardNeyhart</p>

              <button
                className="placep myButton"
                onClick={() => VotingSubmit(1)}
              >
                Vote!
              </button>
            </div>
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <div className="place">
              <p className="pointvote">Current Votes: {vote2}</p>

              <video
                className="placeimg"
                autoPlay
                loop
                controls
                muted
                src="./voteimgs_videos/1.mp4"
              ></video>
              <p className="placep">By: @gooooooooooshin</p>

              <button
                className="placep myButton"
                onClick={() => VotingSubmit(2)}
              >
                Vote!
              </button>
            </div>
          </InViewComponent>
          <InViewComponent delay={0.7}>
            <div className="place">
              <p className="pointvote">Current Votes: {vote3}</p>

              <video
                className="placeimg"
                autoPlay
                loop
                controls
                muted
                src="./voteimgs_videos/2.mp4"
              ></video>
              <p className="placep">By: @Ionescu26061770</p>

              <button
                className="placep myButton"
                onClick={() => VotingSubmit(3)}
              >
                Vote!
              </button>
            </div>
          </InViewComponent>
          <InViewComponent delay={0.8}>
            <div className="place">
              <p className="pointvote">Current Votes: {vote4}</p>

              <img className="placeimg" src="https://pbs.twimg.com/media/GSeNqwJW0AAdCR4?format=jpg&name=large" alt="" />
              <p className="placep">By: @BrandonAustina</p>

              <button
                className="placep myButton"
                onClick={() => VotingSubmit(4)}
              >
                Vote!
              </button>
            </div>
          </InViewComponent>
          <InViewComponent delay={0.9}>
            <div className="place">
              <p className="pointvote">Current Votes: {vote5}</p>

              <img className="placeimg" src="https://pbs.twimg.com/media/GSQ-6EHWwAA9OVP?format=jpg&name=small" alt="" />
              <p className="placep">By: @Emma023023</p>

              <button
                className="placep myButton"
                onClick={() => VotingSubmit(5)}
              >
                Vote!
              </button>
            </div>
          </InViewComponent>
          <InViewComponent delay={1.2}>
            <div className="place">
              <p className="pointvote">Current Votes: {vote10}</p>
              <video
                className="placeimg"
                autoPlay
                loop
                controls
                muted
                src="./voteimgs_videos/3.mp4"
              ></video>
              <p className="placep">By: @Morgan_Housell </p>

              <button
                className="placep myButton"
                onClick={() => VotingSubmit(10)}
              >
                Vote!
              </button>
            </div>
          </InViewComponent>
          <InViewComponent delay={1.1}>
            <div className="place">
              <p className="pointvote">Current Votes: {vote7}</p>

              <img className="placeimg" src="https://pbs.twimg.com/media/GSjq9_ZWkAAJt22?format=jpg&name=900x900" alt="" />
              <p className="placep">By: @Petermojola1</p>

              <button
                className="placep myButton"
                onClick={() => VotingSubmit(7)}
              >
                Vote!
              </button>
            </div>
          </InViewComponent>
          <InViewComponent delay={1.2}>
            <div className="place">
              <p className="pointvote">Current Votes: {vote10}</p>
              <img className="placeimg" src="https://pbs.twimg.com/media/GSjjJYMWQAAF69n?format=jpg&name=900x900" alt="" />
              <p className="placep">By: @Oxmoonboy01 </p>

              <button
                className="placep myButton"
                onClick={() => VotingSubmit(10)}
              >
                Vote!
              </button>
            </div>
          </InViewComponent>
          <InViewComponent delay={1.2}>
            <div className="place">
            <p className="pointvote">Current Votes: {vote10}</p>
            <img className="placeimg" src="https://pbs.twimg.com/media/GSjPuV1WQAA_Qlt?format=jpg&name=900x900" alt="" />
            <p className="placep">By: @Marlen_XX0 </p>
              <button
                className="placep myButton"
                onClick={() => VotingSubmit(9)}
              >
                Vote!
              </button>
            </div>
          </InViewComponent>
          <InViewComponent delay={1.2}>
            <div className="place">
              <p className="pointvote">Current Votes: {vote10}</p>
              <video
                className="placeimg"
                autoPlay
                loop
                controls
                muted
                src="./voteimgs_videos/4.mp4"
              ></video>
              <p className="placep">By: @Angjahek </p>

              <button
                className="placep myButton"
                onClick={() => VotingSubmit(10)}
              >
                Vote!
              </button>
            </div>
          </InViewComponent>
        </div>
      </div>
    </DynamicHeight>
  );
}

export default Voting;
