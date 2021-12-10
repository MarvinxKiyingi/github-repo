import Alert from '@mui/material/Alert';
interface IErrorMessage {
  errorMessage: string;
}
export const ErrorMessage = (props: IErrorMessage) => {
  return <Alert severity='error'>{props.errorMessage}</Alert>;
};
