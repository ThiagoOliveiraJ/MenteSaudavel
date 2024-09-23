import React, { useEffect, useState } from "react";
import api from "../../api";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'; 


function SectionScreen({ title, text, type, imgCard }) {
  const [carregando, setCarregando] = useState(true);
  const [listaDicas, setListaDicas] = useState([]);

  useEffect(() => {
    if (type === "MentalWellness") {
      setCarregando(true);
      api.get("mental-wellness-tips").then(({ data }) => {
        setListaDicas(data.listTips);
        setCarregando(false);
      });
    }if(type === "meditationResources"){
        setCarregando(true);
        api.get("meditation-resources").then(({ data }) => {
          setListaDicas(data.listTips);
          setCarregando(false);
        });
    }if(type === "physicalActivities"){
        setCarregando(true);
        api.get("physical-activities").then(({ data }) => {
          setListaDicas(data.listTips);
          setCarregando(false);
        });
    }
  }, [type]);

  if (carregando) {
    return console.log('Carregando');
  }

  return (
    <section className="section-screen">
      <article className="left">
        <h1 className="title">{title}</h1>
        <p className="text-principal">{text}</p>
      </article>
      <div className="right">
        <h4 className="title-right">Algumas Dicas</h4>
        <Splide
          options={{
            type: 'loop',
            perPage: 1,
            autoplay: true,
            gap: '1rem',
            breakpoints: {
              768: {
                perPage: 1,
              },
              1024: {
                perPage: 2,
              },
            },
          }}
        >
          {listaDicas.map((tip, index) => (
            <SplideSlide key={index}>
              <div className="card">
                <h3>{tip.tip}</h3>
                <img className="img-card" src={imgCard}/>
                <p>{tip.description}</p>
                <span className="category">{tip.category}</span>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

export default SectionScreen;