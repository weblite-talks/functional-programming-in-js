import Data.Char


scores = [
  [[13.5, 14, 15, 20], [14, 15, 18], [12, 13.5]],
  [[20, 19, 19.5, 16], [15, 13, 16], [14, 16.5]],
  [[10, 13, 14.5, 12], [15, 17, 19], [12, 15.5]]]

-- functions
len = fromIntegral . length
average array = sum array / len array
averagePerCourseFunc = map (map average)
averageAllFunc = map average

-- calculating result
averagePerCourse = averagePerCourseFunc scores
averageAll = averageAllFunc averagePerCourse


main = do print averageAll
