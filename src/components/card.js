import React from 'react';
import '../css/basic.css';

const card = ({form, children}) => {
  return (
    <main className="card-template">
      <div className="card-title">
        TODAY
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default card;