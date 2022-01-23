import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function EmotionPicker({
  emotionData,
  value,
  handleChange,
  ...others
}) {
  const renderOption = ([emotion, emoji]) => (
    <FormControlLabel
      value={emotion}
      control={<Radio />}
      label={`${emotion} ${emoji}`}
    />
  );

  return (
    <FormControl {...others}>
      {/* <FormLabel id="demo-row-radio-buttons-group-label">Emotion</FormLabel> */}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
        style={{ justifyContent: "center" }}
      >
        {Object.entries(emotionData).map(renderOption)}
      </RadioGroup>
    </FormControl>
  );
}
