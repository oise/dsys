# Questions from the challenge

###### **how would you split them into components? Identify as many components as you can.**

- Label
- TextInput
- Button
- Heading 
- TextArea

Some of these components have  also been created. See the Components list in the documentation

###### **How would you approach a request from a team asking for a dialog without the close button in the header?**

The Modal has a `showClose` boolean prop. This can be used to hide/show the close button.

```tsx
<Modal showClose={false}>
  ...
</Modal>
```

###### **How would you make the header and footer of the dialog window optional?**

Since the `Modal` renders only what is passed as `children`, skipping `Modal.Header` and `Modal.Footer` doesn't render
them

```tsx
<Modal>
  <Modal.Content>...</Modal.Content>
</Modal>
```

###### **Write down a strategy of how would you introduce a breaking change to a component after it’s released.**

- Set a clear timeline for when support of the old features would end.
- Update documentation with notices on the breaking changes.
- Use JSDOC @deprecated for deprecated methods and props. Addition description on the alternatives should also be added
- Ensure the new feature can live side-by-side with the old one. We don't want users losing access to the old features.
- Follow through on the timeline
- For cases where a breaking change migration can be automated, scripts should be written to help with the migration.
- Update all test cases to account for the new changes

**How would you test the component?**
Unit tests to cover the internal functionalities. Snapshot testing would cover changes to styling.

**How would you teach developers to use it?**
The documentation is the best way to teach this. It would cover a lot of examples and possible edge cases.

