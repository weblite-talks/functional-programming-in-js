import Data.List
import Control.Arrow
import Control.Monad
import Data.Maybe

dblflipIt = uncurry ((reverse.).(++)). first reverse
  . ap (flip splitAt) (succ. fromJust. (elemIndex =<< maximum))

dopancakeSort xs = dopcs (xs,[]) where
  dopcs ([],rs) = rs
  dopcs ([x],rs) = x:rs
  dopcs (xs,rs) = dopcs $ (init &&& (:rs).last ) $ dblflipIt xs


main = do print (dopancakeSort [10, 2, 5, 9, 1, 8, 4, 3, 6, 7])
