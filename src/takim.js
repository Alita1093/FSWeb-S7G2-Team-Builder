import React from "react";

const Takim = (props) => {
  const { uyeler, handleSubmit, handleDegisiklik } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlfor="name">name</label>
          <input
            id="name"
            type="text"
            value={uyeler.name}
            onChange={handleDegisiklik}
          />
        </p>
        <p>
          <label htmlfor="pozisyon">pozisyon</label>
          <input
            id="pozisyon"
            type="text"
            value={uyeler.pozisyon}
            onChange={handleDegisiklik}
          />
        </p>
        <p>
          <label htmlfor="email">email</label>
          <input
            id="email"
            type="email"
            value={uyeler.email}
            onChange={handleDegisiklik}
          />
        </p>
        <p>
          <label htmlfor="yaş">yaş</label>
          <input
            id="yaş"
            type="number"
            value={uyeler.yaş}
            onChange={handleDegisiklik}
          />
        </p>
        <p>
          <button type="submit">Giriş Yap</button>
        </p>
      </form>
    </div>
  );
};

export default Takim;
