function charCount() {
  const element = document.getElementById("textarea").value.length;
  document.getElementById("textarea_count").innerHTML =
    element + "/100 (Max Character 100)";
}
