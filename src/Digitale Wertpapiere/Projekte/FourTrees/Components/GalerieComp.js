import { Carousel } from "react-carousel-minimal";

function GalerieComp() {
  const data = [
    {
      image:
        "https://chainvest.s3.eu-central-1.amazonaws.com/Four+Trees/Four_Trees_Gal_1.jpg",
      caption: "",
    },
    {
      image:
        "https://chainvest.s3.eu-central-1.amazonaws.com/Four+Trees/Four_Trees_Gal_2.jpg",
      caption: "",
    },
    {
      image:
        "https://chainvest.s3.eu-central-1.amazonaws.com/Four+Trees/Four_Trees_Gal_3.jpg",
      caption: "",
    },
    {
      image:
        "https://chainvest.s3.eu-central-1.amazonaws.com/Four+Trees/Four_Trees_Gal_4.jpg",
      caption: "",
    },
    {
      image:
        "https://chainvest.s3.eu-central-1.amazonaws.com/Four+Trees/Four_Trees_Gal_5.jpg",
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
            width="850px"
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
