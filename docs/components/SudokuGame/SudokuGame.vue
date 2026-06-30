<!-- docs/components/SudokuGame/SudokuGame.vue -->
<template>
  <div class="sudoku-container">
    <!-- 顶部操作栏 -->
    <div class="toolbar">
      <!-- 左侧：难度选择（动态循环 JS 里的 diffTypes） -->
      <div class="diff-group">
        <button
          v-for="(label, key) in diffTypes"
          :key="key"
          class="diff-btn"
          :class="{ active: difficulty === key }"
          @click="changeDifficulty(key)"
        >
          {{ label }}
        </button>
      </div>

      <!-- 右侧：新题入口 -->
      <button class="action-btn new-btn" @click="initGame" title="随机新题">
        🎲 新题
      </button>
    </div>

    <!-- 棋盘 -->
    <div class="board">
      <div
        v-for="(cell, index) in grid"
        :key="index"
        class="cell"
        :class="{
          selected: selectedCell === index,
          highlight: cell.isHighlight,
          'note-match': cell.isNoteMatch,
          original: cell.isOriginal,
          'is-error': cell.isError,
        }"
        @click="onCellTap(index)"
      >
        <span v-if="cell.value !== 0" class="number">{{ cell.value }}</span>

        <div v-else-if="cell.showNotes" class="notes-grid">
          <span
            v-for="n in 9"
            :key="n"
            class="note-num"
            :class="{
              'highlight-note':
                cell.noteHighlightMap && cell.noteHighlightMap[n],
            }"
          >
            {{ cell.notesMap && cell.notesMap[n] ? n : '' }}
          </span>
        </div>
      </div>
    </div>

    <!-- 数字键盘 -->
    <div class="keypad">
      <button
        v-for="n in 9"
        :key="n"
        class="key"
        :class="{
          'note-active': isNoteMode,
          'highlight-note-key': highlightedNotesMap && highlightedNotesMap[n],
        }"
        @click="onNumberTap(n)"
      >
        {{ n }}
      </button>
      <button class="key erase-key" @click="onEraseTap">清空</button>
    </div>

    <!-- 底部辅助操作栏 -->
    <div class="bottom-actions">
      <!-- 草稿模式 Toggle -->
      <div class="toggle-wrapper">
        <button
          class="toggle-track"
          :class="{ active: isNoteMode }"
          @click="toggleNoteMode"
        >
          <span class="toggle-label">✏️ 草稿</span>
          <span class="toggle-knob"></span>
        </button>
      </div>

      <!-- 重玩按钮 -->
      <button class="action-btn restart-btn" @click="restartGame">
        <span class="icon">↩️</span>
        <span class="label">重玩本题</span>
      </button>
    </div>

    <!-- 通关弹窗 -->
    <div class="modal-overlay" v-if="isWin">
      <div class="modal-box">
        <div class="modal-icon">🧩</div>
        <div class="modal-title">填完了！</div>
        <button class="modal-btn" @click="startNewRound">再来一题</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { generatePuzzle, diffTypes } from './sudokuGenerator.js'

// --- 响应式状态 ---
const grid = ref([])
const originalGrid = ref([])
const answer = ref([])
const selectedCell = ref(-1)
const isNoteMode = ref(false)
const highlightedNotesMap = ref({})
const isWin = ref(false)

const difficulty = ref('easy')
const difficultyText = computed(() => diffTypes[difficulty.value])

// --- 初始化 ---
const initGrid = (puzzle) => {
  return puzzle.map((val) => ({
    value: val,
    isOriginal: val !== 0,
    isSelected: false,
    isHighlight: false,
    isNoteMatch: false,
    isError: false,
    notes: [],
    notesMap: {},
    showNotes: false,
    noteHighlightMap: {},
  }))
}

const initGame = () => {
  const { puzzle, answer: ans } = generatePuzzle(difficulty.value)
  grid.value = initGrid(puzzle)
  originalGrid.value = JSON.parse(JSON.stringify(grid.value))
  answer.value = ans
  selectedCell.value = -1
  highlightedNotesMap.value = {}
  isNoteMode.value = false
  isWin.value = false
}

watch(difficulty, () => {
  initGame()
})

const changeDifficulty = (newDiff) => {
  if (difficulty.value !== newDiff) {
    difficulty.value = newDiff
  }
}

// --- 核心交互 ---
const onCellTap = (index) => {
  const g = grid.value
  if (selectedCell.value === index) {
    // 取消选中时同时清空高亮
    g.forEach((c) => {
      c.isHighlight = false
      c.isNoteMatch = false
      c.noteHighlightMap = {}
    })
    selectedCell.value = -1
    highlightedNotesMap.value = {}
    return
  }

  // 切换格子前先清空旧高亮
  g.forEach((c) => {
    c.isHighlight = false
    c.isNoteMatch = false
    c.noteHighlightMap = {}
  })

  selectedCell.value = index
  const cell = g[index]
  const val = cell.value
  const notes = cell.notes || []

  const hMap = {}
  if (val > 0) {
    g.forEach((c) => {
      c.isHighlight = c.value === val
      c.noteHighlightMap = {}
      if (c.notesMap && c.notesMap[val]) c.noteHighlightMap[val] = true
    })
  } else if (isNoteMode.value && notes.length > 0) {
    const set = new Set(notes)
    g.forEach((c) => {
      const n = c.notes || []
      c.isNoteMatch = n.length === notes.length && n.every((x) => set.has(x))
    })
    notes.forEach((n) => (hMap[n] = true))
  }
  highlightedNotesMap.value = hMap
}

