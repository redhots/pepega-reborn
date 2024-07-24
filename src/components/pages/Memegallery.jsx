import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Button, Container, background } from "@chakra-ui/react";
import galleryBg from "../../assets/galleryBg.webp";
import "./Memegallery.css";

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
function Memegallery() {
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
          <h2 id="pepega-textmeme">PEPEGALLERY</h2>
        </InViewComponent>
        <div className="ImgDisplay">
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717470955.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717281938.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717282388.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717282486.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717283346.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717339469.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717363124.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717366286.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717381291.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717431825.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717431827.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717431833.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717443323.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717450279.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717450753.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717510973.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717522663.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717524471.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717530949.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717532601.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717545319.jpeg" />
          </InViewComponent>
          <InViewComponent delay={0.6}>
            <img src="./memes/photo1717271607.jpeg" />
          </InViewComponent>
        </div>
      </div>
    </DynamicHeight>
  );
}

export default Memegallery;
