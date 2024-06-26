/* eslint-disable react/prop-types */
import "./Modal.css";
export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal-background ">
        <div className="modal-main">
          {props.children}
          <button type="button" className="close" onClick={props.onClose}>
            &#x2715;
          </button>
        </div>
      </div>
    );
  }
}
export default Modal;
