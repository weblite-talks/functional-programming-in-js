factorial 1 = 1
factorial n = n * factorial (n - 1)

main = do print (factorial 100000)
