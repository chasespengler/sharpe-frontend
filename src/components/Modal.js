import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }

        const activeItem = { ...this.state.activeItem, [name]: value };

        this.setState({ activeItem });
    };

    render() {
        const { toggle, onSave } = this.props;
    
        return (
          <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="ticker-title">Ticker</Label>
                  <Input
                    type="text"
                    id="ticker-title"
                    name="ticker"
                    value={this.state.activeItem.ticker}
                    onChange={this.handleChange}
                    placeholder="Enter Stock Ticker"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="share-count">Number of Shares</Label>
                  <Input
                    type="number"
                    id="share-count"
                    name="shareCount"
                    value={this.state.activeItem.shareCount}
                    onChange={this.handleChange}
                    placeholder="Enter The Number of Shares You Own"
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button
                color="success"
                onClick={() => onSave(this.state.activeItem)}
              >
                Save
              </Button>
            </ModalFooter>
          </Modal>
        );
      }
}