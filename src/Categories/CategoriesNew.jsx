import { Link } from "react-router-dom";

export function CategoriesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateCategory(params, () => event.target.reset());
    window.location.href = "/admin-page";
  };

  return (
    <div>
      <h1>New Category</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <button type="submit">Create Category</button>
      </form>
      <div>
        <Link to="/admin-page">Back</Link>
      </div>
    </div>
  );
}

export default CategoriesNew;
