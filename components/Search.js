import React, { useState } from 'react';

export default function Search({text, setText, submit}) {
    const Submit =()=>{
        submit()
    }
  return (
    <div className="container">
      <div class="form-floating mb-3">
        <input
          type="text" 
          class="form-control"
          id="floatingInput"
          placeholder="nama"
          onChange={(e)=>setText(e.target.value)}
        />
        <label for="floatingInput">Nama</label>
      </div>
      <button onClick={Submit}type="button" class="btn btn-warning btn-lg">CARI</button>

    </div>
  );
}
