export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = "Nome é obrigatório";
  }
  if (!values.email) {
    errors.email = "Email é obrigatório";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email é invalido";
  }
  if (!values.message) {
    errors.message = "Message é obrigatório";
  }
  return errors;
}
