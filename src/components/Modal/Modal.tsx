import React, { useEffect, useRef } from 'react';
import { ModalProps } from './ModalProps';
import { ModalPortal } from './ModalPortal';
import { createPortal } from 'react-dom';
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';
import { ModalContent } from './ModalContent';


const defaultProps: Partial<ModalProps> = {
  showClose: true,
  closeOnEsc: false,
  className: ''
};

export const Modal = (props: ModalProps) => {
  if (typeof document !== 'undefined') {
    let element = document.createElement('div');

    element.setAttribute('id', 'modal-root');

    const node = useRef(element);

    useEffect(() => {
      const currentNode = node.current;

      document.body.appendChild(node.current);

      return () => {
        document.body.removeChild(currentNode);
      };
    }, [node.current]);

    return createPortal(<ModalPortal {...props}/>, node.current);
  }
  return null;
};

Modal.displayName = 'Modal';
Modal.defaultProps = defaultProps;

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Content = ModalContent;
