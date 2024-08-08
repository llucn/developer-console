import React, { useState, useEffect } from 'react';
import { Search, Add } from '@carbon/icons-react';
import {
  Grid,
  Column,
  Link,
  Tile,
  UnorderedList,
  ListItem,
} from '@carbon/react';

const ApplicationCards = () => {
  return (
    <div>
      <Grid className="card-page">
        <Column lg={3} md={2} sm={1} className="card-page__r1">
          <Tile style={{ height: '240px', width: '240px' }}>
            <b>Delta Work Force for MAS</b>
            <UnorderedList>
              <ListItem>Work Order</ListItem>
              <ListItem>Asset</ListItem>
              <ListItem>Inventory</ListItem>
              <ListItem>...</ListItem>
            </UnorderedList>
            <Link style={{ marginLeft: '12px' }} href="/#/pagedesigner">
              Edit
            </Link>
          </Tile>
        </Column>
        <Column lg={3} md={2} sm={1} className="card-page__r1">
          <Tile style={{ height: '240px', width: '240px' }}>
            <b>Delta Work Force For Tririga</b>
            <UnorderedList>
              <ListItem>...</ListItem>
              <ListItem>...</ListItem>
              <ListItem>...</ListItem>
              <ListItem>...</ListItem>
            </UnorderedList>
            <Link style={{ marginLeft: '12px' }} href="/#/pagedesigner">
              Edit
            </Link>
          </Tile>
        </Column>
        <Column lg={3} md={2} sm={1} className="card-page__r1">
          <Tile style={{ height: '240px', width: '240px' }}>
            <b>Delta Work Force For SAP</b>
            <UnorderedList>
              <ListItem>...</ListItem>
              <ListItem>...</ListItem>
              <ListItem>...</ListItem>
              <ListItem>...</ListItem>
            </UnorderedList>
            <Link style={{ marginLeft: '12px' }} href="/#/appdesigner">
              Edit
            </Link>
          </Tile>
        </Column>
        <Column lg={3} md={2} sm={1} className="card-page__r1">
          <Tile style={{ height: '240px', width: '240px' }}>
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Link style={{ fontSize: 48 }} href="/#/appcreator">
                <Add size={48} />
              </Link>
            </div>
          </Tile>
        </Column>
      </Grid>
    </div>
  );
};
export default ApplicationCards;