const onNumberTap = (num) => {
  if (selectedCell.value === -1) return
  const g = grid.value
  const idx = selectedCell.value
  const cell = g[idx]
  if (cell.isOriginal) return

  if (isNoteMode.value) {
    const notes = [...(cell.notes || [])]
    const ni = notes.indexOf(num)
    if (ni > -1) notes.splice(ni, 1)
    else notes.push(num)

    const notesMap = {}
    notes.forEach((n) => (notesMap[n] = true))

    cell.notes = notes
    cell.notesMap = notesMap
    cell.showNotes = true

    const map = {}
    notes.forEach((n) => (map[n] = true))
    highlightedNotesMap.value = map
    return
  }

  cell.value = num
  cell.isError = false
  cell.notes = []
  cell.notesMap = {}
  cell.showNotes = false

  const row = Math.floor(idx / 9)
  const col = idx % 9
  const sr = Math.floor(row / 3) * 3
  const sc = Math.floor(col / 3) * 3

  g.forEach((c, i) => {
    if (i === idx) return
    const r = Math.floor(i / 9)
    const cIdx = i % 9
    const same =
      r === row ||
      cIdx === col ||
      (r >= sr && r < sr + 3 && cIdx >= sc && cIdx < sc + 3)
    if (same && (c.notes || []).includes(num)) {
      c.notes = c.notes.filter((n) => n !== num)
      const map = {}
      c.notes.forEach((n) => (map[n] = true))
      c.notesMap = map
    }
  })

  if (answer.value[idx] !== num) {
    cell.isError = true
  } else if (g.every((c) => c.value > 0 && !c.isError)) {
    isWin.value = true
  }
}

const onEraseTap = () => {
  if (selectedCell.value === -1) return
  const cell = grid.value[selectedCell.value]
  if (cell.isOriginal) return

  if (isNoteMode.value) {
    cell.notes = []
    cell.notesMap = {}
    cell.showNotes = true
  } else {
    cell.value = 0
    cell.isError = false
    cell.notes = []
    cell.notesMap = {}
    cell.showNotes = false
  }
  highlightedNotesMap.value = {}
}

const restartGame = () => {
  if (originalGrid.value.length === 0) return
  grid.value = JSON.parse(JSON.stringify(originalGrid.value))
  selectedCell.value = -1
  highlightedNotesMap.value = {}
  isNoteMode.value = false
  isWin.value = false
}

const startNewRound = () => {
  isWin.value = false
  initGame()
}

const toggleNoteMode = () => {
  isNoteMode.value = !isNoteMode.value
  highlightedNotesMap.value = {}
}

initGame()
</script>

<style scoped>
/* ========================================
   颜色变量定义（完全隔离在组件内，不会冲突）
   ======================================== */
.sudoku-container {
  /* 主色 (常用于按钮、弹窗) */
  --color-primary: #4a90e2;
  --color-primary-active: #3b7bc9;

  /* 灰色体系 (用于草稿模式、降噪、边框) */
  --color-gray-light: #e0e0e0;
  --color-gray-bg: #f0f2f5;
  --color-gray-btn: #f0f0f0;
  --color-gray-btn-active: #e0e0e0;

  /* 深色体系 (高对比度、强调) */
  --color-dark: #333;
  --color-dark-text: #222;

  /* 危险/清空 (红色) */
  --color-danger: #e57373;

  /* 高亮体系 */
  --color-highlight-bg: #fff9c4; /* 棋盘高亮黄 */
  --color-selected-bg: #bbdefb; /* 选中格蓝 */
  --color-note-bg: rgba(255, 193, 7, 0.2); /* 草稿匹配灰黄 */
  --color-note-text: #1565c0; /* 草稿高亮蓝 */

  /* 弹窗与阴影 */
  --color-shadow: rgba(0, 0, 0, 0.08);
  --color-modal: rgba(0, 0, 0, 0.4);

  /* 容器自身属性 */
  max-width: 480px;
  margin: 20px auto;
  padding: 16px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--color-shadow);
  font-family: system-ui, sans-serif;
  position: relative;
}
/* ======================================== */

