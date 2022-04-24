const Form = ({ handleSubmit }) => {
    return  <form onSubmit={handleSubmit} id="search">
    <input
      className="form-control"
      
      type="text"
      name="task"
    />
    <button className="btn btn-warning">Search</button>
   
</form>
}

export default Form;