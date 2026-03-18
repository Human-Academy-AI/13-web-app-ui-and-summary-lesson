function translateText() {
  const inputText = document.getElementById("input-text").value;
  const sourceLanguage = document.getElementById("source-language").value;
  const targetLanguage = document.getElementById("target-language").value;

  if (inputText !== "") {
    axios
      .get(
        "/translate" +
          "?input_text=" +
          encodeURIComponent(inputText) +
          "&source_lang=" +
          sourceLanguage +
          "&target_lang=" +
          targetLanguage
      )
      .then((response) => {
        const textbox = document.getElementById("output-text");
        textbox.value = response.data;
      });
  }
}
