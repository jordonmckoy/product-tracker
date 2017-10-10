import React, { Component } from 'react';

import {
  Button,
  FormLayout,
  TextField
} from '@shopify/polaris';

class ItemForm extends Component {
  render() {
    return (
      <FormLayout>
        <TextField
          label="Amazon URL"
        />
        <Button>
          Track product price
        </Button>
      </FormLayout>
    );
  }
}

export default ItemForm;