/* 顶部操作栏：左难度，右新题 */
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.diff-group {
  display: flex;
  gap: 2px;
  background: var(--color-gray-bg);
  padding: 3px;
  border-radius: 8px;
}
.diff-btn {
  padding: 5px 8px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  background: transparent;
  color: #666;
  transition: 0.15s;
  white-space: nowrap;
}
.diff-btn.active {
  background: #fff;
  color: var(--color-dark);
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.diff-btn:hover:not(.active) {
  background: #e8e8e8;
}

/* 统一顶部与底部按钮的纯净色块风格 */
.action-btn {
  padding: 5px 12px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  color: #fff;
  background: var(--color-primary);
  cursor: pointer;
  white-space: nowrap;
}
.action-btn.new-btn {
  background: var(--color-primary);
}
.action-btn.new-btn:active {
  background: var(--color-primary-active);
}

/* 棋盘 */
.board {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  aspect-ratio: 1 / 1;
  border: 2px solid var(--color-dark);
  background: #fff;
}

/* 单个单元格 —— 物理锁死尺寸版 */
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  position: relative;
  font-size: 24px;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  /* ✨ 核心修复：绝对锁死容器，防止被内部弹窗撑大 */
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.cell.original .number {
  color: var(--color-dark-text) !important;
  font-weight: 900 !important;
}
.cell.original {
  background-color: #f5f6f8 !important;
}
.cell:not(.original) .number {
  color: var(--color-note-text) !important;
  font-weight: normal;
}
.cell.is-error .number {
  color: #d32f2f !important;
}
.cell.selected {
  background: var(--color-selected-bg) !important;
}
.cell.highlight {
  background: var(--color-highlight-bg) !important;
}
.cell.note-match {
  background: var(--color-note-bg) !important;
}

/* 粗边框 */
.cell:nth-child(3n) {
  border-right: 2px solid var(--color-dark);
}
.cell:nth-child(9n) {
  border-right: none;
}
.cell:nth-child(n + 19):nth-child(-n + 27) {
  border-bottom: 2px solid var(--color-dark);
}
.cell:nth-child(n + 46):nth-child(-n + 54) {
  border-bottom: 2px solid var(--color-dark);
}

/* 草稿 */
.notes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
  /* ✨ 加上这行，防止任何行高/文字把容器撑破 */
  line-height: 0;
}
.note-num {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  font-size: min(13px, 2.8vmin);
  color: #666;
}
.note-num.highlight-note {
  color: var(--color-note-text);
  font-weight: bold;
}

/* 键盘——边框控制（修正版） */
.keypad {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  margin-top: 16px;
  padding: 0 4px;
}

/* 基础按键：实体蓝色块，适合点击填数 */
.key {
  height: 52px;
  border: none;
  border-radius: 12px;
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  cursor: pointer;
}

/* 1. 点击草稿模式：去掉填充背景，变为透明底 + 边框，视觉降噪 */
.key.note-active {
  background: var(--color-gray-light);
  border: 2px solid var(--color-gray-light);
  color: var(--color-dark);
}

/* 2. 写了草稿的数字：边框变为深色，作为"已选中"标识 */
.key.highlight-note-key {
  background: var(--color-gray-light);
  border: 2px solid var(--color-dark) !important;
  color: var(--color-dark) !important;
}

/* 清空按钮：独立红色块 */
.key.erase-key {
  background: var(--color-danger);
}

/* 底部辅助操作栏：草稿开关 + 重玩 */
.bottom-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
}

/* 草稿 Toggle 开关 */
.toggle-wrapper {
  display: flex;
  align-items: center;
}
.toggle-track {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  height: 34px;
  min-width: 100px;
  border: 2px solid var(--color-gray-light);
  border-radius: 17px;
  background: #fff;
  color: #999;
  font-size: 13px;
  cursor: pointer;
}
.toggle-track .toggle-label {
  margin-right: 8px;
}
.toggle-track .toggle-knob {
  width: 20px;
  height: 20px;
  background: var(--color-gray-light);
  border-radius: 50%;
  flex-shrink: 0;
}

/* 激活状态 */
.toggle-track.active {
  border-color: var(--color-dark);
  background: #f8f8f8;
  color: var(--color-dark);
}
.toggle-track.active .toggle-knob {
  background: var(--color-dark);
  transform: translateX(10px);
}

/* 重玩按钮 */
.action-btn.restart-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 14px;
  height: 34px;
  border: none;
  border-radius: 17px;
  font-size: 13px;
  cursor: pointer;
  background: var(--color-gray-btn);
  color: #444;
}
.action-btn.restart-btn:active {
  background: var(--color-gray-btn-active);
}

/* 弹窗 */
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-modal);
  backdrop-filter: blur(2px);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.modal-box {
  background: #fff;
  width: 85%;
  max-width: 280px;
  padding: 32px 20px 24px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  animation: popUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.modal-icon {
  font-size: 48px;
  margin-bottom: 12px;
  display: block;
}
.modal-title {
  font-size: 20px;
  font-weight: bold;
  color: var(--color-dark-text);
  margin-bottom: 20px;
}
.modal-btn {
  width: 100%;
  padding: 10px 0;
  background: var(--color-primary);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.modal-btn:hover {
  background: var(--color-primary-active);
}
.modal-btn:active {
  transform: scale(0.96);
}

@keyframes popUp {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
