import React, { Component } from 'react';

import {
  Card,
  DisplayText,
  Layout
} from '@shopify/polaris';

import { ItemForm } from './components';

import '@shopify/polaris/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <DisplayText size='large'>Amazon Product Tracker</DisplayText>
        <Layout>
          <Layout.Section>
            <Layout.AnnotatedSection
              title="Add Product"
              description="Add a product from Amazon to the list of tracked prices">
              <Card sectioned>
                <ItemForm />
              </Card>
            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection
              title="My Products"
              description="List of currently tracked products with their price changes over time">
              <Card sectioned>

              </Card>
            </Layout.AnnotatedSection>
          </Layout.Section>
        </Layout>
      </div>
    );
  }
}

export default App;
