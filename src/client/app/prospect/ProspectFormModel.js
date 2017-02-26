import React from 'react';
import {Button} from 'react-bootstrap';
import {Popover,Modal,Tooltip,OverlayTrigger} from 'react-bootstrap';
import CreateProspectForm from "./ProspectForm";

const ProspectFormModel = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div> <Button bsStyle="primary" bsSize="small" onClick={this.open}> <span className="fa fa-plus-circle" ></span>Add Collection</Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>New Collection</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <CreateProspectForm />
                 </Modal.Body>
        </Modal>
      </div>
    );
  }
});

export default ProspectFormModel;


