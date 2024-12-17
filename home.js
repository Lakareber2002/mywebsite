
    // Lines of text
    const lines = [
        "Welcome",
        "I'm Daina Lakareber",
        "Full Stack Developer",
        "Located in Kampala, Uganda"
    ];

    // Typing configuration
    const typingSpeed = 100; // milliseconds per character
    const lineDelays = [0, 2000, 4000, 6000]; // Start typing each line at different intervals (ms)

    function typeLine(lineElement, text, delay) {
      setTimeout(() => {
        let index = 0;
        const interval = setInterval(() => {
          if (index < text.length) {
            lineElement.textContent += text.charAt(index);
            index++;
          } else {
            clearInterval(interval);
          }
        }, typingSpeed);
      }, delay);
    }

    // Get line elements
    const lineElements = [
      document.getElementById('line1'),
      document.getElementById('line2'),
      document.getElementById('line3'),
      document.getElementById('line4')
    ];

    // Start typing each line
    lines.forEach((text, i) => {
      typeLine(lineElements[i], text, lineDelays[i]);
    });
  