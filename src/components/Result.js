import React from "react";
export default function Result({ celsius = 0, fahrenheit = 0 }) {
  return (
    <div>
      <h2>Result</h2>
      <p>
        {celsius}°C = {fahrenheit}°F
      </p>

      {
        //celsius and fahrenheit are props
        //celsius and fahrenheit checked
        //if celsius is greater than or equal to 100
        //then water will boil
        //else water will not boil
        celsius >= 100 && fahrenheit >= 212 ? (
          <p>Water will boil</p>
        ) : (
          <p>Water will not boil</p>
        )
      }
    </div>
  );
}
