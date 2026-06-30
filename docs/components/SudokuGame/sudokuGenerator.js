// sudokuGenerator.js
// ========================================
// 纯数学算法：数独生成与唯一解校验 (ES6 Module)
// ========================================

function generateFullGrid() {
  const grid = Array(81).fill(0)
  fillGrid(grid)
  return grid
}

function fillGrid(grid) {
  for (let i = 0; i < 81; i++) {
    if (grid[i] === 0) {
      const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])
      for (const num of nums) {
        if (isValid(grid, i, num)) {
          grid[i] = num
          if (fillGrid(grid)) return true
          grid[i] = 0
        }
      }
      return false
    }
  }
  return true
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function isValid(grid, index, num) {
  const row = Math.floor(index / 9)
  const col = index % 9
  const blockStart = Math.floor(row / 3) * 27 + Math.floor(col / 3) * 3
  for (let i = 0; i < 9; i++) {
    if (grid[row * 9 + i] === num || grid[i * 9 + col] === num) return false
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[blockStart + i * 9 + j] === num) return false
    }
  }
  return true
}

function countSolutions(grid, index = 0, count = 0) {
  if (count > 1) return count
  if (index >= 81) return count + 1
  if (grid[index] !== 0) return countSolutions(grid, index + 1, count)
  const row = Math.floor(index / 9)
  const col = index % 9
  const blockStart = Math.floor(row / 3) * 27 + Math.floor(col / 3) * 3
  for (let num = 1; num <= 9; num++) {
    let valid = true
    for (let i = 0; i < 9; i++) {
      if (grid[row * 9 + i] === num || grid[i * 9 + col] === num) {
        valid = false
        break
      }
    }
    if (valid) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[blockStart + i * 9 + j] === num) {
            valid = false
            break
          }
        }
        if (!valid) break
      }
    }
    if (valid) {
      grid[index] = num
      count = countSolutions(grid, index + 1, count)
      grid[index] = 0
      if (count > 1) return count
    }
  }
  return count
}

export function generatePuzzle(difficulty) {
  const answer = generateFullGrid()
  const puzzle = [...answer]
  const holesMap = { easy: 30, medium: 40, hard: 50 }
  let holes = holesMap[difficulty] || 30
  const indices = shuffle([...Array(81).keys()])
  for (const idx of indices) {
    if (holes <= 0) break
    const backup = puzzle[idx]
    puzzle[idx] = 0
    if (countSolutions(puzzle) > 1) {
      puzzle[idx] = backup
    } else {
      holes--
    }
  }
  return { puzzle, answer }
}

export const diffTypes = {
  easy: '😊 轻松',
  medium: '🤔 标准',
  hard: '😈 烧脑',
}
