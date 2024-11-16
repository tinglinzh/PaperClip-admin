import { createSlice } from '@reduxjs/toolkit'

const systemTheme = {
  theme: 'light',
}

const systemThemeSlice = createSlice({
  name: 'systemTheme',
  initialState: systemTheme,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload === 'light' ? 'dark' : 'light'
    },
    // // 可以接受额外参数的 reducer 函数
    // incrementByAmount(state, action) {
    //   state.count += action.payload
    // },
  },
})

// 导出action creators
export const { setTheme } = systemThemeSlice.actions
// 导出reducer
export default systemThemeSlice.reducer
