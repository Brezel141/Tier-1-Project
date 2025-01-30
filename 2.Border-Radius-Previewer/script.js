document.querySelectorAll('.controls input').forEach(input => {
    input.addEventListener('input', updatePreview);
});

function updatePreview() {
    const topLeft = document.getElementById('top-left').value;
    const topRight = document.getElementById('top-right').value;
    const bottomLeft = document.getElementById('bottom-left').value;
    const bottomRight = document.getElementById('bottom-right').value;

    const previewBox = document.getElementById('preview-box');
    previewBox.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;

    const cssOutput = document.getElementById('css-output');
    cssOutput.textContent = `border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;`;
}

function copyToClipboard() {
    const cssOutput = document.getElementById('css-output').textContent;
    navigator.clipboard.writeText(cssOutput).then(() => {
        alert('CSS copied to clipboard!');
    });
}
