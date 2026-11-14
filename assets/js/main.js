// 找到按鈕與心得區塊
const toggleButton = document.getElementById("project-toggle");
const projectNotes = document.getElementById("project-notes");

// 按鈕被點擊時，執行大括號裡的程式
toggleButton.addEventListener("click", function () {
  // 切換心得的隱藏狀態
  projectNotes.hidden = !projectNotes.hidden;

  // 根據目前狀態更新按鈕
  const isExpanded = !projectNotes.hidden;

  toggleButton.setAttribute("aria-expanded", String(isExpanded));
  toggleButton.textContent = isExpanded
    ? "收起學習心得"
    : "展開學習心得";
});