import React from "react";
import edit from "./edit.jpg";
import styled from "styled-components";
const Listele = (props) => {
  const { liste } = props;
  const Foto = styled.img`
    width: 5%;
  `;
  return (
    <div>
      {liste.map((yeniUye) => (
        <p>
          {" "}
          {`Selam ${yeniUye.name}. Yeni${yeniUye.pozisyon}'da başarılar`}
          <Foto src={edit} />
        </p>
      ))}
    </div>
  );
};
export default Listele;
