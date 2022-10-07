import HostGradient from '../components/HostGradient'

const HostForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <HostGradient/>
      <form onSubmit={handleSubmit}>
        <h1>Formulario de Host</h1>
        <button type="submit">Aceptar</button>
      </form>
    </div>
  );
};

export default HostForm;
