import * as React from 'react';

export interface IConfirmButton {
  confirmMessage: string;
  className: string;
  modalKey: string;
  children:  any;
  onConfirm: () => void;
}

export default (props: IConfirmButton) => (
  <span>
    <button
      className={`btn ${props.className}`}
      data-toggle="modal"
      data-target={`#${props.modalKey}`}
      >
      {props.children}
    </button>

    <div className="modal text-left" role="dialog" id={props.modalKey}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Attention!</h5>
          </div>
          <div className="modal-body">
            {props.confirmMessage}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={props.onConfirm}
              className="btn btn-sm btn-primary"
              data-dismiss="modal"
            >
              Yes, close request
            </button>
            <button type="button" className="btn btn-sm btn-secondary" data-dismiss="modal">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </span>
);
