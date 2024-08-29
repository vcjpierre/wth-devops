// Placeholder to host a component
import React from 'react';

const Hours = () => {
  // Obtener el día actual (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
  const today = new Date().getDay();

  // Horarios
  const weekdayHours = "10:00 a.m. - 4:00 p.m.";
  const weekendHours = "9:00 a.m. - 8:00 p.m.";

  // Determinar el horario según el día de la semana
  const hours = (today === 0 || today === 6) ? weekendHours : weekdayHours;

  return (
    <div className="hours">
      <h2>Today's Hours</h2>
      <p>{hours}</p>
    </div>
  );
};

export default Hours;