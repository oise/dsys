import React, { FC, Fragment, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './modal.module.scss';
import { ModalProps } from './ModalProps';


export const ModalPortal: FC<ModalProps> = (props) => {
  const { children, className = '', isOpen, onOpen, onClose, closeOnEsc, showClose, ...rest } = props;

  const containerStyles = classNames({
    [styles['modalContainer']]: true,
    [className]: className
  });

  const container = useRef<HTMLDivElement>(null);

  const [focusElements, setFocusElements] = useState<HTMLElement[]>([]);


  const openModal = () => {
    if (isOpen && onOpen) {
      onOpen();
      toggleBodyScroll(true);
    }
  };

  const closeModal = () => {
    if (onClose) {
      onClose();
      toggleBodyScroll(false);
    }
  };


  const _handleTabBackward = (event: React.KeyboardEvent) => {
    const lastElement = focusElements[focusElements.length - 1];
    if (document.activeElement === focusElements[0]) {
      event.preventDefault();
      lastElement.focus();
    }
  };

  const _handleTabForward = (event: React.KeyboardEvent) => {
    const lastElement = focusElements[focusElements.length - 1];
    if (document.activeElement === lastElement) {
      event.preventDefault();
      focusElements[0].focus();
    }
  };

  const _handleScopedTab = (event: React.KeyboardEvent<Element>) => {
    if (focusElements.length === 1) {
      event.preventDefault();
      return;
    }
    if (event.shiftKey) {
      _handleTabBackward(event);
    } else {
      _handleTabForward(event);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    //Close modal on ESC
    if (closeOnEsc && event.key.toLowerCase() === 'escape') {
      event.stopPropagation();
      closeModal();
    }

    if (event.key.toLowerCase() === 'tab') {
      _handleScopedTab(event);
    }

  };


  /**
   * Enable/Disable scroll on body element
   */
  const toggleBodyScroll = (value: boolean) => {
    document.body.style.overflow = value ? 'hidden' : 'auto';
  };

  useEffect(() => {
    openModal();
    if (container.current) {
      const focusElementsOnModal = container.current.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"], [role="button"]');

      const focusElementsOnModalAsArray = Array.prototype.slice.call(focusElementsOnModal);

      setFocusElements(focusElementsOnModalAsArray);

    }
  }, [isOpen, container.current]);


  return isOpen ? (
    <div className={styles.modalOverlay} onKeyDown={handleKeyDown}>
      <div className={containerStyles} tabIndex={0} aria-modal="true" role="dialog" ref={container}  {...rest}>
        {showClose && <div className={styles.modalClose} aria-label="close" onClick={closeModal} role="button" data-testid='modalClose'>x</div>}
        {children}
      </div>
    </div>) : <Fragment/>;
};

ModalPortal.displayName = 'ModalPortal';






