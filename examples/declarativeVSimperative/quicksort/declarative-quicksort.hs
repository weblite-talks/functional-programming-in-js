quicksort [] = []
quicksort (p:xs) = (quicksort lesser) ++ [p] ++ (quicksort greater)
    where
        lesser  = filter (< p) xs
        greater = filter (>= p) xs


main = do print (quicksort [10, 2, 5, 9, 1, 8, 4, 3, 6, 7])
