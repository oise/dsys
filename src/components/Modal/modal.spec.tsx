import React, { useState } from 'react';
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react';
import { Modal } from './Modal';


const renderComponent = (isOpen = true, showClose = true) =>
  render(
    <Modal isOpen={isOpen} showClose={showClose} data-testid="modalId" >
      <Modal.Header data-testid="modalHeaderId">Sample Header</Modal.Header>
      <Modal.Content>Sample test</Modal.Content>
      <Modal.Footer data-testid="modalFooterId">Sample Footer</Modal.Footer>
    </Modal>
  );

describe('Modal Render', () => {
  let renderedModal: RenderResult;
  beforeEach(() => {
    renderedModal = renderComponent();
  });

  it('should render a modal', async () => {
    expect(renderedModal.getByTestId('modalId')).toBeDefined();
  });

  it('should render a modal header and footer when available', () => {
    expect(renderedModal.queryByTestId('modalHeaderId')).not.toBeNull();
    expect(renderedModal.queryByTestId('modalFooterId')).not.toBeNull();
  });

  it('should not show the close button when showClose is true', () => {
    expect(renderedModal.queryByTestId('modalClose')).not.toBeNull();
    cleanup();
    // with showClose set to false
    let modal = renderComponent(true, false);

    expect(modal.queryByTestId('modalClose')).toBeNull();

  });

});

describe('Modal Open', () => {
  it('is not opened by default', async () => {
    const modal = render(<Modal data-testid="modalId"/>).queryByTestId('modalId');
    expect(modal).toBeNull();
  });

  it('is opened when isOpen=true', () => {
    const modal = render(<Modal data-testid="modalId" isOpen={true}/>).queryByTestId('modalId');
    expect(modal).not.toBeNull();
  });
});


describe('onOpen ', () => {
  it('is called when isOpen is true', () => {
    const onOpen = jest.fn();
    render(<Modal data-testid="modalId" isOpen={true} onOpen={onOpen}/>);
    expect(onOpen).toHaveBeenCalled();
  });
});

describe('onClose ', () => {
  it('is called when isOpen is false', () => {
    const onClose = jest.fn();
    const modal = render(<Modal data-testid="modalId" isOpen={true} onClose={onClose}/>);
    const closeButton = modal.getByTestId('modalClose');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});

describe('Close on Esc ', () => {
  it('modal closes when ESC is pressed', () => {
    const onClose = jest.fn();
    const modal = render(<Modal data-testid="modalId" isOpen={true} onClose={onClose} closeOnEsc={true} />);
    fireEvent.keyDown(modal.getByTestId('modalId'), { key: 'Esc', keyCode: 27 });
    expect(onClose).toHaveBeenCalled();
  });
});
