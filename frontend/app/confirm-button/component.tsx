import * as React from 'react';

export interface IConfirmButton {
  confirmMessage: string;
  className: string;
  modalKey: string;
}

class ConfirmButton extends React.Component<IConfirmButton, IConfirmButton> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>
        <button
          className={`btn ${this.props.className}`}
          data-toggle="modal"
          data-target={`#${this.props.modalKey}`}
          >
          {this.props.children}
        </button>

        <div className="modal text-left" role="dialog" id={this.props.modalKey}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Attention!</h5>
              </div>
              <div className="modal-body">
                {this.props.confirmMessage}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-sm btn-primary">
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
    )
  }
}

export default ConfirmButton;
