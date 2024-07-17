import { FormControlLabel } from 'react-bootstrap';

const LabelController = () => {
  return (
    <FormControlLabel
      label="My Custom Label"
      labelClass="text-muted"
      labelStyle={{ fontSize: '8rem' }}
    />
  );
};