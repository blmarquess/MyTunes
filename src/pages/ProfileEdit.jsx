import React from 'react';
import Header from '../components/Header';

const styledLabel = 'flex justify-around my-4 py-8';
const styledInput = `-shadow-lg border-b-2 border-gray-300 rounded-sm
  outline-none w-auto -mt-2`;

export default () => (
  <div>
    <Header />
    <div data-testid="page-profile-edit">
      {false ? (
        <div
          className="flex justify-center p-4 space-x-2 pulse text-xl
            items-center"
        >
          <div
            className="loading h-8 w-8 rounded-full border-l-2
                  border-green-800"
          />
          <p>Carregando...</p>
        </div>)

        : (
          <section className="flex justify-center items-center mt-16 p-8">
            <section
              className="grid grid-cols-1 p-8 rounded-lg w-96 space-x-2
                justify-center items-center bg-white shadow-md"
            >
              <section className={ styledLabel }>
                <span>Usuario:</span>
                <input
                  type="text"
                  data-testid="edit-input-name"
                  className={ styledInput }
                />
              </section>

              <section className={ styledLabel }>
                <span>E-Mail:</span>
                <input
                  type="text"
                  data-testid="edit-input-email"
                  className={ styledInput }
                />
              </section>

              <section className={ styledLabel }>
                <span>URL Photo:</span>
                <input
                  type="text"
                  data-testid="edit-input-image"
                  className={ styledInput }
                />
              </section>

              <section className={ styledLabel }>
                <span>Descrição:</span>
                <input
                  type="text"
                  data-testid="edit-input-description"
                  className={ styledInput }
                />
              </section>

            </section>
          </section>
        )}
    </div>
  </div>
);
