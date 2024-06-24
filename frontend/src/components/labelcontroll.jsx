import { FormControlLabel } from 'react-bootstrap';

const MyLabel = () => {
  return (
    <FormControlLabel
      label="My Custom Label"
      labelClass="text-muted"
      labelStyle={{ fontSize: '8rem' }}
    />
  );
};