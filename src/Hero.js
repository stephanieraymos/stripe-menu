import React from "react";
import phoneImg from "./img/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <>
      <section className="hero">
        <div className="hero-center">
          <article className="hero-info">
            <h1>Payments infrastructure for the internet</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              maiores ex ut ad minus eius sit excepturi illum animi, voluptatum
              sint ipsa omnis sequi veniam in amet voluptas tempora nobis!
              Sapiente sunt nam ipsam delectus facere officiis, modi harum
              voluptates libero temporibus, maiores, tempora consequatur
              dignissimos earum error alias commodi.
            </p>
            <button className="btn">Start Now</button>
          </article>
          <article className="hero-images">
            <img src={phoneImg} className="phone-img" alt="Phone" />
          </article>
        </div>
      </section>
    </>
  );
};

export default Hero;
