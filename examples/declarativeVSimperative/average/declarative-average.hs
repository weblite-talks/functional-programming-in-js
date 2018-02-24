import Data.Char

scores = [
  [13.5, 14, 15, 20, 14, 15, 18, 12, 13.5],
  [20, 19, 19.5, 16, 15, 13, 16, 14, 16.5],
  [10, 13, 14.5, 12, 15, 17, 19, 12, 15.5]]

-- functions
average array = sum array / (fromIntegral . length) array
arrayAverage = map average

main = do print (arrayAverage scores)
