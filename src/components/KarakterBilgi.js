import React from "react";
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
            <p className="film">Movies </p>
            {
                karakter.films.map((film,index )=> (
                    <p className="film" key={index}> {film} </p>
                ))
            }
        </div>
        
    );
}
export default KarakterBilgi;
