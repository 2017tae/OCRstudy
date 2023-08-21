const { createWorker } = require("tesseract.js");

const imagePath = "./japan.png"; // 이미지 파일 경로를 정확하게 입력해주세요.

(async () => {
  const worker = await createWorker({
    langPath: "./tessdata", // traineddata가 위치한 경로를 입력해주세요.
  });
  await worker.load();
  await worker.loadLanguage("Japanese");
  await worker.initialize("Japanese");

  const {
    data: { text },
  } = await worker.recognize(imagePath);
  console.log(text);

  await worker.terminate();
})();
