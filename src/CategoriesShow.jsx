export function CategoriesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateCategory(props.category.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyCategory(props.category);
  };

  return (
    <div>
      <h1>Category</h1>
      <p>Name: {props.category.name}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.category.name} name="name" type="text" />
        </div>
        <button type="submit">Update Category</button>
      </form>
      <button onClick={handleClick}>Delete Category</button>
    </div>
  );
}

export default CategoriesShow;
