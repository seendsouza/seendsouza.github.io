import gray from "gray-percentage"
import verticalRhythm from "compass-vertical-rhythm"
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants"

const theme = {
  title: "seen",
  baseFontSize: "22px",
  baseLineHeight: 1.5,
  headerFontFamily: ["Inter", "sans-serif"],
  bodyFontFamily: ["Inter", "sans-serif"],
  headerColor: "hsla(0,0%,0%,1)",
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 800,
  bodyWeight: 400,
  boldWeight: 700,
  blockMarginBottom: 2 / 3,
  overrideStyles: ({ rhythm }, { blockMarginBottom }) => {
    const vr = verticalRhythm({
      baseFontSize: "12.8px",
      baseLineHeight: "19.2px",
    })

    const styles = {
      [MOBILE_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
      },
      blockquote: {
        color: gray(26.6),
        borderLeft: "4px solid #999",
        paddingLeft: rhythm(blockMarginBottom),
        marginLeft: rhythm(blockMarginBottom),
        marginRight: rhythm(blockMarginBottom),
        marginTop: rhythm(blockMarginBottom),
        marginBottom: rhythm(blockMarginBottom),
      },
      a: {
        fontWeight: "bold",
        color: "#00f",
        textDecoration: "none",
      },
      "a:hover": {
        textDecoration: "underline",
      },
      figcaption: {
        color: gray(26.6),
        fontSize: rhythm(1 / 2),
        marginTop: rhythm(blockMarginBottom / 2),
        marginBottom: rhythm(blockMarginBottom),
      },
    }

    return styles
  },
}

export default theme
