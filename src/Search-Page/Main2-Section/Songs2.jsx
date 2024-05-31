import { useEffect } from "react";

const songsArr = [
    {
        imageUrl: "./Photos/song-one-image.jpeg",
        title: "Muttu Muttu",
        subTitle: "Teejay",
        audioUrl: "./Songs/song1.mp3"
    },
    {
        imageUrl: "./Photos/song-two-image.jpeg",
        title: "Enaku Oru Aasai",
        subTitle: "Teejay",
        audioUrl: "./Songs/song2.mp3"
    },
    {
        imageUrl: "./Photos/song-three-image.jpg",
        title: "Enakenna Yaarum Illaye (From 'Aakko')",
        subTitle: "Anirudh Ravichander",
        audioUrl: "./Songs/song3.mp3"
    },
    {
        imageUrl: "./Photos/song-four-image.jpg",
        title: "Orasaadha - Madra Gig",
        subTitle: "Vivek - Mervin",
        audioUrl: "./Songs/song4.mp3"
    },
    {
        imageUrl: "./Photos/song-five-image.jpg",
        title: "Ennai Kollathey",
        subTitle: "Kumaresh - Keshini",
        audioUrl: "./Songs/song5.mp3"
    },
    {
        imageUrl: "./Photos/song-six-image.jpg",
        title: "Raati - Madras Gig",
        subTitle: "Santhosh Dhayanidhi,Bamba Bakya",
        audioUrl: "./Songs/song6.mp3"
    },
    {
        imageUrl: "./Photos/song-seven-image.jpg",
        title: "Usuraiya Tholaichaen",
        subTitle: "Stephen Zechariah",
        audioUrl: "./Songs/song7.mp3"
    },
    {
        imageUrl: "./Photos/song-eight-image.jpg",
        title: "Vellai Poove",
        subTitle: "ADK Srirascol,Teejay",
        audioUrl: "./Songs/song8.mp3"
    },
    {
        imageUrl: "./Photos/song-nine-image.jpg",
        title: "Manasara Sollu",
        subTitle: "Teejay",
        audioUrl: "./Songs/song9.mp3"
    },
    {
        imageUrl: "./Photos/song-ten-image.jpg",
        title: "Maamadura - From 'Jigarthanda Double X'",
        subTitle: "Santhosh Narayanan,Dhee,Vivek",
        audioUrl: "./Songs/song10.mp3"
    },
    {
        imageUrl: "./Photos/song-eleven-image.jpg",
        title: "Katchi Sera - From 'Think iIndie'",
        subTitle: "Sai Abhyankkar",
        audioUrl: "./Songs/song11.mp3"
    },
    {
        imageUrl: "./Photos/song-tweleve-image.jpg",
        title: "Naa Ready From 'Leo'",
        subTitle: "Anirudh Ravichander,Thalapathy Vijay",
        audioUrl: "./Songs/song12.mp3"
    },
    {
        imageUrl: "./Photos/song-thirteen-image.jpg",
        title: "Vantha Edam From 'Jawan'",
        subTitle: "Anirudh Ravichander,Vivek",
        audioUrl: "./Songs/song13.mp3"
    },
    {
        imageUrl: "./Photos/song-fourteen-image.jpg",
        title: "Thaai Kelavi (From 'Thiruchitrabalam')",
        subTitle: "Dhanush",
        audioUrl: "./Songs/song14.mp3"
    },
]

function CardComp({ value, setSongObj }) {
    function handleClick() {
        setSongObj(value);
    }
    return (
        <>
            <div className="song-section-02">
                <div className="sec2div">
                    <span className="sec2square">
                        <img
                            src={value.imageUrl}
                            alt=""
                            height="60px"
                            width="60px"
                        />
                    </span>
                    <div>
                        <p className="para">{value.title}</p>
                        <p className="para2">{value.subTitle}</p>
                    </div>
                    <button onClick={handleClick}>Play</button>
                </div>
            </div>
            <br />
            <br />
        </>
    );
}

function Songs2({ setSongObj }) {
    useEffect(() => {
        setSongObj(songsArr[0]);
    }, [])
    return (
        <>
        <h2 className="songlist">Song-Lists</h2>
            {
                songsArr.map((value, index) => {
                    return <CardComp key={index} value={value} setSongObj={setSongObj} />
                })
            }
        </>
    );
}

export default Songs2;
