import React from "react";
import KarakterFilmler from "./KarakterFilmler";
function KarakterBilgi(props){
    const {karakter}=props;
    return (
        <div className="karakterOzelliklerContainer">
            <p>Name: {karakter.name}</p>
            <p>Birth Year: {karakter.birth_year}</p>
            <p>Height: {karakter.height}</p>
            <p>Mass: {karakter.mass}</p>
            <p>Skin Color: {karakter.skin_color}</p>
            <p>Gender: {karakter.gender}</p>
            <KarakterFilmler filmler={karakter.films}/>
        </div>
        
    );
}
export default KarakterBilgi;
