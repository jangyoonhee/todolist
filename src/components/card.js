import React from 'react';
import '../css/basic.css';

const card = ({form, todoList}) => {
  return (
    <main className="card-template">
      <div className="card-title">
        오늘 할일 :)
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { todoList }
      </section>
    </main>
  );
};

export default card;