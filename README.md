# Discourse Category Logo Component

This Discourse component allows you to easily customize the appearance of category logos across your forum. With various configurable settings, you can control how these logos are displayed, ensuring they fit seamlessly with your site's design.

## Features

- **Enable/Disable Logo**: Toggle the display of category logos.
- **Aspect Ratio Options**: Select the desired aspect ratio for the logos.
- **Maximum Width Control**: Set a maximum width for the logos, ensuring they don't exceed container size.
- **Fit Options**: Customize how logos fit within their containers using CSS `object-fit` properties.
- **Floating Logo Option**: Decide if the category logos should float.
- **Subcategories Layout**: Control the placement of subcategories in relation to the category logo.

## Settings

1. **enabled**
   - **Default**: `true`
   - **Description**: Enable the category logo.

2. **container**
   - **Default**: `body`
   - **Type**: `string`
   - **Description**: CSS selector of the container to apply the style.

3. **ratio**
   - **Default**: `landscape`
   - **Description**: Ratio to display the category logo.
   - **Type**: `enum`
   - **Choices**:
     - `square`
     - `landscape`
     - `portrait`

4. **max_width**
   - **Default**: `150`
   - **Description**: Value between 25 and 500 to limit the maximum width of the category logo (in pixels). The logo won't exceed the width of its container.
   - **Type**: `float`
   - **Min**: `25`
   - **Max**: `500`

5. **fit**
   - **Default**: `contain`
   - **Description**: The CSS function to use to sets how the category logo should be resized to fit its container. See [`object-fit` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
   - **Type**: `enum`
   - **Choices**:
     - `contain`
     - `cover`
     - `fill`
     - `none`
     - `scale-down`

6. **floating**
   - **Default**: `true`
   - **Description**: Should the category logo be floating.
   - **Type**: `bool`

7. **subcategories_clear**
   - **Default**: `true`
   - **Description**: Should subcategories be below the category logo.
   - **Type**: `bool`

## Installation

To install this component on your Discourse forum:

1. Go to `Admin` > `Customize` > `Themes`.
2. Click `Install`.
3. Choose `From a git repository`.
4. Enter the URL of the repository containing this component.
5. Click `Install`.

## Contributing

Contributions to this component are welcome! Please submit pull requests or issues to the repository to propose changes or report bugs.

## License

This project is licensed under [MIT License](LICENSE.md).
