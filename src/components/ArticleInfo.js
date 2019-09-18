/** @jsx jsx */
import { jsx } from "theme-ui"
import { formatPostDate, formatReadingTime } from "../utils/helpers"

function ArticleInfo({ date, timeToRead, ...props }) {
  return (
    <small {...props}>
      {formatPostDate(date, "en")}
      <span sx={{ mx: 1 }}>•</span>
      {formatReadingTime(timeToRead)}
    </small>
  )
}

export default ArticleInfo
