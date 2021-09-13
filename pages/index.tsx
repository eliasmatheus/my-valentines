/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { IoInfiniteOutline, IoHeartOutline } from 'react-icons/io5';
import { DateTime, Duration, DurationUnits } from 'luxon';

const units: DurationUnits = [
  'years',
  'months',
  'days',
  'hours',
  'minutes',
  'seconds',
  'milliseconds',
];

const words = [
  'carinho',
  'companheirismo',
  'atenção',
  'cuidado',
  'risadas',
  'oração',
  'comprometimento',
  'paz',
  'acolhimento',
  'paciência',
  'cuidado de Deus',
];

const Home: NextPage = () => {
  const [picturesPaths, setPicturePaths] = useState([
    '/images/IMG_8206.jpeg',
    '/images/IMG_8226.jpg',
    '/images/IMG_8463.jpg',
    '/images/IMG_4272.jpeg',
  ]);

  const handleImageChange = useCallback(
    (position: number) => {
      const newArray = picturesPaths;

      newArray.push(picturesPaths[0]);
      newArray.splice(0, 1, picturesPaths[position]);
      newArray.splice(position, 1);

      setPicturePaths(() => [...newArray]);
    },
    [picturesPaths],
  );

  const startDate = DateTime.fromISO('2021-08-14T17:20');

  const [diff, setDiff] = useState<Duration>(DateTime.now().diff(startDate, units));
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = DateTime.now().diff(startDate, units);
      setDiff(diff);

      setCounter(() => {
        if (counter > words.length - 2) {
          return 0;
        }

        return counter + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startDate]);

  const format = useCallback((num: number) => {
    return num > 9 ? '' + num : '0' + num;
  }, []);

  return (
    <div>
      <Head>
        <title>My Valentines</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="home">
        <div className="container">
          <div className="card img-card">
            <img className="img" src={picturesPaths[0]} alt="Picture of the author" />
          </div>

          <div className="card content-card text-center">
            <div className="date">
              <p>14 de agosto de 2021</p>
              <p>17:20h, Topo do Mundo. Brumadinho, MG</p>
              <p>Dia, local e hora da minha melhor decisão!</p>
            </div>

            <div className="divider">
              <div className="line"></div>
              <div className="px-4">
                <IoInfiniteOutline size={25} />
              </div>
              <div className="line"></div>
            </div>

            <div>
              <div className="date bigger text-start">
                <p>Feliz...</p>
              </div>

              <div className="counter-container">
                {diff?.years > 0 && (
                  <div className="timer-container">
                    <h4 className="timer">{format(diff?.years)}</h4>
                    <span className="unit">
                      {diff?.years === 1 ? <span>Ano</span> : <span>Anos</span>}
                    </span>
                  </div>
                )}

                <div className="timer-container">
                  <h4 className="timer">{format(diff?.months)}</h4>
                  <span className="unit">
                    {diff?.months === 1 ? <span>Mes</span> : <span>Meses</span>}
                  </span>
                </div>

                <div className="timer-container">
                  <h4 className="timer">{format(diff?.days)}</h4>
                  <span className="unit">
                    {diff?.days === 1 ? <span>Dia</span> : <span>Dias</span>}
                  </span>
                </div>

                <div className="timer-container">
                  <h4 className="timer">{format(diff?.hours)}</h4>
                  <span className="unit">
                    {diff?.hours === 1 ? <span>Hora</span> : <span>Horas</span>}
                  </span>
                </div>

                <div className="timer-container">
                  <h4 className="timer">{format(diff?.minutes)}</h4>
                  <span className="unit">
                    {diff?.minutes === 1 ? <span>Minuto</span> : <span>Minutos</span>}
                  </span>
                </div>

                <div className="timer-container">
                  <h4 className="timer">{format(diff?.seconds)}</h4>

                  <span className="unit">
                    {diff?.seconds === 1 ? <span>Segundo</span> : <span>Segundos</span>}
                  </span>
                </div>
              </div>

              <div className="date text-end">
                <p>...cheios de {words[counter]}</p>
                {/* <IoHeartOutline size={25} /> */}
              </div>
            </div>

            <div className="divider">
              <div className="line"></div>
              <div className="px-4">
                <IoInfiniteOutline size={25} />
              </div>
              <div className="line"></div>
            </div>

            <div>
              <div className="pictures">
                <div
                  role="button"
                  className="picture-container"
                  onClick={() => handleImageChange(1)}
                >
                  <img
                    className="picture"
                    src={picturesPaths[1]}
                    alt="Picture of the author"
                  />
                </div>

                <div
                  role="button"
                  className="picture-container"
                  onClick={() => handleImageChange(2)}
                >
                  <img
                    className="picture"
                    src={picturesPaths[2]}
                    alt="Picture of the author"
                  />
                </div>

                <div
                  role="button"
                  className="picture-container"
                  onClick={() => handleImageChange(3)}
                >
                  <img
                    className="picture"
                    src={picturesPaths[3]}
                    alt="Picture of the author"
                  />
                </div>
              </div>

              <p className="credits text-end">
                Feito com muito <IoHeartOutline size={18} /> por Elias Matheus Oliveira
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
