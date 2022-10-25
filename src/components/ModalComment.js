import '../styles/components/ModalComment.scss';
import { useState } from 'react';
import Header from './Header';
const ModalComment = () => {
  const [calificacion1, setCalificacion1] = useState(5);
  const [calificacion2, setCalificacion2] = useState(5);
  const [calificacion3, setCalificacion3] = useState(5);
  const [calificacion4, setCalificacion4] = useState(5);
  const [calificacion5, setCalificacion5] = useState(5);
  const [calificacion6, setCalificacion6] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('1', calificacion1);
    console.log('2', calificacion2);
    console.log('3', calificacion3);
    console.log('4', calificacion4);
    console.log('5', calificacion5);
    console.log('6', calificacion6);
    console.log('--', comment);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="ContainerComment">
          <h2>Califica tu experiencia</h2>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="me gusto mucho todo, 5 estrellas"
          ></textarea>
          <div className="item">
            <label>Cleanliness:</label>
            <input
              min="1"
              max="5"
              type={'number'}
              value={calificacion1}
              onChange={(e) => setCalificacion1(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <label>Accuracy:</label>
            <input
              min="1"
              max="5"
              type={'number'}
              value={calificacion2}
              onChange={(e) => setCalificacion2(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <label>Communication:</label>
            <input
              min="1"
              max="5"
              type={'number'}
              value={calificacion3}
              onChange={(e) => setCalificacion3(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <label>Location:</label>
            <input
              min="1"
              max="5"
              type={'number'}
              value={calificacion4}
              onChange={(e) => setCalificacion4(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <label>Check-in:</label>
            <input
              min="1"
              max="5"
              type={'number'}
              value={calificacion5}
              onChange={(e) => setCalificacion5(e.target.value)}
            ></input>
          </div>
          <div className="item">
            <label>Value:</label>
            <input
              min="1"
              max="5"
              type={'number'}
              value={calificacion6}
              onChange={(e) => setCalificacion6(e.target.value)}
            ></input>
          </div>
          <button className="Btn" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalComment;
