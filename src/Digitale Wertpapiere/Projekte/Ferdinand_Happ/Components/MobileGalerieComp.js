import { Carousel } from "react-carousel-minimal";

function GalerieComp() {
  const data = [
    {
      image:
        "https://chainvest.s3.eu-central-1.amazonaws.com/Ferdinand-Happ-Stra%C3%9Fe/FINEXITY_FHP_Galerie_1.jpeg",
      caption: "",
    },
    {
      image:
        "https://chainvest.s3.eu-central-1.amazonaws.com/Ferdinand-Happ-Stra%C3%9Fe/FINEXITY_FHP_Galerie_2.jpeg",
      caption: "",
    },
    {
      image:
        "https://chainvest.s3.eu-central-1.amazonaws.com/Ferdinand-Happ-Stra%C3%9Fe/FINEXITY_FHP_Galerie_3.jpeg",
      caption: "",
    },

    {
      image:
        "https://chainvest.s3.eu-central-1.amazonaws.com/Ferdinand-Happ-Stra%C3%9Fe/FINEXITY_FHP_Galerie_4.jpeg",
      caption: "",
    },
    {
      image:
        "https://chainvest.s3.eu-central-1.amazonaws.com/Ferdinand-Happ-Stra%C3%9Fe/FINEXITY_FHP_Galerie_5.jpeg",
      caption: "",
    },
    {
      image:
        "https://chainvest.s3.eu-central-1.amazonaws.com/Ferdinand-Happ-Stra%C3%9Fe/FINEXITY_FHP_Galerie_6.jpeg",
      caption: "",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2500}
            width="250px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default GalerieComp;
