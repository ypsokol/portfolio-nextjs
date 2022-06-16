import Input from "./Input";
import useForm from "../../../../utils/hooks/useForm";

const Form = () => {
  const { state, handeOnSubmit, handleOnChange } = useForm();

  return (
    <form className="contact__form" onSubmit={handeOnSubmit}>
      <Input
        label="Names"
        type="text"
        name="name"
        placeholder="Insert your name"
        value={state.name}
        onChange={handleOnChange("name")}
      />
      <Input
        label="Mail"
        type="email"
        name="email"
        placeholder="Insert your email"
        value={state.email}
        onChange={handleOnChange("email")}
      />
      <Input
        label="Project"
        name="description"
        textarea
        placeholder="Write your project"
        value={state.description}
        onChange={handleOnChange("description")}
      />

      <button className="btn" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default Form;
