import React from "react";

function SkiDayForm() {
  return (
    <form>
      <label htmlFor="resort_name">Resort: </label>
      <br />
      <input id="resort_name" name="resort_form" type="text" />
      <br />
      <label htmlFor="resort_date">Date:</label> <br />
      <input type="date" id="resort_date" name="resort_date" /> <br />
      <input type="radio" id="powder_day" name="day_type" value="powder" />
      <br />
      <label htmlFor="powder_day">Powder Day</label>
      <br />
      <input
        type="radio"
        id="backCountry_day"
        name="day_type"
        value="backCountry"
      />
      <br />
      <label htmlFor="backCountry_day">Back Country Day</label>
      <br />
    </form>
  );
}

export default SkiDayForm;
