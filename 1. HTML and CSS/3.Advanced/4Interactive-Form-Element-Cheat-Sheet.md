
---

## **HTML Form Validation Attributes**

### 1. **`required`**  
Marks an input field as mandatory. The user must fill it in before submission.  
```html
<input type="text" id="firstName" name="firstName" required>
```

---

### 2. **`maxlength`**  
Limits the maximum number of characters in a text input.  
```html
<input type="text" id="description" name="description" maxlength="50">
```

---

### 3. **`minlength`**  
Sets the minimum number of characters required in a text input.  
```html
<input type="password" id="password" name="password" minlength="8">
```

---

### 4. **`min` and `max`**  
Defines the range of acceptable numerical or date values.  
- **Number example**:  
  ```html
  <input type="number" id="quantity" name="quantity" min="1" max="10">
  ```
- **Range slider example**:  
  ```html
  <input type="range" id="volume" name="volume" min="1" max="100">
  ```

---

### 5. **`multiple`**  
Allows the user to select or input multiple values.  
- **File upload example**:  
  ```html
  <input type="file" id="gallery" name="gallery" multiple>
  ```

---

### 6. **`pattern`**  
Specifies a regular expression for input validation.  
- **Phone number example (UK format)**:  
  ```html
  <input type="tel" id="phone" name="phone" pattern="^(?:0|\+?44)(?:\d\s?){9,10}$">
  ```

---

These attributes ensure that users provide data in the correct format before submitting the form, making validation easier and reducing errors!
