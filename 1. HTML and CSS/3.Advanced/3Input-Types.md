Here’s a simplified explanation of the various HTML input types with examples:

---

## **HTML Input Types Cheat Sheet**

### 1. **Button**  
Displays a clickable button. Used to activate scripts when clicked.  
```html
<input type="button" value="Click Me" onclick="alert('Button Clicked!')">
```

---

### 2. **Checkbox**  
Allows the selection of one or more options.  
```html
<input type="checkbox" id="dog" name="pet" value="Dog">
<label for="dog">I like dogs</label>
<input type="checkbox" id="cat" name="pet" value="Cat">
<label for="cat">I like cats</label>
```

---

### 3. **Radio**  
Allows selection of one option from a group.  
```html
<input type="radio" id="light" name="theme" value="Light">
<label for="light">Light</label>
<input type="radio" id="dark" name="theme" value="Dark">
<label for="dark">Dark</label>
```

---

### 4. **Submit**  
Submits form data to a server.  
```html
<form action="https://example.com" method="POST">
  <input type="text" name="name" placeholder="Enter Name">
  <input type="submit" value="Submit">
</form>
```

---

### 5. **Text**  
A single-line text field.  
```html
<label for="fname">First Name:</label>
<input type="text" id="fname" name="fname">
```

---

### 6. **Password**  
A single-line field for sensitive information (e.g., passwords).  
```html
<label for="pwd">Password:</label>
<input type="password" id="pwd" name="pwd">
```

---

### 7. **Date**  
Allows selecting a date (year, month, day).  
```html
<label for="dob">Date of Birth:</label>
<input type="date" id="dob" name="dob">
```

---

### 8. **Datetime-Local**  
Allows selecting a date and time.  
```html
<label for="datetime">Choose Date and Time:</label>
<input type="datetime-local" id="datetime" name="datetime">
```

---

### 9. **Email**  
Validates an email address.  
```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```

---

### 10. **File**  
Allows file upload.  
```html
<label for="file">Upload File:</label>
<input type="file" id="file" name="file">
```

---

### 11. **Hidden**  
Stores hidden data to be sent with a form.  
```html
<input type="hidden" name="userId" value="12345">
```

---

### 12. **Image**  
Uses an image as a submit button.  
```html
<input type="image" src="submit.png" alt="Submit" width="50" height="50">
```

---

### 13. **Number**  
Allows input of numerical values with optional constraints.  
```html
<label for="quantity">Quantity (1-5):</label>
<input type="number" id="quantity" name="quantity" min="1" max="5">
```

---

### 14. **Range**  
Displays a slider for selecting a range.  
```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume" min="0" max="10">
```

---

### 15. **Reset**  
Resets the form fields to their initial values.  
```html
<input type="reset" value="Reset">
```

---

### 16. **Search**  
A text input optimized for search queries.  
```html
<label for="search">Search:</label>
<input type="search" id="search" name="search">
```

---

### 17. **Time**  
Allows input of a time (hours and minutes).  
```html
<label for="time">Select Time:</label>
<input type="time" id="time" name="time">
```

---

### 18. **Tel**  
Allows input of a phone number with optional validation.  
```html
<label for="phone">Phone:</label>
<input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{10,14}">
```

---

### 19. **URL**  
Allows input of a web address, with validation.  
```html
<label for="website">Website:</label>
<input type="url" id="website" name="website">
```

---

### 20. **Week**  
Allows input of a specific week in a year.  
```html
<label for="week">Choose Week:</label>
<input type="week" id="week" name="week">
```

---

### 21. **Month**  
Allows input of a specific month and year.  
```html
<label for="month">Choose Month:</label>
<input type="month" id="month" name="month">
```

---
