---
name: RFC
route: /rfc
---

- Start Date: 2021-06-22
- RFC PR: (leave this empty)
- React Issue: (leave this empty)

# Summary

Implement a reusable modal with a minimal and developer-friendly API

# Basic example

```typescript jsx
<Modal>
  <Modal.Header>Alert </Modal.Header>
  <Modal.Content> Modal Content </Modal.Content>
  <Modal.Footer> Footer </Modal.Footer>
</Modal>
```

# Motivation
This implementation will allow for better control of what contents a `modal` can have. This would address issues around optional headers and footers, footers or headers with multiple content types.

# Detailed design
`Modal` is made up of 3 layer components 
- `Modal.Header` - Header section. Font size is fixed for posterity.
- `Modal.Content` - Content section. This is basically just a renderer. It displays any content passed to it.
-  `Modal.Footer` -  Footer section. Holds footer details

All `props` are passed directly to the `Modal`. Developer can style the Modal and its sub-components using `CSS` or `CSS-in-JS`.

List of available props and description is shown below.

```ts

/**
   *  Controls whether or not the modal is opened
   */
  isOpen?: boolean;

  /**
   * CSS identifier for the modal.
   */
  id?: string;

  /**
   * String indicating an accessible name for modal. It also tells how the modal should be announced to screenreaders. Required for a11y.
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
  onClose: () => {},


  /**
   * Callback triggered when the modal is opened
   */
  onOpen: () => {},

  /**
   *  Whether or not the Modal should display a close Button
   */
  showClose?: boolean,

  /**
   * Additional Classes
   */
  className: string
```

For easy accessibility, the modal would have  `role = "dialog"` and `aria-modal="true"` set by default.


# Drawbacks
N/A

# Alternatives
An alternative approach would be to have the Modal has a single component and have `props` for the `header` and `footer`. This would limit the type of content passed to  only strings. For cases with actions and buttons, a list of callbacks has to be managed and passed around. This could get cumbersome. 

# Adoption strategy
This is a new component. No adoption strategy is needed at this time

# How we teach this
The documentation for the modal is currently the best attempt. Also there are plans for deep-dives for any confusing use cases and updating the docs as those cases are resolved.

# Unresolved questions
None
