# Flexbox Notes

## Introduction
Flexbox (Flexible Box) is a layout model in CSS that allows for more efficient arrangement of elements inside a container. It provides better control over alignment, spacing, and scaling of elements compared to traditional block and inline containers.

## Key Features of Flexbox
- **Single-Dimensional Layout**: Works along either a row or a column.
- **Main and Cross Axes**:
  - **Main Axis**: Defines the primary direction (horizontal by default).
  - **Cross Axis**: Perpendicular to the main axis.
- **Dynamic Item Resizing**: Items can grow, shrink, or align dynamically based on available space.

## Important Flexbox Properties

### 1. Setting up a Flex Container
To convert a container into a flexbox, use the `display: flex;` property.

```css
.flex-container {
    display: flex;
}
```

### 2. Justify Content (Align Items on Main Axis)
Controls alignment of items along the main axis.

```css
.flex-container {
    display: flex;
    justify-content: center;
}
```

### 3. Align Items (Align on Cross Axis)
Aligns items along the cross axis.

```css
.flex-container {
    display: flex;
    align-items: flex-end;
}
```

### 4. Align Self (Align Individual Items)
Allows individual items to override the `align-items` property.

```css
.box3 {
    align-self: center;
}
```

### 5. Flex Direction (Change Axis Orientation)
Defines the direction of the main axis.

```css
.flex-container {
    display: flex;
    flex-direction: column;
}
```

### 6. Flex Wrap (Wrap Items When Needed)
Controls whether items should wrap when there’s insufficient space.

```css
.flex-container {
    display: flex;
    flex-wrap: wrap;
}
```

### 7. Gap (Spacing Between Items)
Defines spacing between flex items.

```css
.flex-container {
    display: flex;
    gap: 10px;
}
```

### 8. Flex Property (Grow, Shrink, Basis)
Controls how items grow, shrink, and define their base size.

```css
.box3 {
    flex: 1 1 auto;
}
```

## Example HTML and CSS

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="flex-container">
        <div class="box box1">One</div>
        <div class="box box2">Two</div>
        <div class="box box3">Three</div>
        <div class="box box4">Four</div>
        <div class="box box5">Five</div>
        <div class="box box6">Six</div>
        <div class="box box7">Seven</div>
    </div>
</body>
</html>
```

### CSS (styles.css)
```css
.flex-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
}

.box {
    background-color: aquamarine;
    border-radius: 5px;
    margin: 2px;
    padding: 10px;
}

.box3 {
    background-color: blanchedalmond;
    align-self: center;
    flex: 1 1 auto;
}
```

## Summary
- Flexbox allows easy arrangement of elements inside a container.
- Properties like `justify-content`, `align-items`, and `flex-direction` help in layout design.
- Flex properties (`flex-grow`, `flex-shrink`, `flex-basis`) control item sizing.
- Using `gap`, `flex-wrap`, and `align-self`, fine-tuned layout adjustments can be made.

Flexbox is a powerful tool for modern responsive web design!

