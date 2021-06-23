export interface ModalProps {
  /**
   *  Controls whether or not the modal is opened
   */
  isOpen?: boolean;

  /**
   * CSS identifier for the modal
   */
  id?: string;

  /**
   * string indicating an accessible name for modal. It also tells how the modal should be announced to screenreaders. Required for a11y.
   */
  ariaLabelledby?: string,

  /**
   * Gives the dialog an accessible description by referring to the dialog content that describes the primary message or purpose of the dialog.
   */
  ariaDescribedby?: string,

  /**
   * Whether or not the Modal should close when the ESC is pressed.
   */
  closeOnEsc?: boolean,

  /**
   * Callback triggered when the modal is closed
   */
  onClose?: () => {},


  /**
   * Callback triggered when the modal is opened
   */
  onOpen?: () => {},

  /**
   *  Whether or not the Modal should display a close Button
   */
  showClose?: boolean,

  /**
   * Additional Classes
   */
  className?: string,

}
