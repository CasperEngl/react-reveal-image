import expect from 'expect'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'

import Component from 'src/'

describe('RevealImage', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('sets src correctly on image', () => {
    render(<Component src="https://via.placeholder.com/150" />, node, () => {
      expect(node.querySelector('.reveal-image__image').src).toEqual('https://via.placeholder.com/150')
    })
  })

  it('sets classes correctly on image container', () => {
    render(<Component className="testing" src="https://via.placeholder.com/150" />, node, () => {
      expect(node.querySelector('.reveal-image__container').classList.contains('testing')).toBeTruthy()
    })
  })

  it('you can change the tag on image container', () => {
    render(<Component as="article" src="https://via.placeholder.com/150" />, node, () => {
      expect(node.getElementsByTagName('article').length).toBeGreaterThan(0)
    })
  })
})
