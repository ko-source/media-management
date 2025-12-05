import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9333EA", // Purple accent color
      light: "#A855F7",
      dark: "#7E22CE",
    },
    background: {
      default: "#0A0A0A", // Very dark background
      paper: "#1A1A1A", // Dark grey for cards/containers
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h4: {
      fontWeight: 600,
      color: "#FFFFFF",
    },
    h5: {
      fontWeight: 600,
      color: "#FFFFFF",
    },
    h6: {
      fontWeight: 600,
      color: "#FFFFFF",
    },
    body1: {
      color: "#FFFFFF",
    },
    body2: {
      color: "rgba(255, 255, 255, 0.7)",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1A1A1A",
          border: "1px solid rgba(255, 255, 255, 0.12)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#1A1A1A",
            color: "#FFFFFF",
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.12)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#9333EA",
            },
          },
          "& .MuiInputLabel-root": {
            color: "rgba(255, 255, 255, 0.7)",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1A1A1A",
          border: "1px solid rgba(255, 255, 255, 0.12)",
        },
        option: {
          "&:hover": {
            backgroundColor: "rgba(147, 51, 234, 0.1)",
          },
          "&.Mui-focused": {
            backgroundColor: "rgba(147, 51, 234, 0.2)",
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#9333EA",
        },
        thumb: {
          backgroundColor: "#9333EA",
          border: "2px solid #FFFFFF",
        },
        track: {
          backgroundColor: "#9333EA",
        },
        rail: {
          backgroundColor: "#2A2A2A",
        },
        valueLabel: {
          backgroundColor: "#9333EA",
          color: "#FFFFFF",
        },
      },
    },
  },
});

