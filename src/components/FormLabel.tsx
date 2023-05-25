type FormLabelTypes = {
  htmlFor: string;
  label: string;
  subLabel: string;
};

export const FormLabel = ({ htmlFor, label, subLabel }: FormLabelTypes) => {
  return (
    <label htmlFor={htmlFor} style={{ margin: '1rem 0' }}>
      <p>{label || 'label'}</p>
      <small>{subLabel || 'subLabel'}</small>
    </label>
  );
};
