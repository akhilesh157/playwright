n=int(input())
max_length=(n*2)-1
for i in range(1,max_length+1):
    stars="* "
    spaces="  "
    for j in range(1,i+1):
        spaces*=(i-2)
        if i>=3 and i<=(n):
            print(stars+spaces+stars)
        if i>n and i<(max_length-1):
            spaces=
            print(stars+s)
