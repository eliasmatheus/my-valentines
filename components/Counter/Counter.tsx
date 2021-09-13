import { useCallback, useEffect, useState } from 'react';
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

export default function Counter() {
  const startDate = DateTime.fromISO('2021-08-14T17:30');

  const [diff, setDiff] = useState<Duration>(DateTime.now().diff(startDate, units));

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = DateTime.now().diff(startDate, units);
      setDiff(diff);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [startDate]);

  const format = useCallback((num: number) => {
    return num > 9 ? '' + num : '0' + num;
  }, []);

  return (
    <div className="counter-container">
      <div className="timer-container">
        <h4 className="timer">{format(diff?.years)}</h4>
        <span className="unit"> Anos</span>
      </div>

      <div className="timer-container">
        <h4 className="timer">{format(diff?.months)}</h4>
        <span className="unit"> Meses</span>
      </div>

      <div className="timer-container">
        <h4 className="timer">{format(diff?.days)}</h4>
        <span className="unit"> Dias</span>
      </div>

      <div className="timer-container">
        <h4 className="timer">{format(diff?.hours)}</h4>
        <span className="unit"> Horas</span>
      </div>

      <div className="timer-container">
        <h4 className="timer">{format(diff?.seconds)}</h4>
        <span className="unit"> Segundos</span>
      </div>
    </div>
  );
}
