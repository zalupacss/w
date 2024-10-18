document.addEventListener('DOMContentLoaded', function() {
  const fileList = document.getElementById('file-list');
  const previewWindow = document.getElementById('preview-window');
  const previewIframe = document.getElementById('preview-iframe');

  // Пример списка файлов (замени это реальными данными из API Kommo CRM)
  const files = [
    { name: 'Document 1', url: 'https://example.com/doc1.pdf' },
    { name: 'Document 2', url: 'https://example.com/doc2.pdf' }
  ];

  files.forEach(file => {
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';

    const fileName = document.createElement('span');
    fileName.textContent = file.name;

    const previewButton = document.createElement('button');
    previewButton.className = 'preview-button';
    previewButton.textContent = 'Предпросмотр';
    previewButton.addEventListener('click', function() {
      previewIframe.src = `https://docs.google.com/viewer?url=${file.url}&embedded=true`;
      previewWindow.style.display = 'block';
    });

    fileItem.appendChild(fileName);
    fileItem.appendChild(previewButton);
    fileList.appendChild(fileItem);
  });
});
