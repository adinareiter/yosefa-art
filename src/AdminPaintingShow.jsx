/* eslint-disable react/prop-types */
export function AdminPaintingShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePainting(props.painting.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyPainting(props.painting);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Description: <input defaultValue={props.painting.description} name="description" type="text" />
        </div>
        <div>
          {props.painting.images.map((image, index) => (
            <div key={index}>
              Image {index + 1}: <input defaultValue={image.url} name={`image${index}`} type="text" />
            </div>
          ))}
        </div>

        <button type="submit">Update</button>
      </form>
      <button onClick={handleClick}>Delete Painting</button>
    </div>
  );
}

export default AdminPaintingShow;
