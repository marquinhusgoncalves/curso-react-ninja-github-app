'use strict'

import React from 'react'
import { storiesOf, action } from '@storybook/react'
import Button from './index'

const stories = storiesOf('Button', module)

stories.addDecorator((story) => (
  <div style={{display: 'flex', height: 40}}>
    {story()}
  </div>
))

stories.add('Button default', () => (
  <Button onClick={action('sucess')}>
    Default button
  </Button>
))

stories.add('Button success', () => (
  <Button onClick={action('sucess')} kind='success'>
    Success
  </Button>
))

stories.add('Button danger', () => (
  <Button onClick={action('danger')} kind='danger'>
    Danger
  </Button>
))
