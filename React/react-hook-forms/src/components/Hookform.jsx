import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (values) => {
    console.log("Form values:", values);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        {...register("username", {
          required: true,
          minLength: 2,
        })}
      />
      {errors.username ? (
        <p className="error">
          Este campo es requerido y tiene que tener un mínimo de 2 caracteres
        </p>
      ) : null}
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        {...register("password", {
          required: true,
          minLength: 6,
          // Prevenimos que haya espacios en la contraseña
          pattern: /^\S*$/,
          validate: {
            // Comprobamos que hay mayúsculas, minúsculas y números
            format: (password) => {
              return (
                /[A-Z]/g.test(password) &&
                /[a-z]/g.test(password) &&
                /[0-9]/g.test(password)
              );
            },
          },
        })}
      />
      {errors.password ? (
        <p className="error">
          {errors.password.type === "format" ? "La contraseña tiene que tener una mayuscula, una minuscula y numeros" : "Este campo es requirido y tiene que tener un mínimo de 6 caracteres" } 
        </p>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};
export default HookForm;
