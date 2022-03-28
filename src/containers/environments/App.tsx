import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import React from "react"
import { Provider } from "react-redux"
import { store } from "store"
import { theme } from "../../lib/theme"
import { AppRoutes } from "../ecosystems/AppRoutes"

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box flexGrow={1} display="flex" zIndex={1} overflow="hidden">
          <AppRoutes />
        </Box>
      </ThemeProvider>
    </Provider>
  )
}