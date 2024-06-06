<h1 align="center">
<img src='https://raw.githubusercontent.com/Raj00377/text-reveal/update/readme/assets/text-reveal-with-bg.png' alt='Text-reveal' />
</h1>
<h3 align="center">
  An open-source, lightweight micro-frontend package for React.
</h3>
<br/>
<p align="center">
    <img src="https://raw.githubusercontent.com/Raj00377/text-reveal/update/readme/assets/ScreenRecording2024-05-14at8.21.14PM-ezgif.com-video-to-gif-converter.gif" width="1000" alt="text-reveal-gif" />
</p>

<br>

✨ Features 
---------------

* **Zero dependency** – This package works independently.
* **Flexible** – Styles can be inherited from parent.
* **Simple** – Uses basic CSS transition animations.
* **Control** – Customize colors, speed, direction.

⚡️ Getting Started
---------------

1. Install:
  ```jsx
  npm install text-reveal
  ```

2. Use:
```jsx
  import TextReveal from 'text-reveal';

  <TextReveal 
    text={['Hello', 'world']} 
    textColor="grey" 
    fillColor="white" 
  />
```

3. Styles inherits from parent:
```jsx
  <div style={{fontSize : '2rem', backgroundColor : 'black'}}>
    <TextReveal 
      text={['Hello', 'world']} 
      textColor="grey" 
      fillColor="white" 
    />
  </div>
```

### 📚 Docs

- Check out [my documentation](https://text-reveal.web.app) for guides and a full API reference.

### 💎 Contribute

- Want to contribute? I'd love that. [Contributing guide](https://github.com/Raj00377/text-reveal/blob/main/CONTRIBUTING.md) got you covered.

### 👩🏻‍⚖️ License

- Text Reveal is MIT licensed.