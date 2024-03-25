import { useState } from "react";

export function AdminPaintingShow(props) {
  const [showPopover, setShowPopover] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePainting(props.painting.id, params, () => event.target.reset());
  };

  const handleDelete = () => {
    setShowPopover(true);
  };

  const confirmDelete = () => {
    props.onDestroyPainting(props.painting);
    setShowPopover(false);
  };

  const cancelDelete = () => {
    setShowPopover(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          Description:{" "}
          <input defaultValue={props.painting.description} name="description" type="text" className="form-control" />
        </div>
        <div>
          {props.painting.images.map((image, index) => (
            <div key={index}>
              Image {index + 1}:{" "}
              <input defaultValue={image.url} name={`image${index}`} type="text" className="form-control" />
            </div>
          ))}
        </div>

        <button className="mt-4 btn btn-outline-success" type="submit">
          Update
        </button>
      </form>
      <div>
        <button className="mt-4 btn btn-outline-danger" onClick={handleDelete}>
          Delete Painting
        </button>
        {showPopover && (
          <div className="popover">
            <div className="popover-header">Are you sure you want to delete this painting?</div>
            <div className="popover-body">
              <button className="btn btn-danger" onClick={confirmDelete}>
                Delete
              </button>
              <button className="btn btn-secondary" onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPaintingShow;
